import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import ComponentHead from "../Common/ComponentHead";

const clientsData = [
  {
    id: 1,

    image: "/assets/images/peter.png",
    text: "Mr. Peter",
    designation: "(Founder Chauffeur Melbourne)",
    para: "We got the feeling that our goals are shared and that we're all working towards a common objective. I like their drive for innovation and the company spirit.",
  },
  {
    id: 2,

    image: "/assets/images/user.png",
    text: "Nikita  Singh",
    designation: "(CMO Repik)",
    para: "The project is running smoothly with relatively few bugs despite hosting thousands of users. They know what they are doing, they do their best (which is very good), and they are all super friendly, reliable, communicative people.",
  },
  {
    id: 3,

    image: "/assets/images/user.png",
    text: "Mrs. Jyotsana",
    designation: "(Director Reddington Global)",
    para: "We’ve been working with them for four years and have grown their team from 80 to 140 people. Their ability to scale easily without sacrificing performance or product quality stands out to us.",
  },
  {
    id: 4,
    image: "/assets/images/sunil.png",
    text: "Mr. Sunil",
    designation: "(Founder Nestohub)",
    para: "The team at Zmedios impressed us with a highly personalized approach to our project and lots of interesting suggestions , as well as the ability to handle almost all aspects of the projects.",
  },
  {
    id: 5,
    image: "/assets/images/amit.png",
    text: "Mr. Amit",
    designation: "(CTO Intech Organics Ltd)",
    para: "Thanks to the Zmedios, we reduced maintenance costs by 40% for the mobile app and by 25% for the production environment with the use of newer technologies.",
  },
  {
    id: 6,
    image: "/assets/images/akhilesh.png",
    text: "Mr Akhilesh",
    designation: "(DGM Web)",
    para: "We regard the Zmedios team as co-founders in our business . In 12 months alone, we grew from 6 to 49 people, while our revenues and profits grew multiple times.",
  },
];

const Testimonial = () => {
  const settings = {
    className: "center",
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: true,
    loop: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    lazyLoad: true,
    accessibility: true,
    cssEase: "ease-out",
    swipeToSlide: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 4000,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-ack mmd:px-0 px-5 md:pt-0 pt-10">
        <div>
          <ComponentHead
            title="Testimonials"
            sub="A Word From Our Clients"
            head="Thrilled Clients Speak Out: How Our Experts Solutions Have Transformed Their Business Communication"
          />

          <div className="">
            <Slider {...settings} className="testimonialSlider mx-auto">
              {clientsData.map((item, index) => (
                <>
                  <div className="testimonial group py-10 relative" key={index}>
                    <div className="hover:bg-[#F6F8F9] border-2 border-[#F6F8F9] text-left mx-3 py-8 rounded-md  hovertestimonial">
                      <div className="flex flex-col items-center justify-left">
                        <Image
                          src={item.image}
                          alt=" "
                          className="  rounded-lg w-[25%] absolute top-0  left-[9rem]"
                        />
                        <div className="px-4 pt-6">
                          <div className="text-textcolor text-sm font-text pt-4 text-center">
                            {item.para}
                          </div>
                          <div className="text-xl font-semibold pt-3 text-black text-center">
                            {item.text}
                          </div>
                          <div className="text-black text-sm text-center">
                            {item.designation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>

          <div className="flex justify-center pb-10 pt-5">
            <Link href="/testimonials">
              <button className=" button-2  px-12 py-2 rounded-md">
                <div className="eff-2"></div>
                <span className="text-base flex items-center ">
                  {" "}
                  View All
                  <MdKeyboardArrowRight className=" text-base" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
