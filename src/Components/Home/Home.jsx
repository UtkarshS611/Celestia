import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

const Home = () => {

    return (
        <div className='flex flex-col'>
            <img
                src="Main_bg.png"
                alt="Landing Page background" 
                className='h-full w-full flex-1 object-cover'
            />
        </div>
    )
}

export default Home
