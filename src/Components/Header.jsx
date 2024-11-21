import React from 'react';
import {CiSearch} from "react-icons/ci";
import {FaRegHeart} from "react-icons/fa";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";

function Header(props) {
    return (
        <header>
            <div
                className="top-header flex flex-row justify-center items-center text-center w-full bg-black gap-4 h-8 p-6">
                <p className={"text-[#FAFAFA] text-[14px]"}>Summer Sale For All Swim Suits And Free Express Delivery -
                    OFF 50%!</p>
                <p className={"text-white underline font-extrabold"}>ShopNow</p>
            </div>
            <nav className={"w-full p-2 flex flex-row justify-between items-center gap-4 shadow-md"}>
                <h1 className={"text-black text-[24px] font-bold"}>Exclusive</h1>
                <ul className={"flex flex-row items-center gap-4"}>
                    <li className={"text-black text-[16px] font-light"}>Home</li>
                    <li className={"text-black text-[16px] font-light"}>Contact</li>
                    <li className={"text-black text-[16px] font-light"}>About</li>
                    <li className={"text-black text-[16px] font-light"}>Signup</li>
                </ul>
                <div className={"flex flex-row items-center justify-between gap-4"}>
                    <div
                        className={"bg-white rounded-lg border border-black flex flex-row gap-4 items-center justify-between"}>
                        <input placeholder={"Search"} type={"text"}
                               className={"w-full p-2 rounded-lg border-none focus:outline-none"}/>
                        <button>
                            <CiSearch size={30}/>
                        </button>
                    </div>
                    <div className={"flex flex-row gap-4 justify-between items-center w-fit"}>
                        <button>
                            <FaRegHeart size={20}/>
                        </button>
                        <button>
                            <AiOutlineShoppingCart size={20}/>
                        </button>
                        <button>
                            <FaRegUserCircle size={20}/>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;