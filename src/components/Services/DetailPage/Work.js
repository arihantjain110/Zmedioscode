import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ComponentHead from "../../Common/ComponentHead";
import Image from "next/image";

const Work = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container-ack md:px-0 px-5 pb-5">
        <ComponentHead
          title="Work"
          sub="Our Work"
          head="Where imagination meets technology: Zmedios Technology creates products that defy expectations"
        />
        <div className="masonry-grid pb-2">
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/RealEstateImg1.png"
              alt=""
            />
          </div>
          
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/ffacImg.png"
              alt=""
            />
          </div>
          
          
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/glowritiImg11.png"
              alt=""
            />
          </div>
           <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/MyFinderImg2.png"
              alt=""
            />
          </div>
          
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/ffacImg2.png"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/MotorFinImg1.png"
              alt=""
            />
          </div>
          
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/MyFinderImg1.png"
              alt=""
            />
          </div>
         
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/MotorFinImg2.png"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/Marcloud.png"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/RealEstateImg2.png"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/glowritiImg12.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <Link href="/portfolio">
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
  );
};

export default Work;
