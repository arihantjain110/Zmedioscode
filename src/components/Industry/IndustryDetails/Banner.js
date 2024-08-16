import React from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <div className="md:px-0 px-5">
        <div className="">
          <div className="md:grid grid-cols-2 gap-10 items-center container-ack">
            <div className="pb-5 pt-10 relative ">
              <img
                src="/assets/images/industry/lineCircle.png" alt=""
                className="absolute top-4 -left-8 w-24"
              />
              <img
                src="/assets/images/aboutusimg3.png"
                alt=""
                className="rounded-md"
              />
              <img
                src="/assets/images/industry/Frame.png" alt=""
                className="absolute bottom-0 -right-8 w-24"
              />
            </div>

            <div className=" md:px-0 px-2 pb-10 md:pb-0  relative">
              <div className="">
                <div className="text-3xl   font-semibold ">
                Welcome to Our World of Innovation and Excellence
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-8 pt-4">
                  We are committed to pushing the boundaries of science and technology, 
                  bringing together some of the brightest minds in the industry. Our advisors, 
                  who are experts in their fields, help guide us towards groundbreaking discoveries 
                  and advancements that shape the future of healthcare and research.
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
                  With decades of experience and a passion for innovation, our team is dedicated 
                  to improving lives through cutting-edge solutions and a deep understanding of 
                  the challenges facing the world today.
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
