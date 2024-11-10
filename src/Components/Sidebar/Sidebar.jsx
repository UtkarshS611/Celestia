import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Sidebar = (props) => {

    const{handleToggleModal} = props;

    return (
        <section className="fixed text-white flex flex-col z-10 sm:relative sm:min-w-[30%]">
            <div className="z-[15] relative flex flex-col gap-4 p-4 overflow-y-scroll h-screen w-[100%] max-w-[800px] ml-auto bg-[#030615]">
                <h2>The Brutal Marshal landscape</h2>
                <div className="flex-1">
                    <p>Description</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                        inventore enim laudantium quae facilis, praesentium nesciunt, ipsam
                        repellendus nam veritatis cum excepturi in dolores eveniet dolor
                        amet. Asperiores, explicabo labore.
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
