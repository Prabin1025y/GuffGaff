import React from 'react'
import useConversation from '../../zustand/useConversations';

const UserCards = ({ user }) => {
    const { selectedUser, setSelectedUser } = useConversation();

    const isSelected = selectedUser?._id === user?._id;

    return (
        <>
            <div onClick={()=>setSelectedUser(user)} className={`py-3 px-4 flex justify-between items-center hover:bg-sky-700 rounded-sm transition duration-300 cursor-pointer ${isSelected && "bg-sky-700"}`}>
                <div className=' flex gap-3 items-center font-semibold'>
                    <div className="avatar online size-12">
                        <div className="w-24 rounded-full">
                            <img src={user.profilePicture} />
                        </div>
                    </div>
                    <p>{user.fullName}</p>
                </div>
                <p className='text-xl'>😎</p>
            </div>
            <hr className='border-sky-700' />
        </>
    )
}

export default UserCards