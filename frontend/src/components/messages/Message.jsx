import React from 'react'
import { useAuthContext } from '../../context/AuthContextStore';
import useConversation from '../../zustand/useConversations';
import formatTime from '../../utils/timeFormat';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedUser } = useConversation();

  const fromMe = message.senderId === authUser._id;
  return (
    <div className={`chat my-2 ${fromMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className=" size-6 xs:size-10 rounded-full">
          <img
            alt="user Profile"
            src={fromMe ? authUser.profilePicture : selectedUser.profilePicture} />
        </div>
      </div>
      <div className={`chat-bubble text-white  text-sm leading-none xs:text-[1rem]  break-words max-w-[80%] ${fromMe ? "bg-sky-500" : "bg-zinc-900"}`}><p className='h-3 text-xs font-extralight text-gray-300 w-full flex justify-end my-1'>{formatTime(message.createdAt)}</p>{message.message}</div>

    </div>

  )
}

export default Message;