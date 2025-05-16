import Link from "next/link";
import React from "react";
import Image from "next/image";

const tabs = [
  // {
  //   id: 1,
  //   text: "Staffing",
  // },
  {
    id: 2,
    text: "Product Conceptualization",
  },

  {
    id: 3,
    text: "Product Development",
  },
  {
    id: 4,
    text: "Digital Modernization",
  },
];

const Staffing = [
  {
    id: 1,
    image: "/assets/images/service/serviceimg.png",
    name: "IT & Non-IT Resource Staffing Services",
    desc: "As a leading UX research company in India, dig deep into identifying users' motivations and pain points, investigate their root causes and extract valuable insights.",
    link: "/staffing?type=resource-staffing",
  },
  {
    id: 2,
    image: "/assets/images/service/serviceimg1.png",
    name: "Permanent Staffing Services",
    desc: "A prototype is an early draft of a design used to get rapid feedback on whether the intended design works well or needs to be updated in some areas.",
    link: "/staffing?type=permanent-staffing",
  },
  {
    id: 3,
    image: "/assets/images/service/serviceimg.png",
    name: "Contract Staffing Solutions",
    desc: "UX strategy is the culmination of your business strategy, the value of innovation your business provides, validated user research, and frictionless user experience.",
    link: "/staffing?type=contract-staffing",
  },
  {
    id: 4,
    image: "/assets/images/service/serviceimg1.png",
    name: "Employee Leasing Services",
    desc: "An Optimized UI Can Change The Dynamics Of A Business. User Experience is one of the key pillars of your business as it enhances customer satisfaction and promotes growth.",
    link: "/staffing?type=employee-leasing",
  },
   
];

const productData = [
  // {
  //   id: 1,
  //   image: "/assets/images/service/serviceimg.png",
  //   name: "User Research",
  //   desc: "As a leading UX research company in India, dig deep into identifying users' motivations and pain points, investigate their root causes and extract valuable insights.",
  //   link: "/services/ui-ux-research",
  // },
  {
    id: 2,
    image: "/assets/images/service/serviceimg1.png",
    name: "Prototyping",
    desc: "A prototype is an early draft of a design used to get rapid feedback on whether the intended design works well or needs to be updated in some areas.",
    link: "/services/rapid-prototyping-services",
  },
  {
    id: 3,
    image: "/assets/images/service/serviceimg.png",
    name: "UX Strategy",
    desc: "UX strategy is the culmination of your business strategy, the value of innovation your business provides, validated user research, and frictionless user experience.",
    link: "/services/ux-design-services",
  },
  {
    id: 4,
    image: "/assets/images/service/serviceimg1.png",
    name: "UI Designing",
    desc: "An Optimized UI Can Change The Dynamics Of A Business. User Experience is one of the key pillars of your business as it enhances customer satisfaction and promotes growth.",
    link: "/services/ui-designing",
  },
  {
    id: 5,
    image: "/assets/images/service/serviceimg.png",
    name: "Usability Testing",
    desc: "We closely observe and monitor each action that a user takes and iterate designs to make the product as user friendly as possible.",
    link: "/services/usability-testing-services",
  },
 
  {
    id: 6,
    image: "/assets/images/service/serviceimg1.png",
    name: "Data Visualisation",
    desc: "We present the data in visual form and help decision-makers to identify key opportunities and impending issues.",
    link: "/services/data-visualisation-services",
  },
  
];

const serviceData = [
  {
    id: 1,
    image: "/assets/images/service/serviceimg1.png",
    name: "Digital Product Design",
    desc: "Product design plays a crucial role in creating exceptional user experiences and driving the success of a product. It encompasses the process of understanding user needs, ideating, prototyping, and iterating to develop a functional and visually appealing product.",
    link: "/services/digital-product-design-services",
  },
  {
    id: 2,
    image: "/assets/images/service/serviceimg.png",
    name: "Web Development",
    desc: "Whatever web applications you’re building, we got your back at every stage of web development, including web design.We’ve built a core system for a bank, an MVP marketplace sold for millions, and other 5☆ custom projects for 140+ companies worldwide.",
    link: "/services/website-development-company",
  },
  {
    id: 3,
    image: "/assets/images/service/serviceimg1.png",
    name: "App Modernization",
    desc: "App modernization is the process of revitalising existing applications to leverage modern technologies, enhance performance, improve user experiences, and align with evolving business needs.",
    link: "/services/application-modernization-services",
  },
  {
    id: 4,
    image: "/assets/images/service/serviceimg.png",
    name: "Software Development",
    desc: "Software development is the process of designing, coding, testing, and maintaining software applications. In today's fast-paced digital world, software plays a vital role in powering businesses and driving innovation.",
    link: "/services/software-development-services",
  },
  {
    id: 5,
    image: "/assets/images/service/serviceimg1.png",
    name: "Ecommerce Development",
    desc: "Ecommerce development involves designing and building online stores that provide an exceptional user experience, seamless transactions, and robust backend functionality.",
    link: "/services/ecommerce-development-services",
  },
  {
    id: 6,
    image: "/assets/images/service/serviceimg.png",
    name: "Cloud Engineering & DevOps",
    desc: "Together, we will establish an optimal cloud computing workflow that helps you cut down cloud spending, automate infrastructure monitoring, and increase architectural flexibility.",
    link: "/services/cloud-engineering-and-devops-solutions",
  },
];

const DigitalModernization = [
  {
    id: 1,
    image: "/assets/images/service/Digitalmarketingstrategy.png",
    name: "Digital Marketing Strategy",
    desc: "Our approach to digital marketing strategy involves a deep dive into your business goals, your market landscape, and your customer profiles. We create a comprehensive roadmap that integrates various digital channels - SEO, content marketing, social media, PPC, email marketing, and more-to meet your business objectives effectively. With our data-driven strategies, we ensure your brand message resonates with your target audience and drives profitable growth.",
    link: "/services/digital-marketing-services",
  },
  {
    id: 2,
    image: "/assets/images/service/SearchEngineOptimization.png",
    name: "Search Engine Optimization (SEO)",
    desc: "Our SEO service ensures your website gains maximum visibility in search engine results, driving organic traffic. By employing advanced keyword research, technical SEO, on-page and off-page optimization, and content creation strategies, we aim to improve your site's ranking and maximize its visibility. Our holistic SEO approach leads to sustainable growth in traffic and enhances your online presence.",
    link: "/services/search-engine-optimization-services",
  },
  {
    id: 3,
    image: "/assets/images/service/SearchEngineMarketing.png",
    name: "Search Engine Marketing (SEM)",
    desc: "SEM is a potent tool in our arsenal that boosts your website's visibility through paid advertisements on search engines. We manage every aspect of your SEM campaigns - from keyword selection, ad creation, bid management to landing page optimization - ensuring you achieve the highest return on your ad spend.",
    link: "/services/search-engine-marketing-services",
  },
  {
    id: 4,
    image: "/assets/images/service/SocialMediaMarketing.png",
    name: "Social Media Marketing (SMM)",
    desc: "Our SMM services are designed to propel your brand's online presence, stimulate engagement, and drive conversions. We harness the power of various social media platforms to connect with your audience, create sharable content, and build a loyal community. Our SMM strategies are backed by analytics, ensuring continuous optimization.",
    link: "/services/social-media-marketing-services",
  },
  {
    id: 5,
    image: "/assets/images/service/PublicRelation.png",
    name: "Public Relations (PR)",
    desc: "We shape and manage your public image and relationships with key stakeholders. Our PR services include media relations, crisis management, corporate communication, and event management. We help build a positive reputation, gain media exposure, and foster relationships that help achieve your business goals.",
    link: "/services/pr-agency",
  },
  {
    id: 6,
    image: "/assets/images/service/MediaBuyingandplanning.png",
    name: "Media Buying and Planning",
    desc: "Our media buying and planning services ensure that your ads reach the right audience at the right time and place. We devise a strategic media plan, negotiate ad placements, manage your media budget, and track the performance of your ads to provide maximum ROI.",
    link: "/services/media-buying-and-planning-services",
  },
];
const Tabs = () => {
  const [select, setSelect] = React.useState(2);

  return (
    <div className="container-ack md:px-0 px-5">
      <div>
        <div className="flex justify-center md:space-x-3 space-x-2 cursor-pointer">
          {tabs.map((item, index) => (
            <div
              onClick={() => setSelect(item.id)}
              className="group py-10"
              key={index}
            >
              <div
                className={` md:px-12 px-3 py-2 rounded-md ${
                  select === item.id
                    ? "bg-secondary text-white border-2 "
                    : "   border-2 border-black/90"
                }`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {select === 1 ? (
          <>
            <div className="grid md:grid-cols-3 gap-1">
              {Staffing.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6 " key="id">
                      <div className="sservice-content relative text-center  flex flex-col justify-between border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[28rem] ">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black  pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : select === 2 ? (
          <>
            <div className="grid md:grid-cols-3 gap-1">
              {productData.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6 md:h-[33rem]" key="id">
                      <div className="service-content relative text-center  flex flex-col justify-between  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[26rem]">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : select === 3 ? (
          <>
            <div className="grid md:grid-cols-3 gap-1 ">
              {serviceData.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6 md:h-[39rem]" key="id">
                      <div className="service-content flex flex-col justify-between relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl ">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-1 ">
              {DigitalModernization.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6 md:h-[39rem]" key="id">
                      <div className="service-content flex flex-col justify-between relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl ">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )
          }
      </div>
    </div>
  );
};

export default Tabs;
