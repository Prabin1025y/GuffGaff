import React from 'react'
import UserCards from './UserCards'

const UserContainer = () => {
    return (
        <div className='flex flex-col my-6'>
            <UserCards />
            <UserCards />
            <UserCards />
            <UserCards />
            <UserCards />
            <UserCards />
            <UserCards />
        </div>
    )
}

export default UserContainer