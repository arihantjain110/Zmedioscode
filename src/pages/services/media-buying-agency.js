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
const MediaBuying = () => {
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
      subtitle: "Our Approach to Media Buying and Planning",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: "Audience Research & Persona Mapping",
      para: "We begin to understand the audience - who they are, what they like, how they use media and where they spend their time. This allows us to design campaigns that talk directly to your potential customers. We create detailed target groups based on demographics, psychology and behavioral patterns. This insight helps us to coordinate campaign messages that really resonate with your buyers.",
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
      subsubtitle: "Media Mix Strategy Development",
      para: "Using target market insights and market traits, we select a media mix that balances attain, frequency, and fee. Whether it’s programmatic advertisements, social media, TV spots, or show banners, we make certain that the proper channels are selected for effect. The method additionally considers seasonality, product lifecycle, and target market media habits for maximum traction. This guarantees campaigns are not simply seen—they invent lasting impressions.",
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
      subsubtitle: "Budget Optimization",
      para: "We don’t simply spend—we spend cleverly. Our media buying and planning team allocates your price range throughout channels based totally on projected performance, target market concentration, and bidding possibilities to generate maximum fee. We use predictive modeling and campaign simulations to decide in which your money will work hardest. Our approach ensures that low-performing channels are trimmed, at the same time as excessive-performing structures get bolstered.",
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
      subsubtitle: "Real-Time Monitoring and Optimization",
      para: "With CTR, conversion and involvement significantly, the campaign performance when using CPI is continuously detected using CPI. As a media buying agency, it allows us to quickly bring us to position - to identify what works and what doesn't. We integrate an AI-controlled tracking tool to collect live performance data from each channel in use. This enables us to customize real -time ads, adjust advertising placements or adjust the fine -tuning dialect strategies when we leave.",
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
      subsubtitle: "Transparent Reporting and Insights",
      para: "We offer normal performance reviews that spotlight results, insights, and pointers. You’ll usually know where your finances are going and how your campaigns are performing. Our reports include metrics including value-in line with-click (CPC), go back on advert spend (ROAS), engagement quotes, and greater—provided in an easy, smooth-to-digest layout.",
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
      subsubtitle: "Continuous Innovation and Trend Adaptation",
      para: "Media landscapes are developing rapidly. We stay ahead by incorporating the latest techniques, trends and media platforms - the sensor of your brand never comes behind. We customize your campaigns by keeping our brand visible and relevant to coordinating consumer behavior and algorithm updates. Innovation is not an alternative - this is our baseline for exceptional media buying and planning services.",
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
      question: "What is media buying and planning?",
      answer:
        "Media buying and planning is the strategic process of identifying, selecting, and buying ad space on diverse structures—which includes TV, radio, digital, social media, or print—to attain an audience efficiently. Media making plans involves determining where, whilst, and a way to put it on the market to get the nice results. Media buying is the execution phase, in which the advert area is bought based totally on the plan.",
    },
    {
      question: "What are media planning and buying agencies?",
      answer: `Media buying and planning agencies are specialised advertising firms that help organizations layout and execute advertising strategies throughout diverse channels. These organizations examine audience facts, perceive the best media platforms, negotiate ad placements, and optimize campaigns for optimum ROI. An expert media buying enterprise uses conventional and virtual tools to make sure that campaigns are not handiest properly-located but additionally records-pushed and result-oriented.`,
    },
    {
      question: "What is an example of media planning?",
      answer: `An instance of media planning may be a fashion e-trade logo launching a seasonal collection. The media planning manner may be focused on ladies elderly 18-35, deciding on Instagram, Google Display Network, and style blogs as primary systems, and scheduling ads to run  weeks before the launch. The plan could also define finances allocation in line with channel, content material formats, and expected KPIs along with clicks, conversions, and engagement costs.`,
    },

    {
      question: "How can media buying services improve my advertising ROI?",
      answer: `By taking advantage of audience data, strategic media plans and cost-graduated advertising placements, media buying services help companies to get better visibility and commitment to less money. These services ensure that your ads reach high intention users, reduce waste and increase the conversion route to a strong investment withdrawal.`,
    },
    {
      question: "Why should I choose a media buying agency over handling it in-house?",
      answer: `Working with a media buying agency provides access to industry experts, exclusive media stock, advanced equipment and customized strategies that are difficult to match at home. Agencies bring market experience, interaction power and a data-first approach that saves time, cuts costs and provides better promotional results.`,
    },
  ];
  return (
    <div>
      <Head>
        <title>Media Buying and Planning Services</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Media Buying and Planning Services"
          bannersubtext="Driving brand visibility and engagement today requires more than just catchy creatives—it demands a strategic and data-backed approach. This is where media buying and planning plays an important role. Whether you dominate the mixture of digital platforms, traditional media or both, effective media buying and planning ensures your ads reach the right audience, on the right platform and at the right cost at the right price. Partnership with a skilled media buying agency can increase your marketing efforts and distribute a strong ROI."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="What is Media Buying and Planning?"
          servicedesc1="Media planning includes identifying the best platforms, channels, time and formats for running advertising campaigns. It's about creating strategy - defining your target groups, choosing the most effective media channels and handling the budget with care."
          servicedesc2="On the other hand, buying the media is the execution phase. This involves interacting with ad placements, buying advertising rooms, managing tender strategies (especially in programmatic ads) and monitoring performance to ensure your ads achieve desired results. Together, media buying and planning ensure that all money spent on your advertising efforts provide maximum value."
        />
        <Banner
          reverse={true}
          serviceimg="/assets/images/aboutusimg4.jpg"
          servicehead="Why Businesses Trust Zmedios Tech for Media Buying and Planning"
          servicedesc1="In Zmedios Tech, we specialize in helping companies grow faster by combining IT consultation, marketing of innovation and power of smart staffing solutions. As part of our marketing services, our media buying and planning services are in line with your industry, your budget and promotional goals. We take a holistic approach and combine traditional and digital media strategies to ensure maximum exposure and performance -driven results."
          servicedesc2="Our expert group uses market research, behavioral analysis, media trends and monitoring results, which monitors to create a strategic road map that improves your messages and gives the result of the average. As a largest media buying agency, we make sure that if you are a start -up that wants to break in the market or the target of an established brand for frequent visibility, we provide a customized and scalable approach that adapts your brand to grow."
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

export default MediaBuying;
