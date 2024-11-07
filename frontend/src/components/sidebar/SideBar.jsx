import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import UserContainer from './UserContainer'
import { IoLogOutOutline } from "react-icons/io5";
import useLogOut from '../../hooks/useLogOut';
import { useAuthContext } from '../../context/AuthContext';
import useGetUsers from '../../hooks/useGetUsers';

const SideBar = () => {

    const [searchText, setSearchText] = useState("");
    const [searchUsers, setSearchUsers] = useState([]);

    const { logout, isLoading } = useLogOut();
    const { authUser } = useAuthContext();
    const { loading, users } = useGetUsers();

    useEffect(() => {
        const filteredUsers = users?.filter((item) => item.fullName.toLowerCase().includes(searchText.toLowerCase()));
        setSearchUsers(filteredUsers);
    }, [searchText])


    return (
        <div className='w-[30%] bg-sky-900 p-8'>

            <div className='flex gap-2 items-center mb-6'>
                <img className='h-12 aspect-square' src={authUser.profilePicture} alt="avatar" />
                <p className='text-lg font-semibold'>{authUser.fullName}</p>
                <div className='flex-1 flex justify-end items-center'>
                    <div className='flex flex-col items-center cursor-pointer'>
                        {isLoading ? <span className='loading loading-spinner'></span> : <><IoLogOutOutline onClick={logout} className='size-6 cursor-pointer' /><p className='text-xs font-thin'>Log Out</p></>}

                    </div>
                </div>
            </div>

            <div className='divider divide-gray-200'></div>

            <SearchBar searchText={searchText} setSearchText={setSearchText} />

            <UserContainer loading={loading} users={searchText === "" ? users : searchUsers} setSearchText={setSearchText} />
        </div>
    )
}

export default SideBar