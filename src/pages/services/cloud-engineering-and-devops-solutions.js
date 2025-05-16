import React from "react";
import Head from "next/head";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import Banner from "../../components/Services/DetailPage/Banner";
import Cards from "../../components/Services/DetailPage/Cards";
import Technology from "../../components/Services/DetailPage/Technology";
import ComponentHead from "../../components/Common/ComponentHead";
import Process from "../../components/Services/DetailPage/Process";
import ProcessHead from "../../components/Services/DetailPage/ProcessHead";
//import Work from "../../components/Services/DetailPage/Work";
//import Enquiry from "../../components/Services/DetailPage/Enquiry";
//import Clients from "../../components/Home/Clients";
import Faq from "../../components/Services/DetailPage/Faq";
const CloudEngineeringAndDevOps = () => {
  const processes = [
    {
      id: "1",
      name: "Rehosting or Lift-and-Shift",
      desc: "This approach involves moving an existing application to a new infrastructure without making significant changes to the application's architecture or functionality.",
    },
    {
      id: "2",
      name: "Refactoring or Re-architecting",
      desc: "Refactoring involves making structural changes to the application's codebase and architecture while preserving its core functionality. It aims to improve the application's performance, scalability, and maintainability.",
    },
    {
      id: "3",
      name: "Replatforming",
      desc: "Replatforming entails moving an application to a different platform or technology stack while retaining its core features & functionality. For example, migrating an on-premises application to a cloud platform.",
    },
    {
      id: "4",
      name: "Rearchitecting or Redesigning",
      desc: "Rearchitecting involves a significant overhaul of the application's architecture and design to meet current business needs and technological advancements.",
    },
    {
      id: "5",
      name: "Containerization",
      desc: "Containerization involves encapsulating an application and its dependencies into containers, using technologies like Docker. This approach allows applications to run consistently across different environments and simplifies deployment and scalability.",
    },
    {
      id: "6",
      name: "Replacement or Rebuilding",
      desc: "In some cases, it may be more feasible to replace an existing application with a new solution rather than attempting to modernize it. This approach involves rebuilding the application from scratch, leveraging modern technologies and design principles.",
    },
  ];
  // const techs = [
  //   {
  //     id: "1",
  //     img: "/assets/images/service/node.svg",
  //     name: "Node.js",
  //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
  //   },
  //   {
  //     id: "2",
  //     img: "/assets/images/service/react.svg",
  //     name: "React.js",
  //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
  //   },
  //   {
  //     id: "3",
  //     img: "/assets/images/service/angularjs.svg",
  //     name: "Angular",
  //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
  //   },
  //   {
  //     id: "4",
  //     img: "/assets/images/service/laravel.svg",
  //     name: "Laravel",
  //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
  //   },
  //   {
  //     id: "5",
  //     img: "/assets/images/service/typescript.svg",
  //     name: "Typescript",
  //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
  //   },
  //   {
  //     id: "6",
  //     img: "/assets/images/service/nextjs.svg",
  //     name: "Next.js",
  //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
  //   },
  // ];
  const cards = [
    {
      id: 1,
      //para: "We provide a complete suite of SEM services that are built to scale as your business grows. Explore our core offerings: ",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      // maintitle: "Revitalize",
      subtitle: "Key Benefits of Our Cloud Engineering Service & DevOps Solution",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: "Faster Time-to-Market",
      para: "With our cloud engineering service and devops solution, we help groups reduce their improvement and deployment cycles vivid. Through automation and optimized cloud infrastructure, you may launch products and features quicker than ever before. Rapid iterations and shorter launch cycles imply your enterprise remains in advance of the competition.",
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
      subsubtitle: "Cost Optimization and Resource Efficiency",
      para: "Migrating to the cloud and automating techniques through devops significantly reduces your IT spend. With dynamic resource allocation and usage-based total billing, you handiest pay for what you use. Our crew guarantees your cloud setup is optimized for overall performance and value. Additionally, Devops gets rid of redundant manual procedures, saving hours of engineering time and boosting ordinary group productivity.",
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
      title: "Better Security",
      subsubtitle: "Scalability and Performance on Demand",
      para: "We designed Skylands applications that automatically score your growing user base or ups and downs. Whether it is a seasonal spike or continuous development, the system is fast and responsible. Our devops solution makes your infrastructure smooth and automated. From the load balance, we ensure high availability and performance with minimal manual intervention.",
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
      title: "Improved CX",
      subsubtitle: "Enhanced Security and Compliance",
      para: "Safety is top priority in both cloud and devops strategies. We integrate safety practices for best-in class including identification and access management (IAM), data encryption, secure CI/CD pipelines and compliance audit. Our cloud engineering service ensures that your infrastructure is preserved against weaknesses and meets important industry standards such as GDPR, HIPAA or ISO certificates.",
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
      title: "Better Business Performance",
      subsubtitle: "Continuous Integration and Delivery (CI/CD)",
      para: "One of the corners of a successful devops solution is an effective CI/CD pipeline. We automate testing, distribution and monitoring, so your growth and operating team works in the sink. CI/CD leads to a quick roll -out, low error and a smooth user experience.",
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
      title: "New Growth Possibilities",
      subsubtitle: "Real-Time Monitoring and Feedback Loops",
      para: "Our clouds and devops equipment provide system performance, application logs and real -time visibility in user behavior. With dashboards and awake, you can continuously solve problems before affecting the end users. This continuous response loop enables continuous improvement and rapid problem solving.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
  ];
  const faqData = [
    {
      question: "What are the types of cloud engineering?",
      answer:
        `Cloud Engineering is a wide area with many special branches. The main types of Cloud Engineering Service include:
        -  Cloud Architecture : focuses on designing the scalable and safe blame environment.
        -  Cloud development : this includes the construction of skyland application and microsar.
        -  Cloud Operations (Cloudop) : Ensure even operation of the blame environment with monitoring, automation and maintenance.
        -  Cloud Security Engineering : Cloud implements strategies for infrastructure and data protection.
        -  Cloud Network Engineering : manages network aspects of Skypperinogen, including VPCs, gateway and traffic routing.
      Together, these roles enable businesses to leverage a comprehensive cloud engineering service that supports innovation, performance, and resilience in the digital space.`,
    },
    {
      question: "What are the top 3 cloud services?",
      answer: `The top three cloud service providers trusted worldwide are:
                - Amazon Web Services (AWS)
                - Microsoft Azure
                - Google Cloud Platform (GCP)
 Each of these platforms supports a wide range of services required for both Cloud Engineering Services and forms a strong devops solution. From the calculation power and storage of CI/CD tools and container orchestration, they provide flexibility and scalability that modern businesses need to grow efficiently. `,
    },
    {
      question: "Can you name 5 DevOps tools?",
      answer:  `The top three cloud service providers trusted worldwide are:
                - Jenkins : integration and distribution automate pipelines.
                - DOKAR : Enables containerization for frequent distribution.
                - Kubernetes : Orchestrates containers for scalability and performance.
                - TerraForm : Manage infrastructure in the form of code for frequent determination.
                - Gitlab CI/CD : Strong CI/CD combines version control with automation.
These tools help to streamline software development and operation, and when used in a well -structured shooting technique, they promote severe efficiency, speed and reliability. `,
    },

    {
      question: "What is an example of cloud engineering?",
     answer:  `A real example of Cloud Engineering Service migrates the A-Trans-Romance application on a Heritage for Skylander architecture on AWS or Azure. This may include:
                - Re -architte application to use microservices
                - Anatomy of CI/CD pipelines
                - Establishment of auto-scaling infrastructure
                - Cloud -based monitoring and implementation of safety equipment
 This type of project ensures better performance, low costs and fast distribution, fully demonstrating the power of combining shooting technique with DevOps practice. `,
    },
    {
      question: "Which cloud is best for DevOps?",
      answer: `All major cloud carriers offer DevOps-pleasant environments, but AWS is often taken into consideration as a nice cloud for enforcing a complete DevOps solution because of its large environment of automation equipment, scalability, and integration options.That stated, Azure and Google Cloud also provide robust structures perfect for deploying and handling DevOps pipelines. The proper preference depends on your specific desires, current infrastructure, and the goals of your cloud engineering service.`,
    },
  ];
  return (
    <div>
      <Head>
        <title>Cloud Engineering And DevOps Services</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Cloud Engineering And DevOps Services"
          bannersubtext="Looking for scale, speed and innovation in your business? Our cloud engineering service and Devops are designed to speed up your digital change, and ensure solution and agility. In Zmedios Tech, we offer cloud and devops solutions ready for the future that strengthen your business, quickly optimizes, distributes and reduces operating friction. Our expert team blends deep IT consulting expertise with sterling engineering to deliver flexible, secure, and high-performing cloud architectures—backed by agile DevOps practices that streamline deployment cycles and minimize downtime."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Our Cloud Engineering Service?"
          servicedesc1="Cloud engineering service refers to the practice of design, construction, control and adaptation to cloud infrastructure that supports scalable and reliable digital applications. This includes cloud migration, architecture, integration, automation and safety to ensure seamless skiing."
          servicedesc2="With cloud engineering, companies can reduce capital expenses, ensure rapid application purposes and strengthen business continuity. Whether you're going to AWS, Azure or Google Cloud, our team will help you maximize Cloud Roi with a well-defined architecture and continuous adaptation practice."
        />
        <Banner
          reverse={true}
          serviceimg="/assets/images/aboutusimg4.jpg"
          servicehead="What is a Devops Solution?"
          servicedesc1="A devops integrates the solution software development (DEV) and IT operations (OPS) to enable fast, automatic and reliable software delivery. It breaks the traditional silos between the teams and promotes the culture of collaboration, automation and continuous improvement."
          servicedesc2="Our devops solutions focus on CI/CD pipelines, automatic testing, infrastructure, container orchestration and real-time monitoring so that your team can provide better functions to users, quickly and safely."
        />
      </div>
      <Cards card={cards} />
      {/* <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Technology"
          sub="Social Engine Marketing"
          head="The technology stack for Social Engine Marketing can vary depending on the specific requirements of the application and the chosen modernization approach."
        />
        <Technology tech={techs} />
      </div> */}

      <div>
        <div
          style={{
            backgroundImage:
              'url("/assets/images/service/servicebackground.png")',
          }}
        >
          {/* <div className="container-ack md:px-0 px-5">
            <ProcessHead
              processhead="Services"
              processsub="App Modernization On Peek"
              processdesc="Full-scope app modernization services you can start using quickly (even in weeks!) to fix, boost, and revamp your systems with teams that have worked for over 160 companies."
              processimg="/assets/images/service/videoservice.png"
            />
            <Process process={processes} />
          </div> */}
        </div>
        <div
          className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}
        ></div>
      </div>
      <Faq faqData={faqData} />
      {/* <Work /> */}
      {/* <Section /> */}
      {/* <Enquiry /> */}
      {/* <Clients /> */}
      <Footer />
    </div>
  );
};

export default CloudEngineeringAndDevOps;