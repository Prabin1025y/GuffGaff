import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true, minLength: 6 },
    gender: { type: String, requires: true, enum: ["male", "female"] },
    profilePicture: { type: String, default: "" }
});

const userModel = mongoose.models.userModel || mongoose.model("userModel", userSchema);

export default userModel;