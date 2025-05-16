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
const Visualisation = () => {
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
      para: "Converts complicated data into understandable, actionable insights with our leading data visualisation services. From interactive dashboards to dynamic reports, we turn numbers into powerful visual narratives that inform wiser decisions. Let us enable you to see the bigger picture—so you can act with confidence. ",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      // maintitle: "Revitalize",
      subtitle: "Benefits of Our Data Visualisation Solutions",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: "Enhanced Decision-Making",
      para: "Visual representations simplify complex data, enabling faster analysis and more informed business choices. Clear charts and dashboards highlight trends, reducing guesswork.",
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
      subsubtitle: "Increased Efficiency",
      para: "Interactive dashboards and automated reports streamline data processing, saving time on manual analysis. Teams can focus on strategy rather than deciphering raw numbers.",
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
      subsubtitle: "Improved Communication",
      para: "Visuals make insights accessible to all stakeholders, bridging gaps between technical and non-technical teams. Engaging graphs and infographics ensure key messages are understood instantly.",
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
      subsubtitle: "Scalability",
      para: "Our data visualisation services effortlessly adapt to growing big data demands, maintaining high analytics performance even with massive datasets.",
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
      subsubtitle: "Competitive Advantage",
      para: "Real-time visual analytics help spot market trends early, giving your business an edge. Data-driven strategies keep you ahead of competitors by identifying opportunities faster.",
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
      subsubtitle: "Better Customer Insights",
      para: "Visualised customer data reveals behavior patterns, improving targeting and personalization. Enhanced understanding leads to stronger engagement and higher satisfaction rates.",
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
      question: "What is meant by data visualisation?",
      answer:
        `The data visualisation converts raw data into graphic formats, such as easy to understand diagrams, graphs and maps. This helps to highlight hidden trends, patterns and insight into complex datasets. Companies use it for analysis, reporting and decision -making. The effective visualization converts numbers to attractive visual stories. Tools like Tableau and Power BI make it available.`,
    },
    {
      question: "What are the 5 C's of data visualisation?",
      answer: `The three most common types of prototyping in software development are:
                1- Clear – Simple, uncluttered visuals.
                2- Concise – Focused on key insights.
                3- Captivating – Engaging and memorable.
                4- Correct – Accurate and truthful representation.
                5- Contextual – Meaningful with relevant background. 
    These principles ensure impactful, easy-to-understand data storytelling.`,
    },
    

    {
      question: "What are the 3 rules of data visualisation?",
      answer:  `Creating a rapid prototype involves a few key steps:
                1- Learn the audience - tailor views for their needs.
                2- Simplify - avoid dislocation; Highlight the main data.
                3- Select the correct chart - Match the data type visualization (eg comparison, line for trends).
Following these rules increases clarity and efficiency. `,
    },
    
    {
      question: "What are the different types of data visualisation?",
     answer:  `- Charts & Graphs (Bar, Line, Pie)
               - Maps (Heatmaps, Geographic)
               - Dashboards (Interactive, Real-time)
               - Infographics (Visual summaries)
               - Advanced (Scatter plots, Tree maps)
Each type serves unique analytical purposes. `,
    },
    {
      question: "Which tool is used for data visualisation?",
      answer:  `The top-tier for data visualisation services includes customized coding, and Tableau (Interactive Dashboard) for Excel (Basic Chart), POWER BI (Commercial Enterprise Analytics), Google Data Studios (Loose Reporting), Python (Matplotelib/Seaborn). The unit of high quality depends on the project and the complexity of consumer understanding, making the equipment alternative an important part of distributing effective data visualisation solutions. `,
    },
  ];
  return (
    <div>
      <Head>
        <title>Data Visualisation Services</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Data Visualisation Services"
          bannersubtext="Increase your commercial enterprise intelligence and selection-making potential with our country-art facts newspaper offerings. We specialise in changing complicated statistics to clean, action-wealthy insights the usage of the latest data visualisation tools and software program. Our data visualisation services will let you interpret you easily, informed selections and strategic plans."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Leverage Advanced Data Visualisation to Unlock Actionable Business Insights"
          servicedesc1="Our data visualisation services are designed to help you use the full potential of your data, which has improved operating efficiency and business growth. Our expert team creates interactive dashboards, dynamic charts and attractive infographics that suit your needs. Whether business analysis, marketing trends or operating matrix, we help you make data -driven decisions."
          servicedesc2="Eyeless Hypnotic Story tells the presentations, reports and strategies. Use the hidden pattern, track the performance and communicate the findings effectively. Let's convert raw data into powerful visual stories that run successfully. Raise your computer game with us today!"
           
        />
       
        <Banner
          reverse={true}
          serviceimg="/assets/images/aboutusimg4.jpg"
          servicehead="Our Data Visualisation Services Include"
          //servicedesc1="Our prototyping services are designed to graceful the software development process, reduce risks, and ensure your product hits the market with confidence. Here’s how we add value at every stage:"
          servicedesc2={
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Interactive Dashboards:</strong>We create a user -friendly dashboard that provides real -time data insight, enabling you to monitor the most important performance indicators effectively.
              </li>
              <li>
                <strong>Custom Reports: </strong>Our analog report presents data in a clear and short way, providing simple interpretation and decision-making systems.
              </li>
              <li>
                <strong>Data Integration:  </strong> We integrate data from many sources to provide a comprehensive view of your business matrix. 
              </li>
              <li>
                <strong>Advanced Analytics:</strong> Using a refined data visualisation software, we do intensive analysis to highlight trends and patterns.
              </li>
            </ul>
          }
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

export default Visualisation;