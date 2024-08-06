import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import ComponentHead from "../Common/ComponentHead";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Memories() {
  const resumeData = [
    // { id: 1, sliderImg: "assets/images/memories/home-gallery/1.webp" },
    { id: 2, sliderImg: "assets/images/memories/home-gallery/2.webp" },
    { id: 3, sliderImg: "assets/images/memories/home-gallery/3.webp" },
    // { id: 4, sliderImg: "assets/images/memories/home-gallery/1.webp" },
    { id: 5, sliderImg: "assets/images/memories/home-gallery/2.webp" },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imgIndex, setImgIndex] = useState(0);

  const settings = {
    infinite: true,
    className: "center",
    lazyLoad: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <div className="container-ack px-5 md:pt-0 pt-16 w-full relative">
      <ComponentHead
        title="Moments"
        sub="Life At Zmedios"
        head="Creating Memories that reminds: Zmedios TechnologyCompany culture represents the core values and beliefs that guide decision-making and behavior within the organization. A strong, positive culture can be a powerful tool for attracting and retaining top talent. Companies with a culture that aligns with their employees' values tend to have more motivated and engaged workers. "
      />

      <div className="MemoriesSlider">
        <Slider {...settings}>
          {resumeData.map((item, idx) => (
            <div className={idx === imgIndex ? "m_slide activeSlide" : "m_slide"} key={idx}>
              {/* { <Image src={item.sliderImg} alt={idx} /> } */}
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center pt-6 ">
        <Link href="/moments">
          <button className="button-2 px-12 py-2 rounded-md">
            <div className="eff-2"></div>
            <span className="text-base flex items-center ">
              View All
              <FaArrowRight className="text-base" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Memories;
