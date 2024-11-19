import Link from "next/link";
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-[#F6F8F9] py-16  md:px-0 px-5 ">
      <div className="container-ack bg-white drop-shadow-md rounded-lg ">
        <div className="grid md:grid-cols-2 gap-6 items-center container-ack ">
          <div className=" ">
            <img src="/assets/images/aboutImg.png" alt="" />
          </div>

          <div className=" md:px-16 px-5 pb-10 md:pb-0">
            <div className="text-3xl font-bold   ">
              We&apos;re committed to deliver high quality projects
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              We believe that every business that we work with is unique, with
              its own specific needs and challenges. Because of this, we handle
              each project uniquely; every project requires a special level of
              attention to detail, thus we develop special solutions to meet
              their needs.
            </div>

            <div className="flex justify-start pb-10 pt-5">
              <Link href="/contact">
                <button className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-orange-400 rounded-xl hover:bg-orange-500 group">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Know More
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
