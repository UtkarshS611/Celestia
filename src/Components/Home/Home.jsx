import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

const Home = (props) => {

    const{data} = props

    return (
        <div className='flex flex-col'>
            <img
                src={data.url}
                alt={data.title} 
                className='h-full w-full flex-1 object-cover'
            />
        </div>
    )
}

export default Home
