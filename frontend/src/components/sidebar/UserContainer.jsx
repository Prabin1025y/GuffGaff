import React from 'react'
import UserCards from './UserCards'

const UserContainer = ({ loading, users, setSearchText, isMenuOpen, setIsMenuOpen }) => {

    return (
        <div className='flex flex-col my-6 max-h-[80%] overflow-y-auto scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-transparent'>
            {loading
                ? "Loading..."
                :
                users?.map((item) => (
                    <UserCards key={item._id} user={item} setSearchText={setSearchText} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                ))
            }
            {!loading && users.length === 0 &&
                "No such user exists."
            }
        </div>
    )
}

export default UserContainer