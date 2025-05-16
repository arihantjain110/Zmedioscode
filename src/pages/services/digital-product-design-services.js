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

const ProductDdesignCompany = () => {
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
    
    subtitle: "All the Digital Product Design Services We Provide",
    // subsubtitle: "Precision Planning with Data Insights",
   para: "Our services cover the full range of digital product design, which helps companies scale quickly and strategically. From thought verification to final distribution, we take care of each step to secure the success of your product.",
    bgcolor: "bg-[#fff]",
    cols: "md:col-span-2",
    textcolor: "text-secondary",
    display: "hidden",
  },

    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
       subsubtitle: "Product Strategy & Discovery",
      para: "Our journey begins with your business goals, market dynamics and understanding of end users. We conduct a depth search, competitive analysis and user research to shape the product's road maps that match our goals. This phase determines a strong base for the design process and ensures that we solve the right problem correctly.",
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
       subsubtitle: "User Experience (UX) Design",
      para: "User experience is the origin of any successful digital product. We focus on how users are comfortable, functional and effective in creating a spontaneous flow with your product. Our UX experts map user trips, wireframe and interaction patterns to maximize the user's satisfaction and purpose.",
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
       subsubtitle: "User Interface (UI) Design",
      para: "When UX is in place, our UI designs the stage to live. We create beautiful, responsible and consistent design interfaces that reflect your brand identity and improve the user's busy. Our team ensures that each item on the screen provides a goal and contributes to a visually wonderful and meaningful experience.",
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
       subsubtitle: "Prototyping & Testing",
      para: "We often believe in doing faster and testing. As a reliable digital product design agency, we create interactive prototypes that allow you to imagine and test your product before growing development. Through user testing and response, we save time and delimit user satisfaction.",
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
       subsubtitle: "Design-to-Development Handoff",
      para: "We work carefully with developers to ensure a casual transition from design to implementation. Each item is documented and distributed with accuracy, so nothing is lost in the translation. Our focus on expansion and communication shows your final product to the design vision accurately.",
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
       subsubtitle: "Continuous Improvement & Post-Launch Support",
      para: "Virtual products are living institutions. After launch, we continue to collect data to keep your product relevant and competitive, monitor the performance and repeat the design. We provide continuous support, updates and marketing to develop market needs and user behavior.",
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
      question: "What is Digital Product Design Services?",
      answer:
        "Digital product design services refer to the end-to-end process with user-centered digital solutions such as mobile apps, websites, mother-in-law platforms and other interactive software products such as designs such as design and development. These services include product strategy, UX (user experience) design, UI (user interface) design, prototypes, testing and continuous improvement. In Zmedios Tech, our virtual product design services help companies convert ideas into spontaneous, attractive and scalable digital experiences that solve real users' problems. ",
    },
    {
      question: "What is an Example of a Digital Product?",
      answer:
        `A digital product is any product found in digital form and provides price through user interactions. Common examples include:
        - Mobile apps (eg Fitness Tracker, Food Delivery)
        - Net app (eg online bank dashboard)
        - E-commerce platform (eg Shopify Store)
        - SaaS tools (e.g., project management or CRM software)
        - Digital Learning Platform (eg Online Course or AD-Tech app)
      For example, a mobile bank app designed to offer spontaneous transactions and account management is a digital product that is shaped by thoughtful product design.`,
    },
    {
      question: "What is the difference between a UX designer and a digital product designer?",
      answer:
      `The most important goal of software development is to create packages that remedy commercial enterprise troubles, enhance performance and boom the consumer experience. This permits companies to automate duties, clean operations and stay competitive within the virtual international. Whether it's a web utility, mobile app or enterprise gadget, software development performs an essential position in commercial enterprise boom and innovation.`,
    },
    {
      question: "Who needs software development services?",
      answer:
        `While the two roles aim to improve the user experiences, the scope differs slightly:
        - An UX designer mainly focuses on user journeys and interaction in a product. They research, make wireframes and ensure the purpose of digital touch points.
        - On the other hand, a product designer takes a broad view. In addition to UX, they include product strategy, UI design, and often collaborate with growth and business teams to coordinate the product with overall goals.
      At Zmedios Tech, our virtual product designers wear multiple hats—ensuring both the business vision and user needs are met through cohesive design solutions. `,
    },
    {
      question: "What App to Use for Digital Product Design?",
      answer:
        `There are numerous enterprise-preferred equipment utilized by specialists for digital product layout, depending at the degree of the layout system:
        - Figma : For collaborative interface and prototype design.
        - Adobe XD : For wireframing, UI layout, and prototyping.
        - Sketch : Popular for Mac customers designing interfaces and belongings.
        - InVision : For interactive prototyping and person checking out.
        - Miro : For brainstorming, product approach, and mapping person flows.`,
    },
   
  ];

  return (
    <div>
      <Head>
        <title>Digital Product Design Services</title>
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
     Digital Product Design Services
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
  At Zmedios Tech, we specialise in digital product design that empowers companies to live beforehand of the curve. Whether you are launching a logo-new product or enhancing an current one, our digital product design services are crafted that will help you flip your vision into an effective, consumer-targeted solution. Backed with the aid of our enormous experience in IT consulting, digital marketing, and staffing answers, Zmedios Tech is your trusted associate for delivering impactful virtual solutions that pressure outcomes fast. 
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
      What Is Digital Product Design?
    </h2>
    <p className="mb-4 text-gray-500">
      Digital product design refers to user-friendly digital tools and a comprehensive process for creating a platform-like websites, mobile apps, mother-in-law products and business software-which solves problems in the real world. It's not just about the stage; It's about understanding the user's needs and providing a simple, pleasant experience that engages in engagement and conversions.
    </p>
    <p className="text-gray-500">
      Our digital product design services go beyond design. We mix the UX/UX strategy, research and dense growth so that we can ensure each product, it distributes both price and performance.
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
    Who Can Benefit from Our Digital Product Design Services?
  </h2>
  <p className="mb-6 text-gray-500 text-base leading-relaxed">
   Our digital product design services cater to a huge variety of industries and commercial enterprise fashions. Whether you are:
  </p>
  <ul className="list-disc pl-6 text-gray-500 leading-relaxed space-y-2">
    <li>
      A startup with a extremely good product concept
    </li>
    <li>
     An organization seeking to modernize old systems
    </li>
    <li>
     An eCommerce logo aiming to optimize your online save

    </li>
    <li>
     A healthcare company digitizing affected person engagement
       </li>
     <li>
     Or a SaaS platform improving person onboarding
    </li>
   <p className="mb-6 text-gray-500 text-base leading-relaxed">
   Zmedios Tech offers the proper layout knowledge to bring your digital vision to existence. 
  </p>
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


export default ProductDdesignCompany;