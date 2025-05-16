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
const UiDesign = () => {
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
      para: "We bring innovation, precision, and user-centric designs to transform digital experiences. Our UI design services include: ",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      // maintitle: "Revitalize",
      subtitle: "Our UI Design Expertise",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: "Custom UI Design",
      para: "We create unique, brand-graded UI designs that reflect your business identity. Each design element from typography to color choice is carefully selected to increase the user's busyness and create a spontaneous experience. Our approach ensures that your ui design service is prepared to meet your business goals by visually offering a compelling form.",
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
      subsubtitle: "UI Design for Dashboards",
      para: "A well-designed UI design dashboard simplifies complex data and presents it in a spontaneous, user -friendly way. We design the dashboard that is visually attractive, easy to navigate and adapted to make quick decisions. Whether it is an administrator panel, analysis tool or a business dashboard, our design focuses on clarity, efficiency and user satisfaction.",
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
      subsubtitle: "Mobile & Web UI Design",
      para: "We make responsible and interactive UI design crafts that make certain easy experiences on all devices. Whether you need a cellular app interface or online platform, UI-Design is custom designed, purpose and gets admission to. Our layout users boom engagement and increase higher interaction costs.",
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
      subsubtitle: "User-Centered UI/UX Strategy",
      para: "Our ui design service is contained in specialization, personal behavior and user expectations. We do in-depth research and use targeted tests to ensure that we adjust each interface to user needs. By specializing in intuitive navigation, interactive elements and access, we increase the general user interface design process and distribute solutions that actually resonate with the audience.",
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
      subsubtitle: "Prototype & Wireframing",
      para: "We develop a detailed wireframe and interactive prototype before we end the ui design. This helps imagine the user trip, limit the design elements and ensure a good user experience. Wireframes act as drawings that correct the growth process, reduce errors.",
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
      subsubtitle: "UI Enhancement & Modernization",
      para: "If you've got a present UI that desires a refresh, we provide redecorate answers that enhance usability, aesthetics, and overall performance. We include the modern-day traits, animations, and micro-interactions to decorate the overall user enjoyment and align your UI with leading standards.",
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
      question: "What does a UI designer do?",
      answer:
        `A UI clothier specializes in developing visually attractive and beneficial consumer interface designing for digital merchandise. Through expert ui design service, they craft layouts, buttons, icons, and distinct interactive elements to ensure a continuing purchaser experience. Their paintings involve taking part with UX designers and developers to align aesthetics with usability. UI design additionally includes choosing shade schemes, typography, and visual hierarchies. The goal is to make interfaces intuitive, accessible, and attractive for users.`,
    },
    {
      question: "What is meant by user interface design?",
      answer: `User interface design (UI design) refers to the process of creating visual and interactive aspects of a digital product. This involves designing menus and forms such as screens, pages and items to facilitate user interactions. UI design prefers aesthetics, stability and responsibility in units. The focus has been focused on increasing attention capacity while maintaining the brand identity. Effective ui design ensures that users can easily navigate and complete tasks. `,
    },
    {
      question: " What are the 3 types of user interface design?",
      answer:  `The three main types of user interface design are-
                1. Graphical user interface
                2. Voice-controlled user interface
                3. Gesture-based user interface
   The ui design service covers a variety of interfaces to increase user interactions in different platforms. The UI design for GUI includes buttons, menu and screen, which is usually used in apps and websites. Views, like Alexa or Siri, rely on talk for interaction. Each type meets separate user needs and references, required to create the ui design service spontaneous and spontaneous digital experiences.`
    },

    {
      question: "What is an UI design example?",
      answer:  `An example of UI design is a pure layout, a mobile bank app with intuitive navigation and marked colors. Here includes ui design buttons for transaction, readable typography and dashboard account information. Another example is the login page of a website with the input field, a "Forgotten Password" coupling and a responsible design.`,
    },
    
    {
      question: "How to create UI wireframes?",
     answer:  `To create Ui -Wireframes, start using simple shapes and room holders by emphasizing the structure of the screen or site. At this stage, the user interface that designs the layout is focused without detailed scenes on design, vacancy and element placements. As part of a professional ui design service, units such as Figma, Sketch or Adobe XD are used to prepare low loyal wireframes. These wireframes act as a blueprint for the final interface, which helps the teams to imagine and refine the user before entering a detailed design.`,
    },
    
  ];
  return (
    <div>
      <Head>
        <title>(UI) User Interface Design Services</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="(UI) User Interface Design Services"
          bannersubtext="Your digital appearance is just more than a website or app - this is an experience that defines how users interact with your brand. A well-designed ui design service, seamless navigation, attractive visual and natural functionality ensures that users are busy. In Zmedios, we specialize in creating a Ui design dashboard and interface that not only looks fantastic, but also improves the purpose, which makes digital interaction smooth and pleasant."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Boost Your Digital Presence With Great UI Design"
          servicedesc1="A compelling person interface designing approach could make all the distinction in user engagement and business growth. Whether you need an emblem-new UI design or an improvement in your present interface, we deliver solutions that beautify usability, visual enchantment, and overall performance."
          servicedesc2="Our ui designing service & technique focuses on blending creativity with technology, making sure that your platform stands out while turning in a superb user revel in.Let’s create intuitive, enticing, and visually beautiful UI designs that go away with a lasting effect. Contact us today to speak about your UI design needs!"
           
        />
       
        <Banner
          reverse={true}
          serviceimg="/assets/images/aboutusimg4.jpg"
          servicehead="Crafting User-Centric Interfaces for Maximum Impact"
          servicedesc1="A great UI design is outside aesthetics - it's about creating a simple and attractive experience that improves the user's satisfaction. We focus on:"
          servicedesc2={
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Navigation with intuitive knowledge:</strong>Users can easily find what they need without disappointment.
              </li>
              <li>
                <strong>Responsible design: </strong>Provide a spontaneous experience in all screen sizes and devices. 
              </li>
              <li>
                <strong>Visually attractive elements:</strong>Use modern design principles to capture the eye and create brand-graded interfaces.
              </li>
              <li>
                <strong>Interactive features: </strong>Improve commitment to animation, micro-pollution and dynamic content. 
              </li>
               <li>
                <strong>Custom performance: </strong> Design Light UIs that loads quickly and functions evenly. 
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

export default UiDesign;