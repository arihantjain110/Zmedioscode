import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const HeaderLogo = () => {
    return (
        <div className="md:grid grid-cols-9 gap-10 items-center pt-3 hidden">
            <div className="flex items-center gap-20 col-span-5">   
                <Link href="/">
                    <div>
                        <img
                            height={64}
                            width={304}
                            src="/assets/images/ZmediosLogo.png" 
                            alt=""
                            className="w-76 h-16 object-cover"/>
                    </div>
                </Link>
            </div>

            <div className="flex justify-between items-center space-x-6 col-span-4">
                <Link href="/hireme">
                    <button className=" button-1 bg-orange-500  px-2 py-2 rounded-md">
                    {/* <button className=" flex justify-end items-center px-2 py-2 rounded-md bg-orange-500 text-white"> */}
                        {/* <FiArrowUpRight size={20} /> */}    
                        <div className="eff-1"></div>
                        {/* <h2>Hire Me</h2> */}
                        <span  className="text-base flex items-center font-semibold">Hire Me</span>
                    </button>    
                </Link>
                <Link href="/hire-developer">
                    <button className=" button-1 bg-orange-500  px-2 py-2 rounded-md">
                    {/* <button className="flex justify-end items-center px-2 py-2 rounded-md bg-orange-500 text-white"> */}
                        {/* <FiArrowUpRight size={20} /> */}  
                        <div className="eff-1"></div>
                        {/* <h2>On Demand Developer</h2> */}
                        <span  className="text-base flex items-center font-semibold">On Demand Developer</span>
                    </button>    
                </Link>
                <Link href="/contact">
                    <button className="button-3  bg-secondary text-white cursor-pointer rounded-md">  
                        <div className="eff-3"></div>
                        {/* <h2 className="px-2 py-2 rounded-md">Contact Us</h2>     */}
                        <span  className="px-2 py-2 rounded-md text-base flex items-center font-semibold">Contact Us</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HeaderLogo;
