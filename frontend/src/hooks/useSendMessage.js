import React from 'react'
import useConversation from '../zustand/useConversations'
import { toast } from 'react-toastify';

const useSendMessage = () => {
    const { selectedUser, setMessages, messages } = useConversation();

    const sendMessage = async (message) => {
        try {
            const res = await fetch(`/api/message/send/${selectedUser._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            });
            const response = await res.json();

            if (!response || !res)
                throw new Error("Bad Request");

            if (!response.success)
                throw new Error(response.message);

            setMessages([...messages, response.result]);


        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return { sendMessage };
}

export default useSendMessage