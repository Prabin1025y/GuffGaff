import React from 'react'

const UserCards = () => {
    return (
        <>
        <div className='py-3 px-4 flex justify-between items-center hover:bg-sky-700 rounded-sm transition duration-300 cursor-pointer'>
            <div className=' flex gap-3 items-center font-semibold'>
                <div className="avatar online size-12">
                    <div className="w-24 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <p>Prabin Acharya</p>
            </div>
            <p className='text-xl'>😎</p>
        </div>
        <hr className='border-sky-700'/>
        </>
    )
}

export default UserCards