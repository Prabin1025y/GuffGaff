import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import UserContainer from './UserContainer'
import { IoLogOutOutline, IoMenu } from "react-icons/io5";
import useLogOut from '../../hooks/useLogOut';
import { useAuthContext } from '../../context/AuthContext';
import useGetUsers from '../../hooks/useGetUsers';

const SideBar = () => {

    const [searchText, setSearchText] = useState("");
    const [searchUsers, setSearchUsers] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { logout, isLoading } = useLogOut();
    const { authUser } = useAuthContext();
    const { loading, users } = useGetUsers();

    useEffect(() => {
        const filteredUsers = users?.filter((item) => item.fullName.toLowerCase().includes(searchText.toLowerCase()));
        setSearchUsers(filteredUsers);
    }, [searchText])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768)
                setIsMenuOpen(false);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])



    return (
        <div className={`${isMenuOpen ? "absolute w-[100%] xs:rounded-3xl h-screen xs:w-calc-100-10px xs:h-[98vh]" : "w-16 xs:w-24 md:w-[35%] lg:w-[30%]"} transition-all duration-300 bg-sky-900 p-2 lg:p-8 z-10`}>

            <div className={`${isMenuOpen ? "flex" : "hidden md:flex"} gap-2 items-center mb-6 px-6 pt-6 lg:px-0 lg:pt-0`}>
                <img className='h-12 aspect-square' src={authUser.profilePicture} alt="avatar" />
                <p className='text-lg font-semibold'>{authUser.fullName}</p>
                <div className='flex-1 flex justify-end items-center'>
                    <div className='flex flex-col items-center cursor-pointer'>
                        {isLoading ? <span className='loading loading-spinner'></span> : <><IoLogOutOutline onClick={logout} className='size-6 cursor-pointer' /><p className='text-xs font-thin'>Log Out</p></>}

                    </div>
                </div>
            </div>

            {/* <img className='h-12 aspect-square mx-auto md:hidden' src={authUser.profilePicture} alt="menu" /> */}
            <IoMenu onClick={() => setIsMenuOpen(true)} className={`${isMenuOpen && "hidden"} size-6 xs:size-8 aspect-square mx-auto md:hidden`} />

            <div className={`${isMenuOpen ? "" : "hidden md:block "} divider divide-gray-200`}></div>

            <span className={`${isMenuOpen || " hidden md:inline"}`}><SearchBar searchText={searchText} setSearchText={setSearchText} /></span>

            <UserContainer loading={loading} users={searchText === "" ? users : searchUsers} setSearchText={setSearchText} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
    )
}

export default SideBar