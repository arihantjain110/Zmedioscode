import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import ComponentHead from "../Common/ComponentHead";

const OurServices = () => {
  return (
    <div className="container-ack pb-16 md:px-0 px-5">
      <ComponentHead
        title="Our Expertise"
        sub="What We Serve"
        head="Creating products that make a difference: Zmedios Technology leads the way in ethical and sustainable practices"
      />
      <div className="grid md:grid-cols-3 gap-10 pt-2">
        <div className="overflow-hidden rounded-2xl relative group concept">
          {/* <div className="w-full absolute text-center bottom-0 drop-shadow-2xl z-10 opacity-0 group-hover:opacity-100 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white font-semibold text-2xl bg-gradient-to-t from-[#090909] bg-opacity-70">
            Product Conceptualization
          </div> */}
          <div className=" bg-[#09090973] backdrop-blur-[1px] h-full z-10 opacity-1 absolute  inset-x-0 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl max-[480px]:text-xl">
                <div className="font-bold text-center">
                  Product Conceptualization
                </div>
                <div className="flex justify-center">
                  <div className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%]">
                    We transform your complex product simple, meaningful,
                    memorable, less clicks, intuitive & functional with UI/UX.
                  </div>
                </div>

                <div className="flex justify-center">
                  <Link href="/services">
                    <button className=" button-1  px-8 py-2 rounded-md">
                      <div className="eff-1"></div>
                      <span className="text-base flex items-center font-medium">
                        {" "}
                        Know More
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Image
            alt="product-concept"
            className=" object-cover h-full w-full object-left-top"
            src="/assets/images/product-concept.jpg"
          />
        </div>

        <div className="overflow-hidden rounded-2xl relative group concept concept-close">
          <div className="w-full absolute grid top-[-16px] items-center cursor-pointer font-bold text-center drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white text-3xl bg-[#09090933] h-full max-[480px]:text-xl border-2 border-yellow-500 rounded-lg">
            Product Development
          </div>

          <div className=" bg-[#09090973] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out absolute  inset-x-0  pt-30 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out max-[480px]:text-xl">
                <div className="font-bold text-center">Product <br />Development</div>
                <div className="flex justify-center">
                  <div className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%]">
                    It&apos;s a Journey to transform the concept into web & app to
                    market release by using different technologies & strategies.
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link href="/services">
                    <button className=" button-1  px-8 py-2 rounded-md">
                      <div className="eff-1"></div>
                      <span className="text-base flex items-center font-medium">
                        {" "}
                        Know More
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Image
            alt=""
            className="grayscale-0 group-hover:grayscale object-cover h-80 w-full object-left-top"
            src="/assets/images/product-develop.jpg"
          />
        </div>
        <div className="overflow-hidden rounded-2xl relative group concept concept-close">
          <div className="w-full absolute grid top-[-16px] items-center cursor-pointer font-bold text-center drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white text-3xl bg-[#09090933] h-full max-[480px]:text-xl border-2 border-yellow-500 rounded-lg ">
            Digital Modernization
          </div>

          <div className=" bg-[#09090973] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out absolute  inset-x-0  pt-30 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out max-[480px]:text-xl">
                <div className="font-bold text-center">Digital <br />Modernization</div>
                <div className="flex justify-center">
                  <div className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%]">
                    It&apos;s a Journey to transform the concept into web & app to
                    market release by using different technologies & strategies.
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link href="/services">
                    <button className=" button-1  px-8 py-2 rounded-md">
                      <div className="eff-1"></div>
                      <span className="text-base flex items-center font-medium">
                        {" "}
                        Know More
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Image
            alt=""
            className="grayscale-0 group-hover:grayscale object-cover h-80 w-full object-left-top"
            src="/assets/images/product-develop.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
