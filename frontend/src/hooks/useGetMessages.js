import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversations';
import { toast } from 'react-toastify';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedUser } = useConversation();

    useEffect(() => {
        
        setLoading(true);
        const getMessages = async () => {
            try {
                if (!selectedUser)
                    return;

                const res = await fetch(`/api/message/${selectedUser?._id}`);
                const response = await res.json();

                if (!res || !response)
                    throw new Error("Bad Request");

                if (!response.success)
                    throw new Error(response.message);


                setMessages(response.result);
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        getMessages();
    }, [selectedUser?._id])

    return { messages, loading };

}

export default useGetMessages