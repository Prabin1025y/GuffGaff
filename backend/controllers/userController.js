import userModel from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {

        const currentUserId = req.user._id;

        //get all the users except with one with current user id
        const filteredUsers = await userModel.find({
            _id: { $ne: currentUserId }
        }).select("-password");

        res.status(200).json({ success: true, result: filteredUsers });

    } catch (error) {
        console.log("Error while getting user\n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}