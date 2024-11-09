import React from 'react'
import useConversation from '../../zustand/useConversations';
import { useSocketContext } from '../../context/SocketContext';

const UserCards = ({ user, setSearchText, isMenuOpen, setIsMenuOpen }) => {
    const { selectedUser, setSelectedUser } = useConversation();

    const isSelected = selectedUser?._id === user?._id;

    const { onlineUsers } = useSocketContext();

    const isOnline = onlineUsers.includes(user?._id);

    const onClickHandler = () => {
        setIsMenuOpen(false);
        setSelectedUser(user);
        setSearchText("");
    }

    return (
        <>
            <div onClick={onClickHandler} className={`py-3 lg:px-1 px-4 flex ${isMenuOpen || "justify-center md:justify-normal"}  items-center hover:bg-sky-700 rounded-sm transition duration-300 cursor-pointer ${isSelected && "bg-sky-700"}`}>
                <div className=' flex gap-3 items-center font-semibold'>
                    <div className={`avatar size-8 xs:size-12 ${isOnline ? "online" : ""}`}>
                        <div className="w-24 rounded-full">
                            <img src={user.profilePicture} />
                        </div>
                    </div>
                    <p className={`${isMenuOpen || "hidden md:block"}`}>{user.fullName}</p>
                </div>
            </div>
            <hr className='border-sky-700' />
        </>
    )
}

export default UserCards