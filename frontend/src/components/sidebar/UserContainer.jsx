import React from 'react'
import UserCards from './UserCards'
import useGetUsers from '../../hooks/useGetUsers';

const UserContainer = ({ loading, users, setSearchText }) => {

    return (
        <div className='flex flex-col my-6 max-h-[80%] overflow-y-auto scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-transparent'>
            {loading
                ? "Loading..."
                :
                users?.map((item) => (
                    <UserCards key={item._id} user={item} setSearchText={setSearchText} />
                ))
            }
        </div>
    )
}

export default UserContainer