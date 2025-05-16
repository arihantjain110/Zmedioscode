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
const Usability = () => {
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
      para: "Our usability testing approach is all-inclusive, facts-pushed, and tailor-made for your commercial enterprise targets. We use a combination of real user trying out, heuristic critiques, and analytics tools to identify layout flaws and areas for improvement. With a keen attention on consumer journey mapping, accessibility checking out, and responsive design performance, we deliver results that translate into measurable business effects.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      // maintitle: "Revitalize",
      subtitle: "What Makes Our Usability Testing Services Stand Out",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: " In-Depth User Research and Persona Mapping",
      para: "We begin with user research and personal development to understand the target group's motivations, preferences and pain points. This enables us to conduct a purpose test of real landscapes, and ensure that the response is authentic and actionable. Our team identifies great demographic insight and user behavior so that your platform can adapt to different user groups.",
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
      subsubtitle: "Real-User Testing Scenarios and Feedback Analysis",
      para: "We simulate cases of real use of the world with real participants that match your user personality. From e-commerce transactions to navigation of mobile apps, our usability testing services provide direct feedback from potential customers. This allows us to identify microscopic problems such as CTA, poor material hierarchy or navigation barriers that can be a waiver.",
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
      subsubtitle: "Heuristic Evaluation by UX Experts",
      para: "Our group conducts heuristic evaluations based totally on established usability concepts including Nielsen’s heuristics. This professional-driven method ensures we perceive obvious and latent usability problems that affect your platform's overall performance. These evaluations are specifically treasured whilst launching new products or features, giving your development crew clean steering for usability improvements before going live.",
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
      subsubtitle: "Usability Audits for Website and Mobile Platforms",
      para: "Whether you are running a desktop-fired site or a mobile country application, you can consider the effectiveness of your platform in our targeted audit devices. We test main functions such as responsibility, load time and interaction design. Our comprehensive usability testing services ensure that each part of your digital platform from navigation menu to box groups is adapted to ease of use and user satisfaction.",
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
      subsubtitle: "Accessibility and Inclusivity Testing",
      para: "We believe that the usability testing should go by hand with access. Our services include accessibility checks that follow the WCAG guidelines (web content accessibility guidelines), to ensure that your digital product can be used by all included people with disabilities. From color contrast analysis to keyboard navigation and screen reader compatibility, we ensure that your platform is obedient and inclusive. ",
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
      subsubtitle: "Actionable Reporting and Usability Recommendations",
      para: "At the end of each purpose testing phase, we give you a detailed report that emphasizes the problems found, prefer their impact and priority recommendations on the user experience. This insight is presented in such a way that it is easy to implement your team. Our reports include visual data such as Sessions responses, making it easier for stakeholders to understand and perform the targeted reforms.",
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
      question: "How do I start usability testing?",
      answer:
        `To start usability testing, start by way of genuinely defining the dreams and objectives you want to acquire. Determine which regions of your product or internet site want evaluation and description unique obligations for customers to finish all through testing. Then, perceive your target consumer personas and choose members who closely suit your target audience. Once your test plan is ready, use usability testing services to conduct sessions either in person or remotely, collecting data like user behavior, task completion rate, and verbal feedback.`,
    },
    {
      question: "What does a usability tester do?",
      answer: `A usability tester evaluates digital products - such as websites, applications or software interfaces - to identify user experience that affects the right problems. His role involves seeing how real users interact with a product while completing specific tasks. They analyze the success rate, notice the areas with confusion and collect the response to understand how comfortable and effective the product is.`,
    },
    
    {
      question: "What are the 5 components included in usability testing?",
      answer:  `The usability test usually consists of these five important components:
                1- Learning ability - How easy is it for users to complete basic tasks to meet the design for the first time?
                2- Efficiency - When users are familiar with the design, where can they work soon?
                3- Memorability - Can users re -establish skills after a period of non -use of products?
                4- Error - How many mistakes make users, how serious are these errors, and how easy they can recover?
                5- Satisfaction - How nice is the total experience for users?
 When choosing professional usability testing services, each of these components is carefully evaluated using the actual user's interaction data, which ensures a rounded UX evaluation and strategic improvement of your digital product.               `,
    },
    
  
    {
      question: "How do I find someone for usability testing?",
      answer:  `To find participants for the targeted test, start by defining your ideal user profile or personality. When you know who you target, you can recruit users through e -post operations, social media, purpose testing platforms or even customer databases. Alternatively, determined testing service providers can handle participants for you, using panels before the screen that matches the public's demographic. The use of professional usability testing services helps you ensure that participants are relevant, fair and are able to provide meaningful responses. `,
    },
      {
      question: "How often should usability testing be conducted?",
     answer:  `Proper tests should be performed in several stages of the product's life cycle. Ideally, in the test phase (initial phase -wireframe), major conveniences are performed after development and before launching updates. Constant usability testing services help companies reduce market changes, reduce the risk of targeted errors and to be ahead of the user's expectations.`,
    },
  ];
  return (
    <div>
      <Head>
        <title>Usability Testing Services</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Usability Testing Services"
          bannersubtext="Zmedios Tech is your strategic companion in handing over end result-driven usability testing services that raise user enjoyment and boom digital product performance. Whether you're launching a brand new app, remodeling your website, or optimizing an current platform, our usability testing out answers ensure your users revel in a seamless, intuitive, and frictionless revel in. With a focal point on performance, layout clarity, and consumer pleasure, our usability testing strategies are tailored to show actionable insights and free up your product’s full potential."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Why Usability Testing Services Are Essential for Modern Businesses"
          servicedesc1="The determined test is more than just identifying the error - it is about understanding the user's behavior, improving interface interactions and increasing digital experience to run better conversions. That’s where professional usability testing services step in—bridging the gap between user expectations and business goals."
          servicedesc2="Our expert targeted sensor analyzes real-time user behavior to highlight hidden friction points and purpose problems that often ignore standard development practices. By investing in purpose testing, you create your product and create a reliable digital appearance."
           
        />
       
        <Banner
          reverse={true}
          serviceimg="/assets/images/aboutusimg4.jpg"
          servicehead="Benefits of Choosing Our Usability Testing Services"
          servicedesc1="When choosing Zedios Tech for usability testing services, you don't just get a service - you focus on helping you provide extraordinary user experience. Such are your business benefits:"
          servicedesc2={
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Increased customer satisfaction:</strong>An intuitive interface makes a happy user. When customers can easily navigate and complete tasks without confusion, it creates self -confidence, loyalty and a positive brand reputation.
              </li>
              <li>
                <strong>Cost developed development:  </strong> Identification of targeted problems prevents expensive reunification in the early development process. Our determined usability testing services help your team focus on the right features, reduce time and resource waste.
              </li>
               <li>
                <strong>Competitive advantage:</strong>With a user-centered design improvement, your digital product is in the crowded market. Providing a polished and pleasant user experience gives your brand a unique advantage.
              </li>
              <li>
                <strong>Low support request: </strong>Better purpose means low user errors and confusion, which reduces the demand for customer assistance. This releases your team to focus on development instead of troubleshooting.
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

export default Usability;