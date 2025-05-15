import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import ComponentHead from "../components/Common/ComponentHead";
import Tabs from "../components/Services/Tabs";
import Head from "next/head";
import React from "react";
import Clients from "../components/Home/Clients";
import Work from "../components/Services/DetailPage/Work";
import Technology from "../components/Services/DetailPage/Technology";
import Enquiry from "../components/Services/DetailPage/Enquiry";
import ProcessHead from "../components/Services/DetailPage/ProcessHead";
import Process from "../components/Services/DetailPage/Process";

const Services = () => {
   const processes = [
    {
      id: "1",
      name: "SEO Services",
      desc: "Our expert SEO services help improve the search for your site, improve organic traffic and increase credibility online. With analogue strategies and proven techniques, we ensure that your business is in a competing digital scenario. Customize your site for high conversions and permanent development",
    },
    {
      id: "2",
      name: "Media Buying and Planning",
      desc: "Maximize your advertising expenses with strategic media procurement and plan. We identify the best platforms, target groups and time to secure our campaigns to provide high returns and strong brand access.",
    },
    {
      id: "3",
      name: "PR Services",
      desc: "Our PR services craft compelling narratives to enhance your brand’s credibility and visibility. We specialize in media relations, crisis management, and influencer partnerships to amplify your message. Trust our expertise to shape public perception and drive meaningful engagement for your business.",
    },
    {
      id: "4",
      name: "SEM Services (Search Engine Marketing)",
      desc: "Get instant visibility and qualified traffic through smart SEM campaigns. We manage targeted paid ads that appear when your customers actively seek - result in several potential customers and conversions.",
    },
    {
      id: "5",
      name: "SMM Services",
      desc: "Our experts promote the electronic look of your brand with Social Media Marketing (SMM) services. We developed a strategy to improve commitment, develop followers and run conversions on platforms such as Facebook, Instagram, LinkedIn and more",
    },
    // {
    //   id: "6",
    //   name: "Replacement or Rebuilding",
    //   desc: "In some cases, it may be more feasible to replace an existing application with a new solution rather than attempting to modernize it. This approach involves rebuilding the application from scratch, leveraging modern technologies and design principles.",
    // },
  ];
  const techs = [
    {
      id: "1",
      img: "/assets/images/service/node.svg",
      name: "Node.js",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
      id: "2",
      img: "/assets/images/service/react.svg",
      name: "React.js",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
      id: "3",
      img: "/assets/images/service/angularjs.svg",
      name: "Angular",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
      id: "4",
      img: "/assets/images/service/laravel.svg",
      name: "Laravel",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
      id: "5",
      img: "/assets/images/service/typescript.svg",
      name: "Typescript",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
      id: "6",
      img: "/assets/images/service/nextjs.svg",
      name: "Next.js",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
  ];
  return (
    <div>
      <Header />
      <Head>
        <title>Our Service</title>
      </Head>

      <div
        className="pb-10 bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <ComponentHead
          title="Our Services"
          sub="Unlocking The Potential"
          head="Our greatest strength is the ability to adapt to our customer’s changing business requirements and deliver optimum quality."
        />
      </div>
      <Tabs />
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Technology"
          sub="Technical Stack"
          head="The technology stack for Digital Marketing can vary depending on the specific requirements of the application and the chosen modernization approach."
        />
        <Technology tech={techs} />
      </div>
     <div className="container-ack md:px-0 px-5">
            <ProcessHead
              processhead="Services"
              processsub="Other Services"
              processdesc="Your business just requires more than an online look - it requires a powerful strategy to stand out and fast scale. In Zmedios Tech, we offer groundbreaking digital marketing services that are ready to speed up developments, generate quality lines and improve the brand. Whether you are a start -up or a growing business, our customized digital marketing strategy ensures that you are ahead of the competition. From SEO and PPC to social media and e -mail marketing, we help you reach the right audience with the right message, especially when it comes to digital marketing services for small businesses who want to expand their footsteps"
              processimg="/assets/images/service/videoservice.png"
            />
            <Process process={processes} />
          </div>

      <Work />
      <Enquiry />

      <Clients />
      <Footer />
    </div>
  );
};

export default Services;
