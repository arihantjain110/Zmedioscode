import React from "react";
import Head from "next/head";
import Header from "../../components/Common/Header";
import Banner from "../../components/Services/DetailPage/Banner";
import Cards from "../../components/Services/DetailPage/Cards";
import Technology from "../../components/Services/DetailPage/Technology";
import ComponentHead from "../../components/Common/ComponentHead";
import Process from "../../components/Services/DetailPage/Process";
import ProcessHead from "../../components/Services/DetailPage/ProcessHead";
import Work from "../../components/Services/DetailPage/Work";
import Enquiry from "../../components/Services/DetailPage/Enquiry";
import Clients from "../../components/Home/Clients";
import Footer from "../../components/Common/Footer";

const SoftwareDevelopmentCompany = () => {
  const processes = [
    {
      id: "1",
      name: "Requirements Gathering",
      desc: "The first step in the software architecture process is to gather the requirements for the software system. This includes understanding the functional & non-functional requirements of the system.",
    },
    {
      id: "2",
      name: "Architectural Design",
      desc: "The next step is to create an architectural design for the software system. This includes defining the components of the system, their interactions, and the system's overall structure.",
    },
    {
      id: "3",
      name: "Implementation",
      desc: "The implementation phase is where the architectural design is turned into working software. This includes coding, testing, and deploying the software system.",
    },
    {
      id: "4",
      name: "Evolution",
      desc: "The software architecture process is an important part of the software development process. A well-designed software architecture can help to ensure that the software system is reliable, efficient, & maintainable.",
    },
    {
      id: "5",
      name: "Testing & Quality Assurance",
      desc: "Perform various testing activities, including unit testing, integration testing, system testing, and acceptance testing, to verify the correctness, reliability, and performance of the software system.",
    },
    {
      id: "6",
      name: "Deployment & Integration",
      desc: "Deploy the software system in the target environment, ensuring smooth integration with other systems and components. Consider aspects like deployment models, configuration management, and version control.",
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
      para: "Software architecture provides a visual representation and documentation of the system's structure, components, and interactions. It serves as a communication tool for stakeholders, developers, and other project members, fostering better understanding and collaboration.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Solutions",
      subtitle: "Designing Scalable & Robust Software Architecture",
    },
    {
      id: 2,
      icon: "01",
      title: "Maintainability",
      para: "A well-designed architecture promotes ease of maintenance by organizing components and dependencies in a structured manner.",
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
      title: "Cost Optimization",
      para: "Expand without overspending with pay-for-use technology that minimizes infrastructure operation costs.",
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
      title: "Modularity",
      para: "Software architecture promotes the decomposition of a system into modular components, allowing for independent development, testing, and maintenance of individual parts.",
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
      title: "Security",
      para: "Architecture plays a crucial role in ensuring the security of a software system. It includes mechanisms for data protection, access control, encryption, and other security measures.",
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
      title: "Reliability",
      para: "Software architecture incorporates fault tolerance mechanisms to ensure system reliability and resilience. It includes strategies such as redundancy, error handling, and recovery mechanisms.",
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
      title: "Performance",
      para: "Effective software architecture considers performance requirements and incorporates design decisions that optimize resource utilization, minimize bottlenecks, and enhance overall system efficiency.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
  ];  
  return (
    <div>
      <Head>
        <title>Software Architect Company</title>        
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
       <Banner 
          bannertitle="Unlocking Innovation Through Expert Software Architect Solutions"
          bannersubtext="Unlock Innovation and Drive Success with Expert Software Architect Solutions. Leverage cutting-edge technologies and strategic expertise to design and implement transformative software architectures that propel your organization forward."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="A well designed software architecture saves thousands of development hours"
          servicedesc1="We’ve seen it happen many times in our software engineering work for 200+ projects. Last client dropped server maintenance and operation costs by 300 times. Time to see what performance you can achieve."
          servicedesc2="Our software architects will help you establish a secure, flexible, and efficient software development process that meets your needs. Aa a well-structured software architecture yields substantial benefits by drastically reducing development time, resulting in significant cost savings equivalent to thousands of hours that would otherwise be expended during the development process."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technologies"
        sub="Tech Powered Software Architecture"
        head="Technology moves faster than ever, and you need to catch up. Reach measurably higher scalability, performance, and cost optimization thanks to resilient software architecture development."
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
              processsub="A Structured Process For Success"
              processdesc="Our structured approach that organizations & design teams follow to create new products or improve existing ones. It encompasses the various stages & activities involved in transforming an idea or concept into a tangible & market ready product."
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
     <Footer/>
    </div>
  );
};

export default SoftwareDevelopmentCompany;