import React from "react";
import Head from "next/head";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import ComponentHead from "../../components/Common/ComponentHead";
import Banner from "../../components/Services/DetailPage/Banner";
import Technology from "../../components/Services/DetailPage/Technology";
import Process from "../../components/Services/DetailPage/Process";
import ProcessHead from "../../components/Services/DetailPage/ProcessHead";
import Work from "../../components/Services/DetailPage/Work";
import Cards from "../../components/Services/DetailPage/Cards";
import Enquiry from "../../components/Services/DetailPage/Enquiry";
import Clients from "../../components/Home/Clients";

const CloudEngineeringAndDevOps = () => {
  const processes = [
    {
      id: "1",
      name: "Planning & Requirement Gatthering",
      desc: "Understand the business requirements and objectives for the cloud-based system. Identify the desired functionalities, scalability, security, and performance needs.",
    },
    {
      id: "2",
      name: "Architecture Design",
      desc: "Design the overall cloud architecture, including infrastructure components, network configuration, security measures, and scalability options.",
    },
    {
      id: "3",
      name: "Infrastructure Provisioning",
      desc: "IaC tools like Terraform or CloudFormation to automate the provisioning and management of cloud resources. Define infrastructure configurations in code, enabling repeatable and consistent deployments.",
    },
    {
      id: "4",
      name: "Continuous Integration & Deployment",
      desc: "Implementing a CI/CD pipeline to automate the build, test, and deployment processes. Use tools like Jenkins, GitLab CI/CD, or CircleCI to automate code integration, testing, and release management.",
    },
    {
      id: "5",
      name: "Configuration Management",
      desc: "This includes managing server configurations, installing software dependencies, and ensuring consistency across environments.",
    },
    {
      id: "6",
      name: "Monitoring And Logging",
      desc: "Implement monitoring & logging solutions to gain insights into the performance, availability & health of cloud-based systems. Use tools like Prometheus, Grafana, ELK Stack, or CloudWatch to monitor metrics, log data & so on.",
    },
  ];
  const cards = [
    {
      id: 1,
      para: "As a game-changer for businesses across industries. It offers numerous benefits, including increased agility, scalability, and cost-efficiency. By leveraging cloud solutions, businesses can optimize their operations, drive innovation, & stay ahead in the competitive market.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Solutions",
      subtitle: "Transforming Businesses With Cloud Solutions",
    },
    {
      id: 2,
      icon: "01",
      title: "Fully Scalable",
      para: "Your application will automatically increase or decrease cloud computing resources in response to usage.",
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
      title: "New Business Speed",
      para: "Reducing time-to-market under a perfected continuous deployment model",
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
      title: "Fast Delivery",
      para: "Cut cloud development time with hundreds of services from cloud providers.",
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
      title: "Never Overspend",
      para: "Under the pay-per-use model, you avoid idle server time charges.",
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
      title: "Flexible Development",
      para: "Swap, modify, or replace components on the go without refactoring.",
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
      title: "Outstanding Security",
      para: "The cloud offers first-class security services, so you won't have to build from scratch.",
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
        <title>Cloud engineering &amp; DevOps</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner 
          bannertitle="Lead your cloud development like the best in business do"
          bannersubtext="Together, we will establish an optimal cloud computing workflow that helps you cut down cloud spending, automate infrastructure monitoring, and increase architectural flexibility."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Cloud development done right expands your software &amp; team capabilities"
          servicedesc1="Using cloud based development resources to build and scale your app requires a rare skill set and an even more rare mentality.You need the sharpest knowledge from the worlds of cloud software development and infrastructure. That&apos;s a lot to handle."
          servicedesc2="Your DevOps and other cloud developers can learn by experimenting with cloud environment if there&apos;s time and money. Or you can jump-start your cloud development in weeks (not months) with our team rich in cross-industry cloud development experience."
        />
      </div>
      <Cards card={cards}/>
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technology"
        sub="Empowering Cloud &amp; DevOps Engineering"
        head="By harnessing a cutting-edge technology stack, businesses can empower their cloud and DevOps initiatives to drive transformation and achieve their strategic goals."
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
              processsub="Process We Follow"
              processdesc="The cloud and DevOps engineering process involves a series of steps and practices aimed at building, deploying, and managing cloud-based systems while fostering collaboration and automation."
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

export default CloudEngineeringAndDevOps;