import React from "react";

const Banner = ({ bannertitle, bannersubtext, serviceimg, servicehead, servicedesc1, servicedesc2 }) => {
  return (
    <div>
      <div className="container-ack md:px-0 px-5 ">
        <div className="pt-24 md:w-[80%]  mx-auto">
          <div className="text-4xl leading-normal capitalize text-center font-bold ">
            {bannertitle}
          </div>
          <div className="load-wrapp relative bottom-[15px] top-0 text-center">
                <div className="load">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
          <p className="text-base text-textcolor text-center pt-3">
            {bannersubtext}
          </p>
        </div>
        <div>
          <div className="md:grid grid-cols-2 gap-6 items-center container-ack  ">
            <div className="pb-5 pt-10 ">
              {/* <img src="/assets/images/aboutusimg3.png" alt="" /> */}
              <img src={serviceimg}/>              
            </div>

            <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">

              <div className="">
                <div className="text-2xl capitalize font-semibold ">
                  {servicehead}
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-8 pt-4">
                  {servicedesc1}
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-3 pt-2">
                  {servicedesc2}
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
