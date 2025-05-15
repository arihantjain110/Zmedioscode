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
// import Work from "../../components/Services/DetailPage/Work";
// import Enquiry from "../../components/Services/DetailPage/Enquiry";
// import Clients from "../../components/Home/Clients";
import Faq from "../../components/Services/DetailPage/Faq";
const SmmAgency = () => {
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
      para: "We deliver a full spectrum of SMM services crafted to align with your unique business goals. Here’s how Zmedios Tech can elevate your digital presence:",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      // maintitle: "Revitalize",
      subtitle: "Our Expert Social Media Marketing Services Include",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: "Customized Online Communities Strategy Development",
      para: "Each business is unique and is therefore our approach. We start by analyzing your brand, audience and industry to develop a tailor -made strategy that matches your social media efforts with your business goals. With a clear, actionable roadmap, you will always know where your brand is.",
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
      subsubtitle: "Content Creation That Engages and Converts",
      para: "Compulsive content is the heart of any successful marketing strategy on social networking. Our social media marketing services ensure that your brand is with scenes, copies of high quality, copies, videos and graphics, designed to draw attention and keep the audience busy. From Instagram reels to professional LinkedIn updates, our content speaks directly to the interests and needs of the audience.",
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
      subsubtitle: "Account Management Across All Major Platforms",
      para: "Managing multiple social networking money owed can be time-consuming and overwhelming. As your committed social media marketing agency, we take care of the whole lot—from content material scheduling and submit optimization to target market interplay and overall performance tracking. Our intention is to make your brand constantly lively and responsive, making sure no message is going ignored and each possibility is seized.",
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
      subsubtitle: "Paid Social Media Advertising (Social Media Ads)",
      para: "Looking for accelerating development? Our paid social campaigns provide immediate visibility and returns. We create data -driven advertising campaigns that accurately target your ideal customers based on demographics, interests and behaviors. Our SMM experts will continuously monitor and adapt your campaigns for maximum efficiency and budget efficiency.",
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
      subsubtitle: "Influencer and Community Engagement",
      para: "Your customers want to hear from the people they trust. We connect your authentic brand with the correct affected and micropica effects to market your products or services. We help promote an active online community around your brand, encourage meaningful conversations and create long loading ties with your followers.",
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
      subsubtitle: "Analytics, Reporting & Performance Tracking",
      para: "We believe in openness and average results. With the detailed performance report, you will get information on how your social media marketing services are performing. From commitment and followers from development to advertising demonstrations and Roi Matrix, your report keeps you informed and strengthened to make strategic decisions.",
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
      question: " What are SMM Services?",
      answer:
        "See SMM services, small for social media marketing services, strategic use of online social network platforms to market a brand, product or service. These services include plans, construction and management of platforms such as Facebook, Instagram, Twitter (X), LinkedIn, Tiktok and others, which include brand awareness to raise awareness, increase traffic and generate potential customers or sales. Companies of all sizes use SMM services to contact the public, build trust and achieve the average increase through social channels.",
    },
    {
      question: "What Do Social Media Marketing Services Include?",
      answer:
        "Social media marketing services usually involve many tasks that help companies maintain a strong and active look on social platforms. Here they usually cover what: social media strategy construction, material construction and publication, profile adaptation, community management, payment advertising campaign, impressive marketing, results monitoring and analysis.",
    },
   {
  question: "What Does a Social Media Marketer Do?",
  answer: `A marketer in social media handles the plan, execution and monitoring of social media's appearance of a brand. Their main responsibility includes:
- Develop a material calendar and social campaign.
- Make and cure and cure the adjustment with tags.
- Management of daily positions in platforms.
- Associate with followers and respond to messages or feedback.
- To work with the affected or partners.

Their final goal is to increase the presence of a brand, engage and support business goals through targeted, creative and consistent social media.`
},

    {
      question: "What Are the 3 Steps in Social Media Marketing?",
      answer:
        `There are three important steps in a successful social media marketing process here:
        1. Research and Goal Settings: Define your goals (eg brand awareness, lead, sales) and understand your target audience, competitors and market trends.
        2. Strategy Development: Choose platforms, make material plans, set the CPI and determine the tone, style and themes of your brand message.
        3. Construction and planning material: Develop attractive ingredients plans, videos, infographic, wheel and a smooth post plan in channels.`,
    },
    {
      question: "Who Needs Social Media Marketing Services?",
      answer:
        `Almost every business can benefit from social media services, but they are particularly valuable:
        - Small and medium sized businesses that do not have their own marketing team.
        - Startups want to make brand awareness quickly.
        - E-commerce brands aim to market products and market sales online.
        - Local companies want to reach and connect to the surrounding audience.
        - Business companies that require frequent branding on many platforms.`,
    },
  ];
  return (
    <div>
      <Head>
        <title>Social Engine Marketing</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Social Media Marketing Services"
          bannersubtext="Do you struggle to get your brand to stand in a crowded digital room? In Zmedios Tech, we offer results -driven social media marketing services to increase your online appearance and combine yourself with your target groups as if never before. As a marketing agency on social media, our mission is easy to help your business grow rapidly, to help strengthen through smart and strong SMM strategies that engage in real commitment, lead and conversion."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Why Social Media Marketing is Essential for Business Growth"
          servicedesc1="Social media is no longer a place to connect - this is where consumers discover brands, make shopping decisions and share their experiences. Taking advantage of the right social media marketing services can unlock new opportunities for your business to reach the right audience at the right time with the right message."
          servicedesc2="Zmedios Tech helps you create reliability, create brand loyalty and maintain a strong digital appearance on platforms such as Facebook, Instagram, LinkedIn, Twitter and Tikok. Our Vipkin expert team develops intelligent campaigns that not only improves the following, but also converts them to loyal customers."
        />
       <Banner
  reverse={true}
  serviceimg="/assets/images/aboutusimg4.jpg"
  servicehead="Why Choose Us as Your Social Media Marketing Agency?"
  servicedesc1="Participation with Zmedios Tech means working with a results-oriented team that prefers your success. What is here that sets us apart:"
  servicedesc2={
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Experienced Team:</strong> Our certified social media experts bring creativity, analytical thinking and stage skills to each campaign.</li>
      <li><strong>Industry-specific strategies:</strong> We tailor our SMM services to match the industry's voices, trends and target groups.</li>
      <li><strong>Transparent procedures:</strong> You inform at each stage of clear communication and regular updates.</li>
      <li><strong>End-to-end services:</strong> From performances to execution we handle everything so you can focus on running your business.</li>
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
 <Faq  faqData={faqData}/>
      {/* <Work /> */}
      {/* <Section /> */}
      {/* <Enquiry /> */}
      {/* <Clients /> */}
      <Footer />
    </div>
  );
};

export default SmmAgency;
