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
            <Image
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/jindal.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <Image
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/EB.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <Image
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/vivo.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <Image
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/insaano.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <Image
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/toir.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <Image
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/milestone.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <Image
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/kazuki.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <Image
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/c1india.jpg"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <Image
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/discovery.png"
              alt=""
            />
          </div>
          <div className="masonry-grid-item containerzoom">
            <Image
              className="zoomimg drop-shadow-md"
              src="/assets/images/portfolio/mr-furniture.jpg"
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
