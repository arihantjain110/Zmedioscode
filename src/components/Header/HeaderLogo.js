import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const HeaderLogo = () => {
  return (
    <div className="md:grid grid-cols-9 gap-10 items-center pt-3 mb-2 hidden">
      <div className="flex items-center gap-20 col-span-5">
        <Link href="/">
          <div>
            <img
              height={64}
              width={200}
              src="/assets/images/ZmediosLogo.png"
              alt=""
              className="w-76 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </Link>
      </div>

      <div className="flex justify-evenly items-center space-x-6 col-span-4">
        <Link href="/hireme">
          {/* <button className=" button-1 bg-orange-500  px-2 py-2 rounded-md">
            <div className="eff-1"></div>
            <span className="text-base flex items-center font-semibold">
              Hire Me
            </span>
          </button> */}
          {/* <button className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-orange-600 rounded-xl group">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-500 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              hire me
            </span>
          </button> */}
          <button className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-orange-400 rounded-xl hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Hire me
            </span>
          </button>
        </Link>
        <Link href="/hire-developer">
          {/* <button className=" button-1 bg-orange-500  px-2 py-2 rounded-md">
            <div className="eff-1"></div>
            <span className="text-base flex items-center font-semibold">
              On Demand Developer
            </span>
          </button> */}
          <button className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-orange-400 rounded-xl hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-sm text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Hire Developer
            </span>
          </button>
        </Link>
        <Link href="/contact">
          {/* <button className="button-3  bg-secondary text-white cursor-pointer rounded-md">
            <div className="eff-3"></div>
            <span className="px-2 py-2 rounded-md text-base flex items-center font-semibold">
              Contact Us
            </span>
          </button> */}
          <button className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-black rounded-xl hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black">
              Contact
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLogo;
