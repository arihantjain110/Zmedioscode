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
const PrAgency = () => {
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
      para: "We offer a wide range of PR services that fit your industry, business goals and specific target groups. Our team blends modern digital innovation with the time testing of traditional PR techniques to provide average, long-term effects of the average. As a reliable PR agency, we help companies prepare history, visible visibility and create meaningful commitment with our target markets. ",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      //maintitle: "Revitalize",
      subtitle: "Our Core PR Services to Boost Your Business",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
       subsubtitle: "Media Relations and Public Coverage",
      para: "One of the most powerful methods for creating credibility is through strategic media exposure. As your dedicated PR agency, we ensure impressive publications in top -level publications, popular blogs, broadcasting platforms and digital news sites. Our team shows the compelling stories and angles of the craft showing the value offered to your brand, and ensures that the right message reaches the right audience.",
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
      icon: "06",
      title: "New Growth Possibilities",
       subsubtitle: "Crisis Communication Management",
      para: "In the world of rapid book activities, reputation can be critical-and how you react to challenges make all the differences. Our PR services include extensive crisis communication management that prepares your brand for unexpected situations. We offer pre -planned communication strategies to guide our team in difficult times, and ensure that the messages remain clear, timely and consistent.",
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
      icon: "02",
      title: "Cost Optimization",
       subsubtitle: "Influencer and Thought Leadership Campaigns",
      para: "Establishment of authority in your industry requires only more than visibility - this requires effects. As a forward-looking public relation agency, we develop and carry out the campaign that considers the leaders of your company as a respected voice in the region. Our impressive partnership is carefully chosen to match the public and market, ensuring that your mind leads to leadership efforts increasing the commitment and the market recognition of the brand.",
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
      icon: "03",
      title: "Better Security",
       subsubtitle: " Event Publicity and Brand Launches",
      para: "Events are strong PR services tools when used properly. Whether it is a product launch, brand activation or a milestone in companies, we offer end-to-end support before, during and after the program. As your reliable PR agency, we develop strategic campaigns that run attention and media coverage for your event, and reach your media professionals and your target customers.",
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
      icon: "04",
      title: "Improved CX",
       subsubtitle: "Content Creation and Public Materials",
      para: "The basis of every super PR campaign is strong, strategic content material. Our team focuses on developing excessive-effect public relations services, media kits, weblog articles, govt bios, and speeches that mirror your brand voice and business targets. As a full-carrier public relation business enterprise, we make certain your content tells a constant and compelling tale throughout all systems.",
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
      icon: "05",
      title: "Better Business Performance",
       subsubtitle: "Digital PR and Online Reputation Management",
      para: "In today's digital environment, your online reputation plays an important role in the formulation of public opinion. Our PR services include strong digital PR strategies that increase the presence of your brand online. We help you earn high-quality feedback from reliable sources, improve your exploration visibility and optimize your brand for better SEO results.",
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
      question: "What is a PR Agency?",
      answer:
        "A PR agency (PR agency) is a company that helps companies, brands or individuals to manage their public image and communication. It focuses on having a positive relationship with media, customers and stakeholders through strategic history, public coverage, events and reputation management.",
    },
    {
      question: "Who Needs a PR Agency?",
      answer:
        "Any business or professional to create visibility, reliability and trust can benefit from a PR agency. Start-ups, companies, public figures, not -profit and even technical companies often require PR services to launch products, manage media, manage crises or shape public opinion.",
    },
    {
      question: "What Does a PR Agency Do?",
      answer:
        "A PR agency handles everything from media relationships, and affects the affected person for crisis communication, phenoma prevention and thought management. The goal is to create UPS hypnotic stories that earn attention, form brands reputation and support business development through strategic communication.",
    },
    {
      question: "How to Hire a PR Agency?",
      answer:
        "Start by identifying your goals - whether it is receiving media coverage, improving reputation online or starting a product. Research agencies with experience in your industry, undergo their previous work and plan consultation to find someone who matches your vision, budget and communication style.",
    },
    {
      question: "Is a PR Agency Worth It?",
      answer:
        "Yes - if you look seriously at the construction of the branding authority, when the wide audience is competitive. Good PR Agency services provide expertise for strategic insights, media connections and storytelling that are translated into actual business results such as trust, visibility and long -term development.",
    },
  ];
  return (
    <div>
      <Head>
        <title>Results-Driven PR Agency That Builds Public Trust</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Results-Driven PR Agency That Builds Public Trust"
          bannersubtext="The creation of a brand that resonated, adds and leads to today's competitive market, not just about having a good product or service - it's about visibility, credibility and strategic communication. That’s where our PR agency steps in. We’re not just another public relation agency-we are your growth partner, who combine IT consultation, marketing strategies and filling of staffing services to perform measured results through minable PR services.We understand that it is a story to tell in any business. Whether you are launching a new product, entering a new market, or just need to make a discussion about your brand, our customized PR strategies are designed to lift your brand image and create self -confidence with the audience - all in a short time."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Why Partner with Our PR Agency?"
          servicedesc1="Our approach to PR services is unique and impressive. We not only work on public relations - we form relationships, shape stories and create opportunities that keep your brand exactly where it should be: in front of your ideal audience.Here’s what sets our public relation agency apart:"
          servicedesc2={
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Integrated services: </strong> In-house it, with marketing and staffing skills, we bring a comprehensive approach to PR.</li>
      <li><strong>Data-spice fighter campaign:</strong>We benefit from analyzes to create smart, result-out-oriented PR strategies.</li>
      <li><strong>Speed ​​and skills:</strong> In the quickly moving world, our team gives right -wing campaigns without compromising on the quality.</li>
      <li><strong>Global Media Network: </strong> We connect to journalists, affected at the top level and platforms in industries.</li>
    </ul>
          }
        />
         <Banner
  reverse={true} // <-- This flips the layout
  serviceimg="/assets/images/aboutusimg4.jpg"
  servicehead="What Makes Our Public Relation Agency Unique?"
  servicedesc1="We cross beyond conventional PR. As a commercial enterprise rooted in IT consulting, advertising, and staffing, we apprehend the complex desires of modern-day enterprises. This lets us create PR offerings which might be aligned with your virtual transformation desires, operational needs, and target audience engagement techniques."
   servicedesc2={
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Tech-Enabled PR Campaigns: </strong>Real-time computer tracking and audience analysis.
</li>
      <li><strong>Expertise across departments: </strong> Collaboration in marketing, IT and branding.
</li>
      <li><strong>Industry-specific solutions:</strong>Whether you are in technology, health care, retail or finance, we are a tailor-made campaign in your niche.</li>
      
    </ul>
          }
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
export default PrAgency;