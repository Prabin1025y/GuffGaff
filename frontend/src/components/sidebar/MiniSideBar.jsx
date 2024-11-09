import React, { useEffect, useState } from 'react'
import UserContainer from './UserContainer'
import useLogOut from '../../hooks/useLogOut';
import { useAuthContext } from '../../context/AuthContext';
import useGetUsers from '../../hooks/useGetUsers';

const MiniSideBar = () => {

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
        <div className='w-24 lg:w-[30%] bg-sky-900 p-2 lg:p-8'>

            <div className='flex gap-2 items-center mb-6'>
                <img className='h-12 aspect-square' src={authUser.profilePicture} alt="avatar" />
            </div>

            <div className='divider divide-gray-200'></div>

            <UserContainer loading={loading} users={searchText === "" ? users : searchUsers} setSearchText={setSearchText} />
        </div>
    )
}

export default MiniSideBar