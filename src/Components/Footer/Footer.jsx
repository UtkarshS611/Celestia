import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";

const Footer = (props) => {

    const{handleToggleModal , data} = props;

    return (
        <footer className='fixed text-white p-4 bottom-0 left-0 w-full flex  gap-4 justify-between'>
            <div
                className='absolute inset-0 z-[-1] bg-gradient-to-t from-white/10 to-[#0000]'
            ></div>
            <div className='flex flex-col '>
                <h1 className='text-[2rem] font-extralight'>Astronomy picture of the day</h1>
                <h2 className='text-[2.4rem]'>{data?.title}</h2>
            </div>
            <button className='p-4 text-black' onClick={handleToggleModal}>
                <BsInfoCircleFill className='text-2xl'/>
            </button>
        </footer>
    )
}

export default Footer
