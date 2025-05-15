import React from "react";
import Head from "next/head";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import Banner from "../../components/Services/DetailPage/Banner";
import Cards from "../../components/Services/DetailPage/Cards";
// import Technology from "../../components/Services/DetailPage/Technology";
import ComponentHead from "../../components/Common/ComponentHead";
import Process from "../../components/Services/DetailPage/Process";
import ProcessHead from "../../components/Services/DetailPage/ProcessHead";
// import Work from "../../components/Services/DetailPage/Work";
// import Enquiry from "../../components/Services/DetailPage/Enquiry";
// import Clients from "../../components/Home/Clients";
import Faq from "../../components/Services/DetailPage/Faq";
const WebsiteDevelopment = () => {
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
      //para: "Our modernization solutions revolutionize your applications' performance, scalability, agility, & maintainability. We enable seamless integration with emerging technologies, optimize infrastructure, & streamline workflows to ensure your applications are future-proof.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      //maintitle: "Revitalize",
      subtitle: "What Makes Our Website Development Services Stand Out?",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: " Custom-Built Solutions, Not Templates",
      para: "We do not believe in a size-pass-shaped solution. Your business is unique - and should also have your site. Our website development services are fully adapted to reflect the brand personality, goals and customers' expectations. From layout to functionality, each item is designed to match your business needs. This is the result of a more attractive and impressive user experience that takes action.",
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
      subsubtitle: "Mobile-Responsive and Cross-Device Compatibility",
      para: "More than 60% of online traffic comes from mobile devices. We make sure that each site we create is completely responsible and innocently appears on desktop machines, tablets and smartphones. With our web design service, visitors get a simple and easy experience, regardless of the equipment they use. A mobile-friendly website is now just a good-from-it is necessary for visibility, dedication and SEO ranking.",
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
      subsubtitle: "SEO-Optimized Structure for Better Visibility",
      para: "A beautiful site is useless if no one sees it. This is why our website development services are integrated with the best practice SEO from the ground. We use clean codes, quick loading pages, custom images and SEO techniques on site to ensure good ranking of our site on the engine. Our team works closely with SEO experts to create a solid base for your visibility online.",
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
      subsubtitle: "Fast Loading Speed and High Performance",
      para: "Slow websites remove users. A one -second delay in side load time can lead to a significant decline in conversions. Our developers make sure your site loads lightning fast, no matter how complicated it is. We use Modern Technologies, Performance Test Equipment and Material Delivery Network (CDN) to build strong, talented and user -friendly websites. Result? A smooth browser experience and low rejection frequency.",
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
      subsubtitle: "Scalable Architecture for Future Growth",
      para: "Your business will grow - and your site will grow with it. Our website development services are designed for scalability. Whether you are planning to add multiple pages, introduce e-commerce functions or expand the global audience, we make sure your site is ready. With modular design principles and flexible architecture, we are future protection of your digital appearance, which saves you time and money in a long time.",
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
      subsubtitle: "Easy-to-Manage CMS Integration",
      para: "Do you want to update your content every time without relying on a developer? We integrate you to give you complete control to user -friendly material management systems (CMS) such as WordPress, Shopify or Custom Solutions. Our site creation service gives you the right to edit, publish blogs, connect products and easily manage updates - no coding is required.",
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
      question: "What are web development services?",
      answer:
        "Web development services include the creation, design, development and maintenance of websites for companies or individuals. This includes everything from writing codes for the composition and visual design (web design), writing codes for the construction of front-end and back-end development, adaptation for performance and ensuring compatibility across devices for SEOs. The goal is to create a website that is visually attractive, user -friendly, faster and combined with the business goals of the brand.",
    },
    {
      question: "What are 3 types of web development?",
      answer:
        `The three main types of website development are:
        1. Front-end development:The site focuses on the visual part of the site that interacts with users, including design, setup and user interface, which uses HTML, CSS, JavaScript, etc.
        2. Back-end Development: Server page of a website, such as database, server and application logic. This ensures that everything behind the curtain works.
        3. Full-Stack Development: Connects both front-end and back-end development. A full-stack developer can create both clients and servers of a website.`,
    },
    {
      question: "How much do you pay someone to design a website?",
      answer:
        
        `The cost of designing the site varies on complexity, features and the basis for renting. on average:
        - The cost of an original website can cost between $ 500 to $ 2000.
        - A business site with custom design and features can range from $ 2000 to $ 10,000.
        - The cost of a complex e-commerce or website can cost $ 10,000 to $ 50,000+.
        Freelancer can charge per hour (eg $ 25-$ 150/h), while agencies can offer a fixed package based on the radius.`,
    },
    {
      question: "How does a mobile-responsive website benefit your business?",
      answer:
        `A mobile response website originally adapted to different screen sizes, including smartphones and tablets. This increases the user experience, improves the SEO ranking (since Google prioritizes mobile-first sequencing), and improves the conversion frequencies for users to navigate and interact with their site on all devices. With more than half of the global internet traffic coming from mobile users, mobile managers are successful.`,
    },
    {
      question: "Why is SEO integration important in website development services?",
      answer:
        "SEO integration ensures that your site can be detected by search engines like Google. By optimizing the composition, speed, metadata and content of your site, SEO integration runs organic traffic, improves visibility and increases the possibility of ranking in the search results. When done in mind SEO, a website becomes more competitive online - to attract more visitors without paid ads.",
    },
  ];
  return (
    <div>
      <Head>
        <title>Website Development Services</title>
      </Head>
      <Header />
      <div
  className="bg-right"
  style={{
    backgroundImage: 'url("/assets/images/mainbackground.png")',
  }}
>
  <Banner
    bannertitle="Website Development Services"
    bannersubtext="Your site is the digital identity of your business - the first impression you make in the electronic world. Whether you are a start-up, a medium -sized company, or an enterprise, the importance of having a strong, visually fantastic and user -friendly website cannot be exaggerated. That’s where our website development services come in. We not only create websites - we develop online experiences that change. By combining innovative design strategies, powerful backend development and smart marketing integration, we offer the entire website development services that help your brand stand out and succeed quickly."
    serviceimg="/assets/images/aboutusimg3.png"
    servicehead="Why a Professional Website Matters More Than Ever"
    servicedesc1="In a world where customers do online research and act before making any decision, your site often becomes the most powerful marketing tool for you. A professional website establishes reliability, creates confidence and acts as a digital store for your business. It represents your brand, communicates your value and acts as a sales representative 24/7."
    servicedesc2="Without a well-structured, professionally designed website, you risk losing potential customers who have invested in their online appearance. With our website construction service, we make sure your business is not just - it leads."
  />

  <Banner
    className="mt-12"
    reverse={true}
    serviceimg="/assets/images/aboutusimg4.jpg"
    servicehead="End-to-End Web Designing Services"
    servicedesc1="The design is more than aesthetics - it's about function, emotions and dedication. Our web design service focuses on creating visually fantastic interfaces that provide memorable user experience.We follow a smooth, step-by-step process to ensure every project is delivered on time, within budget, and above expectations.We follow a smooth, step-by-step process to ensure every project is delivered on time, within budget, and above expectations."
    servicedesc2={
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Discovery & Strategy:</strong> We learn about your
          business, target audience, and objectives.
        </li>
        <li>
          <strong>Wireframing & Design:</strong> Our team creates
          wireframes and visual mockups for approval.
        </li>
        <li>
          <strong>Development & Integration :</strong> We turn approved
          designs into a fully functional website.
        </li>
        <li>
          <strong>Testing & Optimization:</strong> Rigorous quality checks
          to ensure speed, responsiveness, and security.
        </li>
         <li>
          <strong>Launch & Support:</strong>We go live and continue to offer post-launch maintenance and support.
        </li>
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
        <div
          className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}
        ></div>
      </div>

      {/* <Work /> */}
      {/* <Section /> */}
      <Faq faqData={faqData} />
      {/* <Enquiry /> */}

      {/* <Clients /> */}
      <Footer />
    </div>
  );
};
export default WebsiteDevelopment;
