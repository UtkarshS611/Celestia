import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";

const Footer = (props) => {

    const{handleToggleModal} = props;

    return (
        <footer className='fixed text-white p-4 bottom-0 left-0 w-full flex  gap-4 justify-between'>
            <div
                className='absolute inset-0 z-[-1] bg-gradient-to-t from-white/10 to-[#0000]'
            ></div>
            <div className='flex flex-col '>
                <h2 className='text-[2.4rem]'>Welcome to outer space</h2>
                <h1 className='text-[2rem] font-light'>A short description</h1>
            </div>
            <button className='p-4' onClick={handleToggleModal}>
                <BsInfoCircleFill className='text-2xl'/>
            </button>
        </footer>
    )
}

export default Footer
