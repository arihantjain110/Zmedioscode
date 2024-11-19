import React from "react";
import Link from "next/link";
import Image from "next/image";

const Band = () => {
  return (
    <div className="mt-16 relative">
      <div className="container-ack md:py-16  py-24 md:px-0 px-4 ">
        <div className="md:text-3xl text-2xl w-[85%] mx-auto capitalize font-bold text-center">
          {" "}
          Supercharge your website creation process for rapid deployment from
          idea to a live site{" "}
        </div>
        <p className="text-center py-2 w-[85%] mx-auto md:text-base text-sm">
          Accelerate your website creation process like never before with our
          revolutionary solution. Say goodbye to long development cycles and
          hello to a lightning-fast journey from idea to live site. Our
          cutting-edge platform combines simplicity and power, allowing you to
          effortlessly bring your vision to life in record time.
        </p>
        <div className="pt-4 flex justify-center items-center">
          <Link href="/contact">
            <button className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-orange-400 rounded-xl hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Connect Now
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img
          src="/assets/icons/dotsimg.png"
          alt=""
          className=" absolute top-6 left-16 w-24"
        />
        <img
          src="/assets/icons/dotsimg.png"
          alt=""
          className=" absolute bottom-6 right-16 w-24"
        />
      </div>
    </div>
  );
};

export default Band;
