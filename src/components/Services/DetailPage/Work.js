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
              src="/assets/images/portfolio/jindal.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/EB.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/vivo.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/insaano.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/toir.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/milestone.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/kazuki.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/c1india.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/discovery.png"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <img
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/mr-furniture.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <Link href="/portfolio">
            <button className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-orange-400 rounded-xl hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View All
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
