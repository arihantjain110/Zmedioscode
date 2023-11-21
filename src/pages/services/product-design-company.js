import React from "react";
import Head from "next/head";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import Technology from "../../components/Services/DetailPage/Technology";
import ComponentHead from "../../components/Common/ComponentHead";
import Cards from "../../components/Services/DetailPage/Cards";
import Banner from "../../components/Home/Banner";
import ProccessHead from "../../components/Services/DetailPage/ProcessHead";
import Process from "../../components/Services/DetailPage/Process";
import Work from "../../components/Services/DetailPage/Work";
import Enquiry from "../../components/Services/DetailPage/Enquiry";
import Clients from "../../components/Home/Clients";

const ProductDdesignCompany = () => {
  const processes = [
    {
      id: "1",
      name: "Identify The Problem",
      desc: "Begin by understanding the problem or opportunity that the product aims to address. Conduct market research, analyze user needs, & identify gaps or pain points in the current market.",
    },
    {
      id: "2",
      name: "Research & Concept Development",
      desc: "Gather information about the target market, user preferences, & competitors. Generate ideas & concepts that could potentially solve the identified problem or fulfill the opportunity.",
    },
    {
      id: "3",
      name: "Initial Design & Prototyping",
      desc: "Create initial design concepts based on the selected ideas. These designs can be in the form of sketches, digital renderings, or low-fidelity prototypes. The goal is to quickly visualize & evaluate different design options.",
    },
    {
      id: "4",
      name: "Evaluation & Iteration",
      desc: "Test and evaluate the initial designs and prototypes. Seek feedback from potential users, stakeholders, and experts. Identify strengths and weaknesses, make improvements, and iterate on the designs.",
    },
    {
      id: "5",
      name: "Detailed Design Development",
      desc: "Once a promising design concept has been identified, focus on developing detailed design specifications. Consider factors such as materials, manufacturing processes, ergonomics, aesthetics, & functionality.",
    },
    {
      id: "6",
      name: "Testing & Quality Assurance",
      desc: "Conduct rigorous testing to ensure the product meets quality standards and functional requirements. This may include performance testing, durability testing, safety testing, and usability testing.",
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
  const cards = [
    {
      id: 1,
      para: "We aim to create innovative, user-centered, and commercially viable products. These solutions can be provided by in-house design teams, product design agencies, or individual design consultants who specialize in the field.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Solutions",
      subtitle: "We Shape the Perfect Solutions",
    },
    {
      id: 2,
      icon: "01",
      display: "icon",
      title: "Complete product teams",
      para: "Access Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, or Full-stack developers",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 3,
      icon: "02",
      display: "icon",
      title: "Fast iterations & frequent releases",
      para: "Pre-build components and our own templates let our team deliver more in each sprint – this is the perk of having such experienced web developers on board.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 4,
      icon: "03",
      display: "icon",
      title: "Business-tailored architecture",
      para: "Always designed and develop with your company's growth and the product's scalability in mind",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 5,
      icon: "04",
      display: "icon",
      title: "Thorough quality assurance",
      para: "We do QA before each deploy through manual and automated tests that catch bugs, performance issues, and conversion blockers.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 6,
      icon: "05",
      display: "icon",
      title: "Scalable & secure infrastructure",
      para: "Web development services full of custom solutions optimized for efficiency, flexibility and deployment speed.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 7,
      icon: "06",
      display: "icon",
      title: "World-class UX/UI",
      para: "Designed to help your business with user adoption",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
  ];
  return (
    <div>
      <Head>
        <title>Product Design Company</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
      <Banner
          bannertitle="Craft delightful UX for your digital products"
          bannersubtext="Software supports your business growth, and you need more from it. We’ve helped over 160+ companies build scalable products with confidence. Technology executives chose our development teams because of their skills tested in 7+ markets."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="One scalable team for start-to-finish development"
          servicedesc1="What does it mean to be reliable? <strong> It means your outsourced team works as well as your web developers </strong> do. Access web development services trusted by 98% of CTOs that you’ll find understanding with. They made APIs, custom web applications, hybrid mobile app development, provided web design services, updated stacks, and build cloud-native systems."
          servicedesc2="One place — everyone you need: Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, and Full-stack developers. Expect our web development team to be proactive throughout the project with an abundance of improvement suggestions that will get business moving even in areas such as search engine optimization."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
      <ComponentHead
        title="Technologies"
        sub="Key Technologies For Successful Initiatives"
        head="Whatever web applications you’re building, we got your back at every stage of web development, including web design. We’ve built a core system for a bank, an MVP marketplace sold for millions, and other 5☆ custom projects for 140+ companies worldwide."
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
            <ProccessHead
              processhead="Process"
              processsub="The Evolution Of Product Design"
              processdesc="Our structured approach that organizations & design teams follow to create new products or improve existing ones. It encompasses the various stages & activities involved in transforming an idea or concept into a tangible & market-ready product."
              processimg="/assets/images/service/videoservice.png"
            />
            <Process process={processes} />
          </div>
        </div>
        <div className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}></div>
      </div>

      <Work />
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default ProductDdesignCompany;