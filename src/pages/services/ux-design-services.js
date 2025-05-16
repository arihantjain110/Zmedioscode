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
const UiStrategy = () => {
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
      para: "Investing in high quality UX design services can have a major impact on your lower line. From increasing user satisfaction to increasing the conversion frequencies, here are reported how our user experience solutions benefit your business: ",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      // maintitle: "Revitalize",
      subtitle: "Key Benefits of Our UX Design Services",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: "Improved User Engagement and Retention",
      para: "Our UX experts prepare digital tours that users close with the first click. By designing intuitive interfaces and even navigation, we keep users busy for a long time and encourage them to come back. The more comfortable the experience, the greater the degree of storage.",
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
      subsubtitle: "Higher Conversion Rates",
      para: "Each element of our user experience design is adapted to guide users to the desired tasks - whether it is to shop, register or request the demo. A spontaneous user experience eliminates friction points and increases your conversions.",
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
      subsubtitle: "Stronger Brand Perception",
      para: "Well-designed products create a permanent impression. Our UX design services help in size how users see your brand. A modern, user -friendly interface tells the audience that your business is professional, reliable and committed to skill.",
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
      subsubtitle: "Reduced Development Costs",
      para: "By identifying potentially targeted problems in the design process, we protect you from expensive redesign after launch. Our strategic UX plan ensures that development moves steadily and effectively with low errors and reunification.",
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
      subsubtitle: "Enhanced Accessibility",
      para: "We design for everyone. Accessibility is one of the main aspects of our user experience design philosophy. We create inclusive experiences that meet users of all abilities, increase the scope and demonstrate corporate social responsibility.",
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
      subsubtitle: "Data-Backed Decision Making",
      para: "Our UX strategy is fueled by way of real insights. From heatmaps to session recordings, we leverage data analytics to understand consumer behavior and improve design overall performance continuously. This information-driven approach ensures each layout alternate is impactful.",
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
      question: "What are UX design services?",
      answer:
        `The UX design services include creating a user -friendly and spontaneous digital experience to meet users' needs. These services include research, wireframing, prototyping, purpose testing and correction in general interactions with websites or apps. The goal is to increase the user's satisfaction and connection.`,
    },
    {
      question: "Is UX design like coding?",
      answer: `No, UX design is not the same as coding. Coding involves writing software and programming functionality, UX Design focuses on how users interact with a product. UX designers work with structure, flow and purpose, but they often work with developers so that they bring their designs into life. `,
    },
    {
      question: "What are the 5 elements of user experience design?",
      answer:  `There are 5 main elements in UX design:
                - Strategy : Define user needs and business goals
                - Scope : Determination of Materials and Features
                - Structure : information on information
                - Skeleton : Design Layout and interface
                - Surface : Visual Design and creates aesthetics`,
    },

    {
      question: "What’s the difference between UI and UX?",
      answer:  `UI (User Interface) is the way a product appears—the shape and structure, buttons, colours, and typeface. UX (User Experience) focuses on how it functions—ensuring it's easy, effective, and pleasant to use. UI is part of the broader UX methodology.`,
    },
    
    {
      question: "Why is UX design important for businesses?",
     answer:  `UX design services enhance customer satisfaction, growth conversion fees, and build long-time period loyalty. An exact consumer can raise an emblem with the aid of offering smoother and more attractive interactions as compared to rivals, without delay impacting enterprise increase and expanding the consumer base.`,
    },
    
  ];
  return (
    <div>
      <Head>
        <title>UX Design Services</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="UX Design Services"
          bannersubtext="All businesses wish to provide a memorable digital experience that retains users and brings them back for more. At Zmedios Tech, we make this dream come true with our skilled ux design services. If you're launching a new product or reinventing your current digital assets, our strategic and user-centric method of user experience design will make your audience adore every interaction with your brand.We specialize in creating user-centric, beautiful, and goal-driven UX designs that reflect your business goals. Intensely concentrating on user behavior, design psychology, and usability, we help businesses create digital products that are not just beautiful but also work really well."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Why UX Design Services Matter for Your Business"
          servicedesc1="Today's users demand more than an effective interface—they want a purposeful experience. If your web application or site is confusing, slow, or annoying, potential customers will bail without converting. This is where professional ux design services can help."
          servicedesc2="A well-designed user experience improves the purpose, access and satisfaction given in the user product interface. It looks out-this is about solving the problem, strengthening users and building brand loyalty through simple design."
           
        />
       
        <Banner
          reverse={true}
          serviceimg="/assets/images/aboutusimg4.jpg"
          servicehead="Our Approach to User Experience Design"
          servicedesc1="Our approach blends creativity, research and strategy to distribute ux design services that actually resonate with your users. Each step is carefully planned to ensure that we meet both user expectations and business goals."
          servicedesc2={
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Research-driven design:</strong> We start with your targeted users, industry trends and intensive analysis of competitors. This data helps us understand what users want and what they expect and how we can provide the best virtual solutions.
              </li>
              <li>
                <strong>User-centered strategy: </strong>Every design decision we make is about the user. We develop wireframes and prototypes that simplify navigation and increase the purpose of retaining the identity of your brand. 
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

export default UiStrategy;