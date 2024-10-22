import React from 'react'
import Message from './Message'
import { FiSend } from "react-icons/fi";

const MessageContainer = () => {
  return (
    <div className='flex-1 bg-sky-950 p-10'>
      <div className='flex gap-5 items-center font-semibold'>
        <div className="avatar online size-16">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <p className='text-2xl'>Prabin Acharya <p className='text-sm font-thin'>Active now</p></p>
      </div>
      <hr className='my-5 border-sky-500' />
      <div className='max-h-[80%] overflow-y-auto scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-transparent'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div class="flex items-center px-4 py-3 my-3 rounded-full bg-sky-800 overflow-hidden h-fit mx-auto font-[sans-serif] text-wrap">
        <input type="text" placeholder="Type A message" className="w-full outline-none bg-transparent text-white text-sm text-wrap" />
        <FiSend className='size-6 cursor-pointer ' />
      </div>
    </div>
  )
}

export default MessageContainer