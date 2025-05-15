import React from "react";
import Head from "next/head";
import Footer from '../../components/Common/Footer';
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
import Faq from "../../components/Services/DetailPage/Faq";
const SeoAgency = () => {
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
      //para: "Our modernization solutions revolutionize your applications' performance, scalability, agility, & maintainability. We enable seamless integration with emerging technologies, optimize infrastructure, & streamline workflows to ensure your applications are future-proof.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      //maintitle: "Revitalize",
      subtitle: "What Sets Zmedios Tech Apart as Your SEO Partner?",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
       subsubtitle: "Tailored SEO Strategies for Maximum Results",
      para: "We do not believe in a form-pass. Your business is unique - and your SEO should also have a strategy. Our search engine optimization services begin with your site, the target audience and intensive competition analysis.From there, we develop a customized SEO scheme that matches your goals and budget. Whether you are aiming for local or global visibility, we are building a roadmap that produces real, long -lasting results. Our budget-friendly SEO services correspond to businesses of all sizes without compromising on quality or efficiency.",
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
       subsubtitle: "On-Page Optimization That Speaks Google’s Language",
      para: "We customize each item on your website - from meta codes and titles to internal links and keyword placements. With our SEO expert on the site, we make sure your site explicitly communicates with the search engine and increases the user experience.By adjusting the material structure and code with Google's ranking algorithms, we make sure your site has any chance to reach page one. Our SEO agency focuses on both technical and material-operated improvement on the site, making your site the best in both worlds.",
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
       subsubtitle: "Off-Page SEO to Build Authority and Trust",
      para: "The right to your site means something. Our search engine optimization services include strategic coupling construction, citation production and brand reviews to promote the site's reliability. High -quality backlink search from relevant sources tells the engine that your content is reliable.We use a morally and effective off-pion strategy that increases your domain authority over time. Our cheap SEO services are designed to ensure permanent development, not just short-term spikes.",
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
       subsubtitle: "Keyword Research That Drives Targeted Traffic",
      para: "It all starts with the right keywords. We do detailed keyword research to find the most relevant and highly priceless keywords for your business. Our approach balances the search volume, competition and the user with the intention of targeting the keywords that actually add value.When you understand how your customers find, we keep your site in position to meet the exact need. Whether you are in a niche industry or in a competitive market, our SEO agency knows how to target the conditions that matter most.",
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
       subsubtitle: "Content That Engages, Educates, and Converts",
      para: "SEO is more than technical tweaks — it’s also about high-quality content. Our team is a craftsman, keyword-rich material that not only improves search ranging, but also resonates with the audience. We develop blog posts, landing pages and online materials that educate users and lead them to action. With Zmedios tech discovery search engine optimization services, your brand becomes a reliable source of information, building authority and trust in each point of touch.",
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
       subsubtitle: "Real-Time Analytics and Transparent Reporting",
      para: "What's good if you can't track results? In Zmedios Tech, we believe in openness and computer -driven decisions. Our customers receive regular performance reports that break traffic, key order, user behavior and conversion matrix. We use powerful analysis tools to fix our strategies and show you how our investments in our cheap SEO services pay. With us you have never left in the dark",
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
      question: "What are Search Engine Optimization Services?",
      answer:
        "Search engines optimization services are a set of strategies and techniques used to improve the visibility of the site on search engines such as Google, Bing and Yahoo. The goal is to help your site achieve high rankings in the search engine results for relevant keywords, so you can draw more organic traffic. We offer the best SEO services to ensure that the business of all sizes can benefit from increased visibility and traffic.",
    },
    {
      question: "What are digital marketing strategies?",
      answer:
        "A digital marketing strategy outlines how a company will realize its marketing goals through online channels. It includes defining the target audience, choosing the best platforms (e.g., Google, Facebook, LinkedIn), and crafting effective messages to reach customers.",
    },
    {
      question: "Is digital marketing service worth it for small businesses?",
      answer:
        "Yes, digital marketing is extremely beneficial for small businesses. It allows them to compete with larger competitors using cost-effective, targeted strategies such as local SEO, social media ads, and email campaigns.",
    },
    {
      question: "What are the 4 major types of digital marketing?",
      answer:
        "Four main types of digital marketing include:\n\n• SEO - improving your site’s ranking to attract organic traffic.\n• PPC - running paid ads on platforms like Google or Facebook.\n• Content Marketing - creating blogs, videos, or infographics.\n• Social Media Marketing - using platforms like Instagram or LinkedIn to build relationships.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "It depends. PPC and social media ads can yield quick results, while SEO and content strategies may take 3–6 months. A mix of short- and long-term approaches is ideal for sustainable growth.",
    },
  ];
  return (
    <div>
      <Head>
        <title>Search Engine Optimization</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Search Engine Optimization Services"
          bannersubtext="Each brand wants visibility, but not all brands are found. This is the place where Zemdio's tech comes from. We specialize in search engine optimization services, which do not take into account your site - they really drive traffic, real lead and real development. If you are looking for affordable SEO services that do not cut the corners and give the average result, you are in the right place. As a reliable SEO agency, we bring your digital -looking life without blowing your marketing budget by marketing your ranking and maximizing your return."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Why SEO is the Backbone of Online Success"
          servicedesc1="Search engines are the first points for most online experiences. When your viewers seek services or products provided by you, your site should be the first thing they find. This discovery is the power of search engine optimization services. But it's not just about high ranking - it's about attracting the right visitors who convert to loyal customers."
          servicedesc2="With billions of daily discoveries, ignoring SEO means losing valuable occasions. A solid SEO strategy ensures long -term visibility online and helps your business stay in front of the basket. In Zmedios Tech, we make sure your business is not just participating - it dominates."
        />
         <Banner
  reverse={true} // <-- This flips the layout
  serviceimg="/assets/images/aboutusimg4.jpg"
  servicehead="Affordable SEO Services That Fit Every Budget"
  servicedesc1="The big SEO does not have to break the bank. We believe that any business - no matter how large or small it is - is eligible for quality search engine optimization services. Our affordable SEO services are designed to be cost-effective, flexible and the result."
  servicedesc2="We offer more pricing packages to suit your unique needs. Whether you need a full-scale SEO campaign or just a monthly tune-up, we make professional adaptation available without compromising on quality."
/>

      </div>
      <Cards card={cards} />
      {/* <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Technology"
          sub="Search Engine Optimization"
          head="The technology stack for Search Engine Optimization can vary depending on the specific requirements of the application and the chosen modernization approach."
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
        <div className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}></div>
      </div>

      {/* <Work /> */}
      {/* <Section /> */}
       <Faq  faqData={faqData}/>
      {/* <Enquiry /> */}
        
      {/* <Clients /> */}
      <Footer />
    </div>
  );
};

export default SeoAgency;