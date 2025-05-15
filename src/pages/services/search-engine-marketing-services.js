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
const SemAgency = () => {
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
      para: "We provide a complete suite of SEM services that are built to scale as your business grows. Explore our core offerings: ",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      // maintitle: "Revitalize",
      subtitle: "Major Features of Our Search Engine Marketing Services",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: "Advanced Keyword Research & Targeting",
      para: "Each effective SEM campaign begins with solid keyword research. Our team does intensive analysis to identify the most profitable and high entantic keywords for your business. We only consider user behavior, search volume, competition and trends to target the keywords that convert. This helps us create campaigns that are laser -centered and cost -effective.",
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
      subsubtitle: "PPC Campaign Setup & Management",
      para: "Pay-per-click advertising is one of the most popular types under SEM. As a professional search engine marketing agency for search engines, we manage all aspects of your PPC campaigns - from the establishment of advertising groups to writing convincing advertising copies and configuring bid strategies and monitoring performance. Our regular monitoring and adjustment ensures that your ad remains competitive and your budget is used with care.",
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
      subsubtitle: "Landing Page Optimization",
      para: "Clicks mean nothing without conversions. That’s why we design or optimize landing pages that align along with your ad message and force visitors to do so. We use A/B trying out, clean CTAs, persuasive copy, and responsive layout to ensure high engagement and lead capture.",
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
      subsubtitle: "Ad Copywriting & Creative Strategy",
      para: "The correct words can make all differences. Our team of copywriters creates inspiring ads, highlights headlines and details that highlight your unique sales suggestions. We ensure that each advertising resonates with the audience and increases click prices (CTR).",
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
      subsubtitle: "Remarketing Campaigns",
      para: "Contact users who have already interacted with your site. Our remarketing strategies allow you to stay up to date and increase the possibility of conversions. We fragment the audience based on behavior and show sewn ads that encourage them to buy and complete the acquisition or probe.",
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
      subsubtitle: "In-Depth Analytics & Reporting",
      para: "Openness is the core of our search engine marketing services. With detailed monthly reports, performance dashboard and ROI tracking, you will always know how your campaigns are doing. We evaluate and improve larger matrices such as Cost-app-click (CPC), conversion frequency and withdrawal on AD expenses (ROAS).",
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
      question: "What Are Search Engine Marketing Services?",
      answer:
        "Search engine marketing services refers to a series of paid advertising strategies used to increase the visibility of a brand in search engine results. These services typically include management of the wage conclusion on platforms such as google advertising or bing ads to run targeted traffic on a commercial site. We handle everything from keyword research and advertising copying to budget management and performance optimization - with the aim of changing clicks with all customers and increasing the return rapidly.",
    },
    {
      question: "What’s the Difference Between SEM and SEO?",
     answer: `While both SEM and SEO aim to improve the visibility of a brand of search engines, they are different in how they get it:
- SEM (search engine marketing) uses ads paid to appear on top of the search engine results. It is aimed at instant visibility, fast lead generations and advanced target groups. 
- SEO (search engine optimization) includes organic strategies such as material construction, feedback building and website optimization that gradually improves ranking in unpaid discovery results. This is more than a long-term investment.
In Zmedios Tech, we recommend using SEM for immediate results and lead generations, while investing in SEO for permanent, long -term development.`,
    },
    {
      question: "What Is an Example of SEM?",
      answer: `An ideal example of SEM would be a Google advertising campaign for a local IT service company. Suppose a user searches for "I have the best support". Zemdios tech can create a very targeted advertisement that appears at the top of the results, promoting your IT services with a strong call for action such as "24/7 Tech Support today". Every time someone clicks on an ad, you pay a fee (payroll), but instant exposure and lead capacity can be important.`,
    },

    {
      question: "What Are SEM Strategies?",
      answer: `There are three important steps in a successful social media marketing process here:
        1. Searching for keyword research and targeting high-antagonator, and finds profitable keywords
        2. Advertisement Writing and Creative Design - Craftsmanship Messages that change.
        3. Urban strategy and budget management - maximize access by reducing costs.
        4. A/B -TEST - Test advertising variants to find the best artists.
        These strategies work together to ensure that you get a maximum return on advertising expenses and generate potential customers or sales continuously.`,
    },
    {
      question: "Why Is SEM Important in Marketing?",
      answer: `Search engine marketing plays a very vital role in digital marketing, as it enables businesses:
        - Now clear to-kharid customers, as they are seeking.
        - Drive immediate traffic for websites, products and services.
        - Get average results with clear performance measurements and ROI tracking.
        - Also competes effectively in saturated markets.
        - The goal of the specific audience based on location, behavior, demographics and interests.
        Our search engine marketing services are designed to help you find payments of all sizes for rapid growth and shy generation.`,
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
          bannertitle="Search Engine Marketing Services"
          bannersubtext="Are you searching for immediate traffic, lead and conversion for your business? A reliable search engine marketing agency Zmedios Tech offers the search engine marketing services designed to produce average results. Whether you are launching a new product, increasing your existing campaigns or entering a new market, your SEM services help you reach your ideal audiences quickly and more efficiently. With accurate targeting, data-driven decision-making and compelling AD strategies, we help you reach your marketing goals in a short time and with maximum effects"
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Why Choose Zmedios Tech for Search Engine Marketing Services?"
          servicedesc1="In Zmedios Tech we understand that any business is unique. This is why our search engines marketing services are tailor-made to match brand goals, budget and industry trends. As a complete search engine marketing agency, we manage all aspects of your paid search operations from keyword research and competitive analysis to advertising copywriting, BUD, A/B test and performance adaptation. With transparent reporting and continuous support, Zmedios Tech ensures that your investment in SEM provides long-term values."
          // servicedesc2="Zmedios Tech helps you create reliability, create brand loyalty and maintain a strong digital appearance on platforms such as Facebook, Instagram, LinkedIn, Twitter and Tikok. Our Vipkin expert team develops intelligent campaigns that not only improves the following, but also converts them to loyal customers."
        />
        <Banner
          reverse={true}
          serviceimg="/assets/images/aboutusimg4.jpg"
          servicehead="What Sets Our Search Engine Marketing Services Apart?"
          servicedesc1="We don't just run ads - we construct success stories. Our team links technical expertise, creative history and industry insight to the craft campaigns that improve competition. Here, Zmedios Tech makes a reliable partner for all your SEM service needs:"
          servicedesc2={
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Datodated strategy:</strong>We use analyzes and real -time data to shape a campaign strategy that brings into a more qualified management.
              </li>
              <li>
                <strong>Full treaty optimization:</strong> From consciousness to conversion, we adapt each touch point of the customer. This ensures that your opportunities go smoothly through the sales funnel.
              </li>
              <li>
                <strong>Converting-centered campaign: </strong>Our primary goal is to distribute higher ROIs by focusing on tasks that focus on this telephone conversation, form submission, registration and purchase.
              </li>
              <li>
                <strong>Multichannel SEM Performance:</strong>We are managing campaigns in Google advertising, Bing, YouTube and Google Display Network, and ensuring maximum brand visibility on all digital platforms.
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

export default SemAgency;
