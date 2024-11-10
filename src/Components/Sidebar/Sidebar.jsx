import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Sidebar = (props) => {

    const{handleToggleModal , data} = props;

    return (
        <section className="fixed text-white flex flex-col z-10 sm:relative sm:min-w-[30%]">
            <div className="z-[15] relative flex flex-col gap-4 p-4 overflow-y-scroll h-screen w-[100%] max-w-[800px] ml-auto bg-[#030615]">
                <h2 className="text-3xl">{data?.title}</h2>
                <div className="flex-1 flex flex-col gap-2">
                    <p className="text-normal font-light">{data?.date}</p>
                    <p>
                    {data?.explanation}
                    </p>
                </div>
                <button className="bg-transparent border-none outline-none mr-auto" onClick={handleToggleModal}>
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export default Sidebar;
