import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { FiSend } from "react-icons/fi";
import useConversation from '../../zustand/useConversations';
import useSendMessage from '../../hooks/useSendMessage';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from './MessageSkeleton';
import useListenToMessage from '../../hooks/useListenToMessage';
import { useSocketContext } from '../../context/SocketContext';

const MessageContainer = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  const { selectedUser, setSelectedUser } = useConversation();
  const { sendMessage } = useSendMessage();
  const { loading, messages } = useGetMessages();
  useListenToMessage();

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedUser?._id);

  const lastMessageRef = useRef();


  useEffect(() => {
    return () => setSelectedUser(null);
  }, [])

  useEffect(() => {
    setTimeout(() => {

      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages])


  const handleSubmit = async (event) => {
    event.preventDefault();

    await sendMessage(currentMessage);
    setCurrentMessage("");

  }


  return (
    <div className='flex-1 bg-sky-950 py-10 px-2 sm:px-10'>
      {selectedUser ?
        <>
          <div className='flex gap-1 xs:gap-5 items-center font-semibold'>
            <div className={`avatar size-10 xs:size-16 ${isOnline ? "online" : ""}`}>
              <div className="w-24 rounded-full">
                <img src={selectedUser?.profilePicture} />
              </div>
            </div>
            <div className='text-lg xs:text-2xl'>{selectedUser?.fullName} <p className='text-sm font-thin'>{selectedUser?.username}</p></div>
          </div>
          <hr className='my-5 border-sky-500' />
          <div className='max-h-[80%] min-h-[80%] overflow-y-auto scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-transparent'>
            {loading && <>
              <MessageSkeleton />
              <MessageSkeleton />
              <MessageSkeleton />
              <MessageSkeleton />
              <MessageSkeleton />
              <MessageSkeleton />
              <MessageSkeleton />
            </>
            }
            {!loading && messages.length < 1 &&
              <p className='flex justify-center items-center'>Send a message to start conversation</p>
            }

            {!loading && messages.length > 0 &&

              messages.map((item) => (
                <div ref={lastMessageRef} key={item._id}>
                  <Message message={item} />
                </div>
              ))

            }
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center px-4 py-3 my-3 rounded-full bg-sky-800 overflow-hidden h-fit mx-auto font-[sans-serif] text-wrap">
              <input onChange={(e) => setCurrentMessage(e.target.value)} value={currentMessage} type="text" placeholder="Type A message" className="w-full outline-none bg-transparent text-white text-sm text-wrap" />
              <button type="submit">
                <FiSend className='size-6 cursor-pointer ' />
              </button>
            </div>
          </form>
        </>
        :
        <EmptyMessage />
      }
    </div>
  )
}

export default MessageContainer;

const EmptyMessage = () => {
  return (
    <div className='flex justify-center items-center'>Select someone to start conversation.</div>
  )
}