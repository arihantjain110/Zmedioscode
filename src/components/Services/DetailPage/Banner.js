import React from "react";
import Image from "next/image";

const Banner = ({
  bannertitle,
  bannersubtext,
  serviceimg,
  servicehead,
  servicedesc1,
  servicedesc2,
  reverse = false, // Add this if you want image-content order toggle
}) => {
  return (
    <div>
      <div className="container-ack md:px-0 px-5">
        {/* Top Section */}
        {(bannertitle || bannersubtext) && (
          <div className="pt-24 md:w-[80%] mx-auto text-center">
            {bannertitle && (
              <h1 className="text-4xl leading-normal capitalize font-bold">
                {bannertitle}
              </h1>
            )}
            <div className="load-wrapp relative bottom-[15px] top-0">
              <div className="load">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            {bannersubtext && (
              <h2 className="text-base text-textcolor pt-3">
                {bannersubtext}
              </h2>
            )}
          </div>
        )}

        {/* Image + Content Layout */}
        <div
          className={`flex flex-col md:flex-row ${
            reverse ? "md:flex-row-reverse" : ""
          } gap-6 items-center container-ack`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center pb-5 pt-10">
            <img
              src={serviceimg}
              alt=""
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 md:px-0 px-5 pb-10 md:pb-0 relative">
            <h2 className="text-2xl capitalize font-semibold">
              {servicehead}
            </h2>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text pb-4 md:pt-8 pt-4">
              {servicedesc1}
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text pb-4 md:pt-3 pt-2">
              {servicedesc2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
