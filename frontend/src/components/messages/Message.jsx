import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-start my-2">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-sky-900"><p className='h-3 text-xs font-extralight text-gray-300 w-full flex justify-end my-1'>22:23</p>It was said that you would, destroy the Sith, not join them.</div>

    </div>

  )
}

export default Message;