import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import Subscription from "../Home/Subscription";
const Footer = () => {
  return (
    <div
      className="mt-0 relative  md:mt-12"
      style={{
        backgroundImage: 'url("/assets/images/backgroundfooter.png")',
      }}
    >
      <div className="absolute md:-top-10 w-full md:px-0 px-5 -top-12">
        <Subscription />
      </div>

      <div className="container-ack ">
        <div className="md:pt-36 pt-72">
          <div className=" grid md:grid-cols-12 justify-between  gap-12 md:px-0 px-5 pb-10">
            <div className="md:col-span-4  space-y-4">
              <Link href="/">
                <div>
                  <img
                    width={192}
                    height={16}
                    src="/assets/images/ZmediosLogo.png"
                    className="w-48"
                    alt=""
                  />
                </div>
              </Link>
              <p className="text-sm text-justify">
                Zmedios Supports Startup & Enterprises in Developing World-Class
                Products. We help organizations capitalize on cutting-edge
                technologies and employ robust frameworks and efficient
                workflows to create a robust and scalable product.
              </p>
              {/* <div className="flex space-x-5">
                <Link href="">
                  <svg
                    className="svgimg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.555 10.6004C21.555 4.85025 16.8883 0.183502 11.1383 0.183502C5.38835 0.183502 0.72168 4.85025 0.72168 10.6004C0.72168 15.6421 4.30501 19.8401 9.05501 20.8089V13.7254H6.97168V10.6004H9.05501V7.99614C9.05501 5.98569 10.6904 4.35024 12.7008 4.35024H15.305V7.4753H13.2217C12.6488 7.4753 12.18 7.94406 12.18 8.51699V10.6004H15.305V13.7254H12.18V20.9651C17.4404 20.4443 21.555 16.0067 21.555 10.6004Z" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/zmedios_technology_pvt_ltd_Thank you for your business! We look forward to working with you again.">
                  <svg
                    className="svgimg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.2637 10.6004C13.2637 11.2185 13.0804 11.8227 12.737 12.3366C12.3936 12.8505 11.9056 13.2511 11.3346 13.4876C10.7635 13.7241 10.1352 13.786 9.52901 13.6654C8.92282 13.5449 8.366 13.2472 7.92896 12.8102C7.49192 12.3731 7.1943 11.8163 7.07372 11.2101C6.95314 10.6039 7.01502 9.97555 7.25155 9.40452C7.48807 8.83349 7.88861 8.34543 8.40251 8.00204C8.91642 7.65865 9.5206 7.47537 10.1387 7.47537C10.9667 7.47795 11.76 7.80802 12.3455 8.39353C12.931 8.97903 13.2611 9.77241 13.2637 10.6004ZM19.9043 6.30348V14.8974C19.9043 16.3478 19.3281 17.7388 18.3025 18.7644C17.2769 19.7901 15.8859 20.3662 14.4355 20.3662H5.8418C4.39139 20.3662 3.0004 19.7901 1.97481 18.7644C0.949217 17.7388 0.373047 16.3478 0.373047 14.8974V6.30348C0.373047 4.85305 0.949217 3.46202 1.97481 2.43641C3.0004 1.41081 4.39139 0.834625 5.8418 0.834625H14.4355C15.8859 0.834625 17.2769 1.41081 18.3025 2.43641C19.3281 3.46202 19.9043 4.85305 19.9043 6.30348ZM14.8262 10.6004C14.8262 9.67331 14.5513 8.76702 14.0362 7.99615C13.5211 7.22528 12.789 6.62446 11.9325 6.26967C11.076 5.91487 10.1335 5.82204 9.22418 6.00291C8.3149 6.18379 7.47967 6.63024 6.82411 7.28581C6.16855 7.94138 5.72211 8.77662 5.54124 9.68593C5.36037 10.5952 5.4532 11.5377 5.80799 12.3943C6.16277 13.2508 6.76358 13.9829 7.53444 14.498C8.30529 15.0131 9.21157 15.288 10.1387 15.288C11.3819 15.288 12.5742 14.7941 13.4532 13.9151C14.3323 13.036 14.8262 11.8437 14.8262 10.6004ZM16.3887 5.52221C16.3887 5.29043 16.3199 5.06386 16.1912 4.87114C16.0624 4.67842 15.8794 4.52822 15.6653 4.43952C15.4511 4.35082 15.2155 4.32761 14.9882 4.37283C14.7609 4.41805 14.552 4.52966 14.3882 4.69356C14.2243 4.85745 14.1127 5.06626 14.0674 5.29359C14.0222 5.52091 14.0454 5.75654 14.1341 5.97068C14.2228 6.18481 14.373 6.36784 14.5657 6.49661C14.7585 6.62538 14.985 6.69411 15.2168 6.69411C15.5276 6.69411 15.8257 6.57064 16.0454 6.35087C16.2652 6.13109 16.3887 5.83302 16.3887 5.52221Z" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/company/33193886/admin/dashboard/">
                  <svg
                    className="svgimg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1392 0.240936C5.41751 0.240936 0.779297 4.87924 0.779297 10.601C0.779297 16.3228 5.41751 20.9611 11.1392 20.9611C16.8609 20.9611 21.4991 16.3228 21.4991 10.601C21.4991 4.87924 16.8609 0.240936 11.1392 0.240936ZM8.60318 14.8951H6.5053V8.14374H8.60318V14.8951ZM7.54129 7.31494C6.87869 7.31494 6.45026 6.84549 6.45026 6.2649C6.45026 5.67243 6.89164 5.21702 7.56827 5.21702C8.2449 5.21702 8.6593 5.67243 8.67225 6.2649C8.67225 6.84549 8.2449 7.31494 7.54129 7.31494ZM16.2652 14.8951H14.1673V11.1536C14.1673 10.2827 13.863 9.69128 13.1043 9.69128C12.5248 9.69128 12.1806 10.0917 12.0284 10.4769C11.9723 10.614 11.9583 10.8082 11.9583 11.0014V14.894H9.85932V10.2967C9.85932 9.45386 9.83234 8.74916 9.80428 8.14266H11.627L11.723 9.08047H11.7651C12.0414 8.64016 12.718 7.9905 13.85 7.9905C15.2303 7.9905 16.2652 8.91535 16.2652 10.9032V14.8951Z"
                    />
                  </svg>
                </Link>
              </div> */}
            </div>
            <div className="md:col-span-5 p-2">
              <h2 className="text-xl font-semibold text-black">EXPLORE</h2>
              <div className="flex space-x-40 py-4">
                <ul className="explore">
                  <Link href="/">
                    <li className="text-sm hover:text-primary">
                      <span className="">Home</span>
                    </li>
                  </Link>
                  <Link href="/about">
                    <li className="text-sm hover:text-primary">
                      <span className="">About</span>
                    </li>
                  </Link>
                  <Link href="/services">
                    <li className="text-sm hover:text-primary">
                      <span className="">Services</span>
                    </li>
                  </Link>
                  {/* <Link href="/advisors">
                    <li className="text-sm hover:text-primary">
                      <span className="">Advisors</span>
                    </li>
                  </Link>
                  <Link href="/experts">
                    <li className="text-sm hover:text-primary">
                      <span className="">Our Experts</span>
                    </li>
                  </Link> */}
                  <Link href="/moments">
                    <li className="text-sm hover:text-primary">
                      <span className="">Moments</span>
                    </li>
                  </Link>
                </ul>

                <ul className="explore">
                  <Link href="/career">
                    <li className="text-sm hover:text-primary">
                      <span className="">Career</span>
                    </li>
                  </Link>
                  <Link href="/portfolio">
                    <li className="text-sm hover:text-primary">
                      <span className="">Portfolio</span>
                    </li>
                  </Link>
                  <Link href="/technology">
                    <li className="text-sm hover:text-primary">
                      <span className="">Technologies</span>
                    </li>
                  </Link>
                  <Link href="/industryWeServe">
                    <li className="text-sm hover:text-primary">
                      <span className="">Industry We Serve</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="md:col-span-3 p-2">
              <h2 className="text-xl font-semibold text-black">CONTACT</h2>
              <div className="flex space-x-10 py-4">
                <ul className="">
                  <li className="flex space-x-2 items-center pt-4 group cursor-pointer">
                    {/* <GoLocation
                      size={24}
                      className="text-black group-hover:text-primary mt-3"
                    /> */}
                    <div className="inline-flex items-center  ">
                      <img
                        src="/assets/images/india.png"
                        alt=""
                        className="  rounded-lg w-6 h-6 mx-auto "
                      />
                    </div>
                    <h2 className="text-sm md:w-[90%]">
                      MiQB Executive Coworking Space C-25, C Block, Sector 58,
                      Noida, Uttar Pradesh 201301
                    </h2>
                  </li>
                  <li className="flex space-x-2 items-center pt-4 group cursor-pointer">
                    {/* <GoLocation
                      size={24}
                      className="text-black group-hover:text-primary mt-3"
                    /> */}
                    <div className="inline-flex items-center border-2  ">
                      <img
                        src="/assets/images/SingaporeFlag.jpg"
                        alt=""
                        className="w-6 h-6 mx-auto "
                      />
                    </div>
                    <h2 className="text-sm md:w-[90%]">
                      location160 Robinson Rd, #14-08 SBF Center, Singapore
                      068914
                    </h2>
                  </li>
                  <Link href="tel:+91-9319062156">
                    <li className="flex space-x-2 items-center pt-6 group">
                      <IoMdCall
                        size={28}
                        className="text-black group-hover:text-primary mt-3"
                      />
                      <span className="text-sm">+91-9319062156</span>
                    </li>
                  </Link>
                  <Link href="mailto:info@zmediostech.com">
                    <li className="flex space-x-2 items-center pt-6 group">
                      <IoMdMail
                        size={28}
                        className="text-black group-hover:text-primary"
                      />
                      <span className="text-sm">info@zmediostech.com</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          <hr className="h-[1px] bg-dark " />
          <div className="text-center py-5 text-sm md:px-0 px-5">
            <p>
              {" "}
              © Copyright 2024{" "}
              <span className="font-semibold">
                Zmedios Technology PVT LTD
              </span>{" "}
              | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
