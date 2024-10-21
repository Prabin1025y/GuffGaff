import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel",
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel",
        required: true,
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true }); //automatically add createdat and updatedat field in database

const messageModel = mongoose.models.messageModel || mongoose.model("messageModel", messageSchema);

export default messageModel;