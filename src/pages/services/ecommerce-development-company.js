import React from "react";
import Head from "next/head";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import ComponentHead from "../../components/Common/ComponentHead";
import Banner from "../../components/Services/DetailPage/Banner";
import Process from "../../components/Services/DetailPage/Process";
import ProcessHead from "../../components/Services/DetailPage/ProcessHead";
import Cards from "../../components/Services/DetailPage/Cards";
import Enquiry from "../../components/Services/DetailPage/Enquiry";
import Technology from "../../components/Services/DetailPage/Technology";
import Work from "../../components/Services/DetailPage/Work";
import Clients from "../../components/Home/Clients";

const EcommerceDevelopmentCompany = () => {
  const processes = [
    {
      id: "1",
      name: "Planning & Requirement Gathering",
      desc: "Understanding the client's business objectives, target audience, product catalog, and specific requirements for the e-commerce platform.",
    },
    {
      id: "2",
      name: "Designing & Development",
      desc: "Building the front-end & back-end components of the e-commerce platform, including the product catalog, shopping cart, payment gateway integration & other functionalities.",
    },
    {
      id: "3",
      name: "Testing",
      desc: "Conducting thorough testing to ensure the e-commerce platform functions as intended, including functional testing, usability testing, performance testing, and security testing.",
    },
    {
      id: "4",
      name: "Content Management System",
      desc: "Implementing a content management system (CMS) to facilitate easy management and updating of product information, descriptions, images, and other content.",
    },
    {
      id: "5",
      name: "Payment Integration",
      desc: "Integrating secure payment gateways to enable smooth and secure online transactions for customers.",
    },
    {
      id: "6",
      name: "Marketing & SEO",
      desc: "Optimizing the e-commerce platform for search engines, implementing marketing strategies, and promoting the online store to attract and engage customers.",
    },
  ];
  const cards = [
    {
      id: 1,
      para: "From the initial conceptualization to the final launch, we guide you through every step of the e-commerce development process. Our solutions are built with a focus on delivering a seamless shopping experience, optimized performance, and enhanced security.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Solutions",
      subtitle: "Comprehensive E-commerce Development Solutions",
    },
    {
      id: 2,
      icon: "01",
      title: "Custom E-commerce Development",
      para: "Our team excels in crafting customized e-commerce solutions that align with your brand identity, target audience, & specific goals.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 3,
      icon: "02",
      title: "User Experience (UX) Design",
      para: "Our UX experts create intuitive interfaces, streamlined navigation & visually appealing designs that captivate users & drive engagement.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 4,
      icon: "03",
      title: "M-commerce Development",
      para: "Our developers are proficient in building responsive & adaptive e-commerce platforms that provide a seamless UX across all devices.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 5,
      icon: "04",
      title: "Integration & Third-Party Services",
      para: "We seamlessly integrate your payment gateways, shipping providers, CRM tools, inventory management & other third-party services.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 6,
      icon: "05",
      title: "E-commerce Analytics & Reports",
      para: "By tracking key metrics, analyzing customer behavior & measuring sales performance, you gain business decisions & optimize your marketing strategies.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 7,
      icon: "06",
      title: "Support & Maintenance",
      para: "We provide ongoing support & maintenance services to address any technical issues, perform updates, & implement enhancements as your business evolves.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
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
      <Head>
        <title>Ecommerce Development Company</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner 
          bannertitle="Elevating E-Commerce Experiences for Unmatched Online Success"
          bannersubtext="At Zmedios Innovations, we are dedicated to elevate e-commerce experience to new heights. We understand that in today's digital landscape, a seamless &amp; captivating online presence is essential for your business's success. Our expert team of developers is committed to empowering your online journey."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Creating Seamless Connections &amp; Conversion in E-commerce Experiences"
          servicedesc1="Our team of skilled developers implements robust e-commerce platforms with secure payment gateways, streamlined checkout processes, and personalized product recommendations. By leveraging data-driven insights and industry best practices, we optimize conversion rates, transforming browsing visitors into loyal customers."
          servicedesc2="We also understand that ongoing optimization is crucial for sustained success. That's why we continuously monitor user behavior, conduct A/B testing, and leverage analytics tools to identify opportunities for improvement. Our iterative approach ensures that your e-commerce experiences are constantly refined, ensuring maximum engagement and conversion rates."
        />
      </div>
      <Cards card={cards}/>
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technology"
        sub="Unleashing The Potential Of Innovation"
        head="At Zmedios Innovations, we are at the forefront of revolutionizing e-commerce technology. We understand that staying ahead in the competitive online marketplace requires harnessing the power of innovative technologies to enhance user experiences, drive conversions &amp; optimize business operations."
      />
      <Technology tech={techs} />
      </div>
      <div>
        <div
          style={{
            backgroundImage:
              'url("/assets/images/service/servicebackground.png")',
          }}
        >
          <div className="container-ack md:px-0 px-5">
            <ProcessHead
              processhead="Process"
              processsub="Ecommerce Development Process"
              processdesc="This process involves gathering requirements, planning, designing, developing, testing, launching, and maintaining the e-commerce platform to ensure its functionality, usability, and success."
              processimg="/assets/images/service/videoservice.png"
            />
            <Process process={processes} />
          </div>
        </div>
        <div
          className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}
        ></div>
      </div>
      <Work />
      {/* <Section /> */}
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default EcommerceDevelopmentCompany;