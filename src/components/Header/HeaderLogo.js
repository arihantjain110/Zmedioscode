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
                    <div className="flex justify-end items-center px-2 py-2 rounded-md bg-orange-500 text-white">
                        <FiArrowUpRight size={20} />
                        <h2>Hire Me</h2>
                    </div>    
                </Link>
                <Link href="/hire-developer">
                    <div className="flex justify-end items-center px-2 py-2 rounded-md bg-orange-500 text-white">
                        <FiArrowUpRight size={20} />
                        <h2>On Demand Developer</h2>
                    </div>    
                </Link>
                <Link href="/contact">
                    <div className="bg-[#1c1e22] text-white cursor-pointer rounded-md">
                        <h2 className="px-2 py-2 rounded-md">Contact Us</h2>    
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HeaderLogo;
