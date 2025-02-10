"use client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { HiLightBulb } from "react-icons/hi";
import Link from "next/link";
import EnquiryModal from "./EnquiryModal";
import Image from "next/image";

const Banner = () => {
  useEffect(() => {
    let list = [].slice.call(document.querySelector(".container").children);

    function findActiveList() {
      let activeList = list.findIndex((e) => {
        return e.classList.contains("active");
      });
      list[activeList].classList.remove(
        "active",
        "fadeInRight",
        "fadeInLext",
        "animated"
      );
      return activeList;
    }

    function slideShow() {
      let activeList = findActiveList();

      activeList++;
      activeList = activeList === list.length ? 0 : activeList;

      list[activeList].classList.add("active", "fadeInRight", "animated");
    }

    setInterval(slideShow, 4500);
  }, []);

  return (
    <div
      className="bg-right"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png")',
      }}
    >
      <div className="md:px-0 px-5 HomePageSlider pb-5 md:pt-0 pt-5">
        <video width="100%" height="100%" autoPlay muted loop playsInline>
          <source src="/assets/Data.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="button_wrap">
          <button className="home_btn"># IT Outsourcing </button>
          <button className="home_btn"># UI/UX Designer </button>
          <button className="home_btn"># Contractual Developers </button>
          <button className="home_btn"># Within 48 Hours </button>
        </div>

        <div className="">
          <div className="bg-zinc-100/80 boxshadowbanner  md:px-10 py-12 md:w-[32%] w-[85%] absolute md:top-0 top-6 md:left-[3.6rem] left-7 rounded-lg  mt-2  px-5 ">
            <ul id="text-slider" className="container">
              <li className="active">
                <div className="flex justify-start items-center space-x-1">
                  <span className="text-primary md:text-sm text-base uppercase font-semibold">
                    {" "}
                    Innovation at its finest{" "}
                  </span>{" "}
                  <Image
                    src="/assets/icons/icon.png"
                    width={16}
                    height={16}
                    className="w-9 bulb"
                    alt=""
                  />
                </div>
                <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Pre-Filtered & Verified Talent Pool – Access thoroughly vetted
                  candidates to streamline your hiring process.
                </h2>

                <div className="pt-10 w-full">
                  <Link href="/contact">
                    <button className="button-3 bg-secondary hover:bg-primary text-white px-12 py-3 justify-center rounded-md flex items-center w-full text-center">
                      <div className="eff-3"></div>
                      <span className="text-base flex items-center ">
                        {" "}
                        Enquire Now
                        <MdKeyboardArrowRight className="text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
              </li>

              <li>
                <div className="flex justify-start items-center space-x-1">
                  <span className="text-primary md:text-sm text-base uppercase font-semibold">
                    {" "}
                    Where Ideas Come to Life{" "}
                  </span>{" "}
                  <Image
                    src="/assets/icons/icon.png"
                    width={16}
                    height={16}
                    className="w-9 bulb"
                    alt=""
                  />
                </div>
                <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Faster Hiring, Lower Costs, Better Talent – Reduce turnaround
                  time and recruitment costs while securing the best
                  professionals for your team.
                </h2>

                <div className="pt-10 w-full">
                  <Link href="/contact">
                    <button className="button-3 bg-secondary hover:bg-primary text-white px-12 py-3 justify-center rounded-md flex items-center w-full text-center">
                      <div className="eff-3"></div>
                      <span className="text-base flex items-center ">
                        {" "}
                        Contact Now
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
              </li>

              <li>
                <div className="flex justify-start items-center space-x-1">
                  <span className="text-primary md:text-sm text-base uppercase font-semibold">
                    {" "}
                    Crafting Cutting-Edge Apps{" "}
                  </span>{" "}
                  <Image
                    src="/assets/icons/icon.png"
                    width={16}
                    height={16}
                    className="w-9 bulb"
                    alt=""
                  />
                </div>
                <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Technical Screening Layer – Every candidate undergoes an
                  additional round of technical evaluation.
                </h2>

                <div className="pt-10 w-full">
                  <Link href="/contact">
                    <button className="button-3 bg-secondary hover:bg-primary text-white px-12 py-3 justify-center rounded-md flex items-center w-full text-center">
                      <div className="eff-3"></div>
                      <span className="text-base flex items-center ">
                        {" "}
                        Enquire Now
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:px-10 py-12 md:w-[32%] w-[85%] absolute md:top-28 top-6 md:right-[3.6rem] right-7 rounded-lg  mt-2  px-5 ">
            <EnquiryModal />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
