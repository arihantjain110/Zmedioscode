"use client"
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { HiLightBulb } from "react-icons/hi";
import Link from "next/link";
import EnquiryModal from "./EnquiryModal";
import Image from "next/image";
const Banner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1200,
    lazyLoad: true,
    accessibility: true,
    cssEase: "ease-out",
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  const clientsData = [
    {
      id: 1,
      image: "/assets/images/banner/1.webp",
    },
    {
      id: 2,
      image: "/assets/images/banner/2.webp",
    },
    {
      id: 3,
      image: "/assets/images/banner/3.webp",
    },
  ];

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
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
      <div className=" md:px-0 px-5 HomePageSlider md:pb-20 pb-5 md:pt-0 pt-5">
        <Slider {...settings} className="mx-auto relative">
          {clientsData.map((item, index) => (
            // <>
              <div className="group SldrImgDta" key={index}>
                <div className="relative text-center">
                  <div className="">
                    <img
                      src={item.image}
                      alt=" "
                      height={450}
                      width={450}
                      className="rounded-lg mx-auto md:h-full h-[450px] object-cover"
                    />
                  </div>
                </div>
              </div>
            // </>
          ))}
        </Slider>
        <div className="">
          <div className="bg-zinc-100/80	 boxshadowbanner  md:px-10 py-12 md:w-[32%] w-[85%] absolute md:top-0 top-6 md:left-[3.6rem] left-7 rounded-lg  mt-2  px-5 ">
            <ul id="text-slider" className="container">
              <li className="active">
                <div className="flex justify-start items-center space-x-1">
                  <span className="text-primary md:text-sm text-base uppercase font-semibold">
                    {" "}
                    Innovation at its finest{" "}
                  </span>{" "}
                  <img src="/assets/icons/icon.png" width={16} height={16}  className="w-9 bulb" alt="" />
                </div>
                <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Product Conceptualization & Development
                </h2>
                <p className="text-textcolor pt-4 text-[15px] text-justify font-medium">
                  From concept to reality Zmedios Technology delivers game changing products for startups and fortune companies.
                </p>
                <div className="pt-10 w-full">
                  <Link href="/contact">
                    <button className="button-3 bg-secondary hover:bg-primary text-white px-12 py-3 justify-center rounded-md flex items-center w-full text-center">
                      <div className="eff-3"></div>
                      <span className="text-base flex items-center ">
                        {" "}
                        Discover Now
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
                    Where Ideas Come to Life{" "}
                  </span>{" "}
                  <img src="/assets/icons/icon.png" width={16} height={16} className="w-9 bulb" alt="" />
                </div>
                <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Empowering The Web With Innovative Development
                </h2>
                <p className="text-textcolor pt-4 text-justify text-[15px] font-medium">
                  From creativity to technology Zmedios Technology crafts designs with seamless functionality that leave a lasting impression.
                </p>
                <div className="pt-10 w-full">
                  <Link href="/contact">
                    <button className="button-3 bg-secondary hover:bg-primary text-white px-12 py-3 justify-center rounded-md flex items-center w-full text-center">
                      <div className="eff-3"></div>
                      <span className="text-base flex items-center ">
                        {" "}
                        Discover Now
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
                  <img src="/assets/icons/icon.png" width={16} height={16} className="w-9 bulb" alt="" />
                </div>
                <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                  Transforming Your Brand With Mobile App Development
                </h2>
                <p className="text-textcolor pt-4 text-[15px] text-justify font-medium">
                  From idea to app store, Zmedios Technology guides you through the Mobile App Development journey.
                </p>
                <div className="pt-10 w-full">
                  <Link href="/contact">
                    <button className="button-3 bg-secondary hover:bg-primary text-white px-12 py-3 justify-center rounded-md flex items-center w-full text-center">
                      <div className="eff-3"></div>
                      <span className="text-base flex items-center ">
                        {" "}
                        Discover Now
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