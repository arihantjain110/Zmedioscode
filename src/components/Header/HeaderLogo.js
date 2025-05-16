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
              className="w-76 h-16 object-cover"
            />
          </div>
        </Link>
      </div>

      <div className="flex justify-between items-center space-x-6 col-span-4">
        {/* <Link href="/hireme">
                    <button className=" button-1 bg-orange-500  px-2 py-2 rounded-md">
                   
                        <div className="eff-1"></div>
                      
                        <span  className="text-base flex items-center font-semibold">Hire Me</span>
                    </button>    
                </Link> */}
        {/* <Link href="/hire-developer">
                    <button className=" button-1 bg-orange-500  px-2 py-2 rounded-md">
                   
                        <div className="eff-1"></div>
                      
                        <span  className="text-base flex items-center font-semibold">On Demand Developer</span>
                    </button>    
                </Link> */}
        <div className="w-full flex justify-end">
          <Link href="/contact">
            <button className="button-3 bg-secondary text-white cursor-pointer rounded-md relative overflow-hidden">
              <div className="eff-3 absolute inset-0"></div>
              <span className="px-4 py-2 rounded-md text-base flex items-center font-semibold relative z-10">
                Contact Us
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
