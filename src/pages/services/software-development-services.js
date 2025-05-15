import React from "react";
import Head from "next/head";
import Footer from '../../components/Common/Footer';
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

const SoftwareDevelopmentCompany = () => {
  const processes = [
    {
      id: "1",
      name: "SEO Services",
      desc: "Our expert SEO services help improve the search for your site, improve organic traffic and increase credibility online. With analogue strategies and proven techniques, we ensure that your business is in a competing digital scenario. Customize your site for high conversions and permanent development",
    },
    {
      id: "2",
      name: "Media Buying and Planning",
      desc: "Maximize your advertising expenses with strategic media procurement and plan. We identify the best platforms, target groups and time to secure our campaigns to provide high returns and strong brand access.",
    },
    {
      id: "3",
      name: "PR Services",
      desc: "Our PR services craft compelling narratives to enhance your brand’s credibility and visibility. We specialize in media relations, crisis management, and influencer partnerships to amplify your message. Trust our expertise to shape public perception and drive meaningful engagement for your business.",
    },
    {
      id: "4",
      name: "SEM Services (Search Engine Marketing)",
      desc: "Get instant visibility and qualified traffic through smart SEM campaigns. We manage targeted paid ads that appear when your customers actively seek - result in several potential customers and conversions.",
    },
    {
      id: "5",
      name: "SMM Services",
      desc: "Our experts promote the electronic look of your brand with Social Media Marketing (SMM) services. We developed a strategy to improve commitment, develop followers and run conversions on platforms such as Facebook, Instagram, LinkedIn and more",
    },
    // {
    //   id: "6",
    //   name: "Replacement or Rebuilding",
    //   desc: "In some cases, it may be more feasible to replace an existing application with a new solution rather than attempting to modernize it. This approach involves rebuilding the application from scratch, leveraging modern technologies and design principles.",
    // },
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
    
    subtitle: "Our Software Development Services",
    // subsubtitle: "Precision Planning with Data Insights",
   //para: "Our application modernization services are designed to power virtual transformation whilst minimizing operational risks and charges. We examine your current structures, recognize your commercial enterprise targets, and deliver custom designed answers that offer tangible consequences.",
    bgcolor: "bg-[#fff]",
    cols: "md:col-span-2",
    textcolor: "text-secondary",
    display: "hidden",
  },

    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
       subsubtitle: "Custom Software Development",
      para: "Our custom software development services are looking for sight solutions to meet their specific operating requirements. We analyze your commercial challenges and create software that improves productivity, automate features and provides a spontaneous user experience. From concept to distribution, our team ensures that your software is in line with your workflow and goals.",
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
       subsubtitle: "Web Application Development",
      para: "We design and develop safe, scalable and high performance web applications by using the latest frameworks and technologies. Our web applications are ready to offer spontaneous functionality, which ensures a smooth experience for users who support professional operations with advanced features and integration.",
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
       subsubtitle: "Mobile App Development",
      para: "Our application programming service specializes in creating innovative mobile applications for both iOS and Android platforms. Whether it is a native or across the platform app, we focus on creating attractive, user-friendly applications with an intuitive interface and powerful backend system to operate business growth.",
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
       subsubtitle: "Enterprise Software Solutions",
      para: "For companies that require large software services, we offer applications for business quality that scale-down, improve collaboration and improve general efficiency. Our team ensures scalable, safe and executive software to fit complex business requirements.",
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
       subsubtitle: "Cloud-Based Software Development",
      para: "We help businesses transition to the cloud with our cloud-based software services. Whether it's SaaS, PaaS, or IaaS, we develop and integrate cloud applications that offer enhanced security, real-time collaboration, and high availability while reducing IT infrastructure costs.",
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
       subsubtitle: "Software Maintenance & Support",
      para: "Our commitment does not end with distribution. We offer software updates, secure and ongoing maintenance and software support services to be free from screen problems. From bug fixes to function, we are constantly improving for an optimal user experience.",
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
      question: "What do you mean by software services?",
      answer:
        "Software services refer to a wide range of solutions that help develop, maintain businesses, maintain and customize software applications. These services include software development, testing, distribution, maintenance and upgrades to ensure seamless functionality. Whether creating new applications or increasing existing people, software services are necessary for companies to be competitive and innovative. ",
    },
    {
      question: "What is an example of software development?",
      answer:
        "An example of software development is the construction of a CRM system (Customer Relationship Management (CRM) that helps businesses handle interactions with customers. Other examples include mobile apps, business software, cloud -based applications and AI -powered solutions. Customizing software development.",
    },
    {
      question: "What is the main purpose of software development?",
      answer:
      `The most important goal of software development is to create packages that remedy commercial enterprise troubles, enhance performance and boom the consumer experience. This permits companies to automate duties, clean operations and stay competitive within the virtual international. Whether it's a web utility, mobile app or enterprise gadget, software development performs an essential position in commercial enterprise boom and innovation.`,
    },
    {
      question: "Who needs software development services?",
      answer:
        "Various industries including health care, finance, retail and education require software development services to increase operations. Start-up, companies and public organizations invest in adapted software development to improve productivity, security and customer experience. Whether you need a web app, mobile solution or business system, a software development company can help create a tailor made solution to meet your needs.",
    },
    {
      question: "What are requirements in software development?",
      answer:
        "Software development requires a well-defined set of requirements, including business goals, user needs, functionality and technical specifications. A successful development process includes overall, design of architecture, coding, testing and distribution of solutions. Adapted software design service ensures that the final product matches commercial goals and provides the desired performance and scalability.",
    },
   
  ];

  return (
    <div>
      <Head>
        <title>Software Development Services</title>
      </Head>
      <Header />
    <div
  className="bg-right"
  style={{
    backgroundImage: 'url("/assets/images/mainbackground.png")',
  }}
>
  <div className="max-w-7xl mx-auto px-6 py-12 text-black text-center">
    {/* H1 Heading */}
    <h1 className="text-4xl font-bold mb-3">
     Software Development Services
    </h1>

   {/* Yellow Animated Underline */}
<div className="flex justify-center mb-6">
  <div className="flex space-x-2 animate-underline">
    <div className="w-6 h-1 bg-yellow-500 rounded-full"></div>
    <div className="w-4 h-1 bg-yellow-500 rounded-full"></div>
    <div className="w-3 h-1 bg-yellow-500 rounded-full"></div>
  </div>
</div>


   {/* Subtitle */}
<p className="text-lg mb-12 text-gray-500 max-w-4xl mx-auto text-center">
  At a time when technological progress determines the management of the market, it is important for companies to eliminate competition with a large software development company. Our growing software development services are accurately designed to solve your unique commercial challenges, not only operational efficiency, but also a significant competitive advantage.By integrating custom software design into your strategic plan, you quickly adapt your business to change the market and develop customer requirements. 
</p>


{/* Image and Right Text Section */}
<div className="flex flex-col md:flex-row items-center gap-10 text-left">
  <img
    src="/assets/images/aboutusimg3.png"
    alt="Modernization"
    className="w-full max-w-md object-cover rounded-md shadow"
  />
  <div>
    <h2 className="text-2xl font-semibold mb-4">
      Empowering Businesses With Smart Software Solutions
    </h2>
    <p className="mb-4 text-gray-500">
      Right software development services are important to stay in advance. Custom software performs performance, automates techniques and provides tailor -made solutions that are fully in line with business dreams. Whether it is a web application, business system or mobile app, we provide the solutions from other companies the best software development services, designed for performance and scalability.
    </p>
    <p className="text-gray-500">
      With customized software programming solutions, companies can overcome unique challenges and adapt the operation like never before. From spontaneous integration to advanced safety facilities, our expert developers develop new solutions that increase productivity and user experience.
    </p>
  </div>
</div>

{/* Image on Right, Content on Left */}
<div className="flex flex-col md:flex-row-reverse items-center gap-10 text-left mt-16">
<img
  src="/assets/images/aboutusimg4.jpg"
  alt="Digital Marketing Services"
  className="w-full max-w-md h-[400px] object-cover rounded-md shadow"
/>


 <div className="w-full md:w-3/4 lg:w-2/3 mx-auto text-left px-4 md:px-0">
  <h2 className="text-2xl font-semibold mb-4">
    Why Invest in Software Development?
  </h2>
  <p className="mb-6 text-gray-500 text-base leading-relaxed">
   Investment in scalable software solutions is a game change for companies aimed at maximizing efficiency and competition. This is how our software development services can help:
  </p>
  <ul className="list-disc pl-6 text-gray-500 leading-relaxed space-y-2">
    <li>
      <strong>Increased business efficiency:</strong>automate processes, reduces manual efforts and improves productivity with customized software service.
    </li>
    <li>
      <strong>Scalability and adaptability:</strong> promoted evidence with your business with software developing with your growing needs.
    </li>
    <li>
      <strong>Competitive advantage:</strong> Stay in front of participants with innovative solutions that fit your industry.

    </li>
    <li>
      <strong>Seamless User Experience:</strong> Provide impulsive user experience support, user-friendly application that improves customers' satisfaction and commitment.
       </li>
     <li>
      <strong>Data security and compliance:</strong>make sure your business data is protected with secure, obedient software solutions.

    </li>
    
  </ul>
</div>

</div>

  </div>
</div>


      <Cards card={cards} />
      {/* <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Technology"
          sub="Digital Marketing"
          head="The technology stack for Digital Marketing can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processsub="Other Services"
              processdesc="Your business just requires more than an online look - it requires a powerful strategy to stand out and fast scale. In Zmedios Tech, we offer groundbreaking digital marketing services that are ready to speed up developments, generate quality lines and improve the brand. Whether you are a start -up or a growing business, our customized digital marketing strategy ensures that you are ahead of the competition. From SEO and PPC to social media and e -mail marketing, we help you reach the right audience with the right message, especially when it comes to digital marketing services for small businesses who want to expand their footsteps"
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

export default SoftwareDevelopmentCompany;