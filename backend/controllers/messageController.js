import conversationModel from "../models/conversationModel.js";
import messageModel from "../models/messageModel.js";

export const sendMessage = async (req, res) => {

    try {
        //extract data from relevant sources
        const { receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;

        //find a conversation including these two participants and create one if doesn't exists already
        let conversation = await conversationModel.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = new conversationModel({
                participants: [senderId, receiverId]
            });
        }

        //create the message and push it to conversation messages field
        const newMessage = new messageModel({
            senderId,
            receiverId,
            message
        });

        console.log(message);


        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //SOCKET FUNCTIONALITY WILL GO HERE

        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]); //both process will execute in parallel

        //send the response with message
        res.status(201).json({ success: true, result: newMessage })


    } catch (error) {
        console.log("Error in sending message\n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error!" });
    }


}

export const getMessages = async (req, res) => {

    try {

        const { secondUserId } = req.params;
        const firstUserId = req.user._id;


        const currentConversation = await conversationModel.findOne({
            participants: { $all: [firstUserId, secondUserId] }
        }).populate("messages"); //instead of message id this will spread all the messages as object

        if (!currentConversation)
            return res.status(200).json({ success: true, result: [] });


        return res.status(200).json({ success: true, result: currentConversation.messages });

    } catch (error) {
        console.log("Error in sending message\n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error!" });
    }
}