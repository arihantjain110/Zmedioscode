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
const Prototyping = () => {
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
      para: "Speed, clarity and precision are important when creating innovative software solutions. Our prototyping services and fast prototype solutions are designed to give you a competitive advantage from concept to code. This is how we like your product ride: ",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      // maintitle: "Revitalize",
      subtitle: "How Our Prototyping Services Accelerate Your Product Development",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: "Transform Concepts into Clickable Realities",
      para: "We convert your raw ideas into interactive prototypes that mimic actual software behavior. It builds the gap between imagination and implementation, which helps you understand flow, functionality and general experience of the user before growing development.",
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
      subsubtitle: "Empower Agile Development",
      para: "Our rapid prototyping approach is adapted for agile groups. It permits dash-primarily based checking out of ideas, quick revisions, and regular person remarks—all of which make contributions to building an extra adaptive, user-friendly very last product.",
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
      subsubtitle: "Accelerate Investor & Stakeholder Buy-In",
      para: "Do you need to beat your thoughts or safe money? A functional prototype is far more powerful than a stable pitch. This gives investors and stakeholders a preview of your product, making it easier to trust your vision further.",
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
      subsubtitle: "Ensure Feature Feasibility Early On",
      para: "By producing prototypes in the development process, we help you assess which functions are practical, scalable and user -centric. It avoids the trap of upper construction and helps focus on resources on what really matters.",
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
      subsubtitle: "Drive Smarter Decision-Making",
      para: "With clear visual models and feedback loops in real time, our prototyping services support better decisions through the life cycle to start a strategy from the product plan. This leads to more adjustment teams and fast-to-market time.",
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
      subsubtitle: "Minimize Rework and Maximize ROI",
      para: "Catching problems before development saves tremendous time and costs. Our rapid repetition quickly allowed you to correct design errors, purpose problems or technical obstacles and increase the return on investments.",
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
      question: "What are prototyping services?",
      answer:
        `Prototyping services are professional solutions that help convert your software ideas into interactive, testable models before full development begins. They allow you to imagine the design, flow and functionality of an application or digital product in the context of the real world. Whether for mobile apps, websites or business software, these services help identify usage, collect feedback and validate the design concepts to avoid time, money and effort over a long time.`,
    },
    {
      question: "What are the 3 types of prototyping?",
      answer: `The three most common types of prototyping in software development are:
                1- Low-Fidelity Prototyping: These are simple sketches or wireframes that outline the composition and design of a product. They are perfect for early and early thoughts.
                2- Mid-Fidelity Prototyping: These prototypes are a step with low loyalty, and include more details, such as button placements, materials and user streams. They help the teams understand how the app will work.
                3- High-Fidelity Prototyping: These are completely interactive, click ative prototypes that mimic the final product in terms of scenes and functionality. They are ideal for user testing, investor presentations and developing handovers. `,
    },
    {
      question: "When should rapid prototyping be used?",
      answer:  `Rapid prototyping should be used, so you have to test ideas, keep the response together and adapt quickly. This product is especially useful in early stages of development, when you are still shaping the concept or searching for different characteristics. It is also very good for flexible teams, pitching investors or user experience when trying to solve problems and before the coding starts. `,
    },

    {
      question: "How to create rapid prototyping?",
      answer:  `Creating a rapid prototype involves a few key steps:
                1- Define the goal or problem you’re fixing.
                2- Sketch or wireframe the concept, both on paper or the usage of a layout device.
                3- Build a clickable prototype using software like Figma, Adobe XD, or InVision.
                4- Test the prototype with real customers or stakeholders and gather comments.
                5- Iterate fast based totally on feedback until the design feels solid and prepared for improvement.
The key is to keep it quick, focused, and flexible—so you can learn fast and move forward confidently. `,
    },
    
    {
      question: "What is the best way to plan a design prototype?",
     answer:  `The best way to plan a design prototype is to start with a clear understanding of the user’s needs and the business goals. Here’s a quick approach:
                - Start with research : Understand the users, your competitors and markets.
                - Define user flow : Map how users will interact with your product.
                - Sketch key screen : Focus on what matters most, such as on board or main actions.
                - Choose the right loyalty : Decide if you need a rough draft or Polish interactive version.
                - Set the response goals : Learn what you want to learn from the test (purpose, layout, features, etc.).
 Planning thoughtfully helps you create a prototype that doesn’t just look good—but actually solves problems. `,
    },
    
  ];
  return (
    <div>
      <Head>
        <title>Prototyping Services & Rapid Prototyping</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Prototyping Services & Rapid Prototyping"
          bannersubtext="In an international wherein corporations should pass rapidly and innovate constantly, turning ideas into tangible, testable answers quickly is crucial. That’s where our prototyping services and rapid prototyping services are available. Our team at Zmedios blends deep industry information with superior prototyping tools to supply consequences that convey your vision to lifestyles—rapid, useful, and remarks-equipped."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Our Prototyping Process"
          servicedesc1="We use a well-defined, collaborative approach to coordinate the prototype with our business goals, user needs and technical viability. From low-loyal wireframes to high-loyal interactive prototypes, our prototyping services are sewn for tight product development."
          servicedesc2="We strengthen businesses to convert concepts into interactive, highly loyal models that not only validate functionality and design, but also strengthen software development cycles. Whether you are a start -up with a groundbreaking idea or a company that processes your next major digital product, our prototype design accelerates your marketing strategy and reduces expensive rework."
           
        />
       
        <Banner
          reverse={true}
          serviceimg="/assets/images/aboutusimg4.jpg"
          servicehead="Key Advantages of Our Prototyping Services"
          servicedesc1="Our prototyping services are designed to graceful the software development process, reduce risks, and ensure your product hits the market with confidence. Here’s how we add value at every stage:"
          servicedesc2={
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Early Visualization of the Product:</strong>Prototypes deliver stakeholders a tangible version of the product concept early on. This visual clarity makes it less complicated to align commercial enterprise desires with technical implementation and personal expectancies.
              </li>
              <li>
                <strong>Faster Iteration Cycles: </strong>With rapid prototyping, we quickly turn thoughts into testable models. This lets teams make non-stop upgrades primarily based on real-time feedback, leading to higher effects in much less time.
              </li>
              <li>
                <strong>Improved Design Accuracy:  </strong> Through our prototype design procedure, we will satisfactory-music layouts, person flows, and interactions. This avoids ambiguity throughout development and ensures that the final product carefully suits the unique vision. 
              </li>
              <li>
                <strong>Risk Reduction in Software Projects:</strong> Identification of purposeful or technical problems in the prototyping phase reduces the risk of major problems that arise in the development cycle later - by giving you time and money.
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

export default Prototyping;