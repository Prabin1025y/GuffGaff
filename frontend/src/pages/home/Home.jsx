import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'
import MiniSideBar from '../../components/sidebar/MiniSideBar'

const Home = () => {
    return (
        <div className='h-screen xs:h-[98vh] bg-sky-700 xs:rounded-3xl flex overflow-hidden'>
            {/* <MiniSideBar /> */}
            <SideBar />
            <MessageContainer />
        </div>
    )
}

export default Home