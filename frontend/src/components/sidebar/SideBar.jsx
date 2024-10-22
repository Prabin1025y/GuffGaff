import React from 'react'
import SearchBar from './SearchBar'
import UserContainer from './UserContainer'
import { IoLogOutOutline } from "react-icons/io5";

const SideBar = () => {
    return (
        <div className='w-[30%] bg-sky-900 p-8'>

            <div className='flex gap-2 items-center mb-6'>
                <img className='h-12 aspect-square' src="https://avatar.iran.liara.run/public/boy?username=prabin_acharya" alt="avatar" />
                <p className='text-lg font-semibold'>Prabin Acharya</p>
                <div className='flex-1 flex justify-end items-center'>
                    <div className='flex flex-col items-center cursor-pointer'>
                        <IoLogOutOutline className='size-6 cursor-pointer' /><p className='text-xs font-thin'>Log Out</p>
                    </div>
                </div>
            </div>

            <div className='divider divide-gray-200'></div>

            <SearchBar />

            <UserContainer />
        </div>
    )
}

export default SideBar