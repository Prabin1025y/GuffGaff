import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversations';

import notificationSound from "/sound/notification.mp3";

const useListenToMessage = () => {

    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const notification = new Audio(notificationSound);
            notification.play();
            setMessages([...messages, newMessage]);
        })

        return () => socket?.off("newMessage");
    }, [socket, messages, setMessages])


}

export default useListenToMessage