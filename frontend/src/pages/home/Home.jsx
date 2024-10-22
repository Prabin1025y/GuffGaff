import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
    return (
        <div className='h-[98vh] bg-sky-700 rounded-3xl flex overflow-hidden'>
            <SideBar />
            <MessageContainer />
        </div>
    )
}

export default Home