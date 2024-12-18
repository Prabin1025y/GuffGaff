import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel",
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "messageModel",
        default: []
    }]
}, { timestamps: true });

const conversationModel = mongoose.models.conversationModel || mongoose.model("conversationModel", conversationSchema);

export default conversationModel;