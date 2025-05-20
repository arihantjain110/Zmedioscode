"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

function PortfolioListing() {
  const filterData = [
    {
      heading: "The standard Lorem Ipsum passage, used since the 1500s",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "eco",
      img: "/assets/images/portfolio/RealEstateImg1.png",
      img2: "/assets/images/portfolio/RealEstateImg2.png",
      companyName: "The Palm Jebel Ali",
      companyDesc:
        "Wake up to panoramic sea views and step onto your private beach, embraced by a serene, resort-style ambiance. With its avant-garde design, strategic location, and commitment to sustainability, Palm Jebel Ali seamlessly blends tranquility with urban energy, offering an unparalleled haven for those seeking sophisticated island living.",
    },
    {
      heading: "The standard Lorem Ipsum passage, used since the 1500s",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "web",
      img: "/assets/images/portfolio/ffacImg.png",
      img2: "/assets/images/portfolio/ffacImg2.png",
      companyName: "FFAC",
      companyDesc:
        "FFAC (Freight Forwarding and Clearance) is a specialized software platform designed to streamline and manage the processes involved in freight forwarding, customs clearance, and logistics operations. It helps freight forwarders, logistics companies, and customs brokers automate tasks",
    },
    {
      heading: "The standard Lorem Ipsum passage, used since the 1500s",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "web",
      img: "/assets/images/portfolio/glowritiImg11.png",
      img2: "/assets/images/portfolio/glowritiImg12.png",
      companyName: "Glowriti",
      companyDesc:
        "Glowriti is an Indian e-commerce platform specializing in natural and herbal personal care products.Their offerings encompass hair care, skincare, and wellness accessories, all crafted with a focus on natural ingredients and holistic well-being",
    },
    {
      heading: "The standard Lorem Ipsum passage, used since the 1500s",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "web",
      img: "/assets/images/portfolio/MotorFinImg1.png",
      img2: "/assets/images/portfolio/MotorFinImg2.png",
      companyName: "Motor Finder",
      companyDesc:
        "The AI Scraping Tool is designed to extract structured and unstructured data, including images, from various websites. It will leverage AI and machine learning techniques for intelligent parsing, filtering, and categorization of data. The tool will be equipped with an intuitive dashboard for monitoring and controlling the scraping process.",
    },
    {
      heading: "The standard Lorem Ipsum passage, used since the 1500s",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "web",
      img: "/assets/images/portfolio/MyFinderImg1.png",
      img2: "/assets/images/portfolio/MyFinderImg2.png",
      companyName: "My Finder",
      companyDesc:
        "MyFinder is the world’s AI-powered listing search engine poised to become a global leader. It makes it easy to find something you’ll love to do, offering the smartest and fastest search experience without spending time searching multiple websites. MyFinder stands out as the ultimate destination, revolutionizing your search process.",
    },
    {
      heading: "The standard Lorem Ipsum passage, used since the 1500s",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "web",
      img: "/assets/images/portfolio/Marcloud.png",
      //img2: '/assets/images/portfolio/xposure_web2.png',
      companyName: "Marcloud application ",
      companyDesc:
        "The Pardot Business Card Scanner App is a mobile or web-based application designed to scan physical business cards and automatically extract contact details, which are then synced to Salesforce (including Pardot) using Salesforce API and Single Sign-On (SSO) authentication.",
    },
    // {
    //   heading: 'The standard Lorem Ipsum passage, used since the 1500s',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   category: 'web',
    //   img: '/assets/images/portfolio/paycircle_web1.png',
    //   img2: '/assets/images/portfolio/paycircle_web2.png',
    //   companyName: 'MSi',
    //   companyDesc: 'MSI is a world leader in gaming, content creation, business & productivity and AIoT solutions. Bolstered by its cutting-edge R&D capabilities and customer-driven innovation, MSI has a wide-ranging global presence spanning over 120 countries. Its comprehensive lineup of laptops, graphics cards, monitors, motherboards, desktops, peripherals, servers, IPCs, robotic appliances, and vehicle infotainment and telematics systems are globally acclaimed.'
    // },
    // {
    //   heading: 'The standard Lorem Ipsum passage, used since the 1500s',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   category: 'eco',
    //   img: '/assets/images/portfolio/pro-4.1.png',
    //   img2: '/assets/images/portfolio/pro-4.2.png',
    //   companyName: 'Nature Nushkha',
    //   companyDesc: 'At Nature Nuskha, nature is the only truth and the key to solving all hair problems. Through our research, we have arrived at exceptional and effective formulas that nurture your hair back to health.'
    // },
    // {
    //   heading: 'The standard Lorem Ipsum passage, used since the 1500s',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   category: 'eco',
    //   img: '/assets/images/portfolio/pro-5.1.png',
    //   img2: '/assets/images/portfolio/pro-5.2.png',
    //   companyName: 'Joveo',
    //   companyDesc: 'Our goal was to build a platform that would use data to deliver the right job to the right person anywhere in the world. That’s when we found our MOJO (Machine Optimized Jobs), a platform that leverages data science and machine learning to shatter the limitations of traditional job advertising.'
    // },
    // {
    //   heading: 'The standard Lorem Ipsum passage, used since the 1500s',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   category: 'soft',
    //   img: '/assets/images/portfolio/pro-6.1.png',
    //   img2: '/assets/images/portfolio/pro-6.2.png',
    //   companyName: 'Yellow Verandah',
    //   companyDesc: 'Yellow Verandah is a bespoke luxury homeware boutique, creating and curating Handmade, Environment Conscious, Natural, Sustainable, Cruelty Free, Zero Carbon Footprint Home Decor & Lifestyle products.We work with a bunch of talented local Artisans, Craftsmen, Self Help Groups, Craft Communities and Design Partners across India.'
    // },
    // {
    //   heading: 'The standard Lorem Ipsum passage, used since the 1500s',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   category: 'soft',
    //   img: '/assets/images/portfolio/pro-7.1.png',
    //   img2: '/assets/images/portfolio/pro-7.2.png',
    //   companyName: 'The Citizenry',
    //   companyDesc: "Our personal spaces deserve designs with a soul, a story, and a purpose. It's why we travel the world to develop our exclusive collections of home goods. By personally traveling to each country and using only local materials, we establish sustainable relationships with our artisans. From there, we sell directly to you online. This is how we’re able to offer handmade goods, crafted with the highest quality materials, at more reasonable prices than traditional luxury boutiques."
    // },
    // {
    //   heading: 'The standard Lorem Ipsum passage, used since the 1500s',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   category: 'soft',
    //   img: '/assets/images/portfolio/pro-8.1.png',
    //   img2: '/assets/images/portfolio/pro-8.2.png',
    //   companyName: 'Glide',
    //   companyDesc: 'Glide is a no-code app development tool that lets you build custom apps for workplace use with simple drag-and-drop. There’s no need to learn complex development languages or go to an expensive design school — Glide offers everything you need to create powerful apps for work in a matter of minutes.'
    // },
    // {
    //   heading: 'The standard Lorem Ipsum passage, used since the 1500s',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   category: 'mobileApp',
    //   img: '/assets/images/portfolio/Nesto1.png',
    //   img2: '/assets/images/portfolio/Nesto2.png',
    //   companyName: 'Glide',
    //   companyDesc: 'Glide is a no-code app development tool that lets you build custom apps for workplace use with simple drag-and-drop. There’s no need to learn complex development languages or go to an expensive design school — Glide offers everything you need to create powerful apps for work in a matter of minutes.'
    // },
    // {
    //   heading: 'The standard Lorem Ipsum passage, used since the 1500s',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   category: 'mobileApp',
    //   img: '/assets/images/portfolio/PG1.png',
    //   img2: '/assets/images/portfolio/PG2.png',
    //   companyName: 'Glide',
    //   companyDesc: 'Glide is a no-code app development tool that lets you build custom apps for workplace use with simple drag-and-drop. There’s no need to learn complex development languages or go to an expensive design school — Glide offers everything you need to create powerful apps for work in a matter of minutes.'
    // },
    // {
    //   heading: 'The standard Lorem Ipsum passage, used since the 1500s',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   category: 'mobileApp',
    //   img: '/assets/images/portfolio/Konnect1.png',
    //   img2: '/assets/images/portfolio/Konnect2.png',
    //   companyName: 'Glide',
    //   companyDesc: 'Glide is a no-code app development tool that lets you build custom apps for workplace use with simple drag-and-drop. There’s no need to learn complex development languages or go to an expensive design school — Glide offers everything you need to create powerful apps for work in a matter of minutes.'
    // },
    // {
    //   heading: 'The standard Lorem Ipsum passage, used since the 1500s',
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   category: 'mobileApp',
    //   img: '/assets/images/portfolio/Paycircle1.png',
    //   img2: '/assets/images/portfolio/Paycircle2.png',
    //   companyName: 'Glide',
    //   companyDesc: 'Glide is a no-code app development tool that lets you build custom apps for workplace use with simple drag-and-drop. There’s no need to learn complex development languages or go to an expensive design school — Glide offers everything you need to create powerful apps for work in a matter of minutes.'
    // },
  ];

  const [items, setItems] = useState(filterData);
  const filterItem = (categItem) => {
    const updatedItems = filterData.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <div className="container-ack md:px-0 px-5">
        <div className="grid md:grid-cols-5 md:gap-5 cursor-pointer w-[80%] mx-auto border-2 border-secondary/10 p-2 rounded-md md:mt-10 mt-12">
          <div>
            <div
              className="text-center py-2 rounded-md bg-secondary text-white border-2 text-sm "
              onClick={() => setItems(filterData)}
            >
              All
            </div>
          </div>
          <div>
            <div
              className={`text-center py-2 rounded-md bg-secondary text-white border-2 text-sm
            ${filterItem === "web" ? "bg-slate-400" : ""}`}
              onClick={() => filterItem("web")}
            >
              Website
            </div>
          </div>
          <div>
            <div
              className="text-center py-2 rounded-md bg-secondary text-white border-2 text-sm"
              onClick={() => filterItem("eco")}
            >
              Ecomerce
            </div>
          </div>
          <div>
            <div
              className="text-center py-2 rounded-md bg-secondary text-white border-2 text-sm"
              onClick={() => filterItem("soft")}
            >
              Mobile App
            </div>
          </div>
          <div>
            <div
              className="text-center py-2 rounded-md bg-secondary text-white border-2 text-sm"
              onClick={() => filterItem("soft")}
            >
              Digital Marketing
            </div>
          </div>
        </div>

        {items?.map((item) => {
          return (
            <>
              <div className="pt-16">
                <div className="container-ack gradientbackgroundone px-12 pt-12">
                  <div className="grid grid-cols-3 justify-between ">
                    <div className="col-span-2">
                      <h2 className="text-xl font-semibold ">
                        {item.companyName}
                      </h2>
                      <p style={{ width: 610 }}>{item.companyDesc}</p>
                    </div>
                    <div>
                      <div className="flex justify-end pb-10 col-span-1">
                        <Link href="/contact">
                          <button className="button-2 px-7 py-2 rounded-md">
                            <div className="eff-2"></div>
                            <span className="text-base flex items-center">
                              Enquiry Now
                              <MdKeyboardArrowRight className="text-base" />
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`grid gap-4 py-5 ${item.img2 ? "grid-cols-12" : "grid-cols-1"}`}
                  >
                    {item.img2 && (
                      <div className="col-span-6">
                        <div
                          className="w-full h-80 bg-black bg-no-repeat bg-center bg-contain rounded-md"
                          style={{ backgroundImage: `url(${item.img2})` }}
                        />
                      </div>
                    )}
                    <div className={item.img2 ? "col-span-6" : "col-span-12"}>
                      <div
                        className="w-full h-80 bg-black bg-no-repeat bg-center bg-contain bg-position-right rounded-md"
                        style={{ backgroundImage: `url(${item.img})` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default PortfolioListing;
