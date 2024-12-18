import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/jwtGenerate.js";

import { createAvatar } from '@dicebear/core';
import { micah } from '@dicebear/collection';

// signup logic
export const signup = async (req, res) => {
    console.log("signup");

    try {
        // Extract required parameters from body sent from frontend
        const { fullName, username, password, confirmPassword, gender } = req.body;

        //check if confirm password match with password
        if (password !== confirmPassword)
            return res.status(400).json({ success: false, message: "confirm password doesn't match!" });

        //check if the user with given username already exists.
        const user = await userModel.findOne({ username });

        if (user)
            return res.status(400).json({ success: false, message: "username not available" });


        //Hash Password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //avatar url generation
        const avatar = createAvatar(micah, {
            seed: username,
            radius: 50,
            backgroundColor: ["b6e3f4", "c0aede", "d1d4f9"],
            baseColor: ["ac6651", "f9c9b6"],
            facialHairProbability: gender === "male" ? 60 : 0,
            hair: gender === "male" ? ["dougFunny", "fonze", "mrClean", "mrT", "turban"] : ["dannyPhantom", "full", "pixie"],
        });


        //create a new user from usermodel using above info
        const newUser = new userModel({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePicture: avatar.toDataUri()
        })

        if (newUser) {
            await newUser.save();

            //JWT controller
            generateTokenAndSetCookie(newUser._id, res);

            //send the response with success message and created user info
            return res.status(200).json({
                success: true, result: {
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    username: newUser.username,
                    gender: newUser.gender,
                    profilePicture: newUser.profilePicture
                }
            })
        } else {
            return res.status(400).json({ success: false, message: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in SignUp \n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

}

export const login = async (req, res) => {
    try {
        //fetch username and password from frontend
        const { username, password } = req.body;

        //find the user and check if credentials are correct
        const user = await userModel.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect)
            return res.status(400).json({ success: false, message: "Invalid Credentials" })

        //generate token if everything went right and response
        generateTokenAndSetCookie(user._id, res);

        return res.status(201).json({
            success: true, result: {
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                gender: user.gender,
                profilePicture: user.profilePicture,
            }
        });

    } catch (error) {
        console.log("Error in Login \n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const logout = (req, res) => {
    try {
        //delete token by setting expire time to current time
        res.cookie("token", "", { maxAge: 0 });
        return res.status(200).json({ success: true, message: "Logged Out Successfully" });

    } catch (error) {
        console.log("Error in Login \n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}