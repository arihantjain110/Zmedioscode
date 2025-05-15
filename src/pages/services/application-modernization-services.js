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

const AppModernizationDetails = () => {
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
    
    subtitle: "Why Choose Our Application Modernization Services?",
    // subsubtitle: "Precision Planning with Data Insights",
    para: "Our application modernization services are designed to power virtual transformation whilst minimizing operational risks and charges. We examine your current structures, recognize your commercial enterprise targets, and deliver custom designed answers that offer tangible consequences.",
    bgcolor: "bg-[#fff]",
    cols: "md:col-span-2",
    textcolor: "text-secondary",
    display: "hidden",
  },

    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
       subsubtitle: "In-Depth Legacy Application Assessment",
      para: "Before jumping into modernization, we make a comprehensive evaluation of your existing applications. This includes technology subjects, performance measurements, users who use prices and scalability limits. Our detailed analysis allows you to make data -driven decisions that reduce the risk and maximize the return.",
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
       subsubtitle: "Tailored Application Modernization Strategy",
      para: "Each business is unique and therefore has a digital journey. We form a personal application modernization strategy that corresponds to your business needs and IT goals. Our strategy focuses on strengthening application performance, improving agility and ensuring compatibility with modern cloud infrastructure.",
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
       subsubtitle: "Cloud-Native Application Transformation",
      para: "We enable your application to take advantage of the strength of the cloud, such as through rehabilitation, reflect or research architect. Our experts guide you through all steps in Skyer - from planning and migration to testing and distribution - the center for a smooth and safe transition.",
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
       subsubtitle: "Agile Software Development Practices",
      para: "Modernization applications are not just about technology - it is also how software develops and distributed. We use smooth function, continuous integration/continuous distribution (CI/CD) and DevOPS practices to speed up the market time.",
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
       subsubtitle: "Seamless Integration with Modern Systems",
      para: "Integration is an important aspect of modernization. We ensure that your modern applications are easily linked to enable even data flow and operating efficiency related to internal equipment, third-party platforms and APIs. Our application modernization services simplify integration challenges so that your software ecosystem can act as a harmonious device in business departments.",
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
       subsubtitle: "Future-Ready Architecture and Scalability",
      para: "We design and develop applications using scalable, microsar-based architecture that is ready for future development. Whether you are planning to expand operations or add new features, your applications will be able to develop without animal overhaul. Our in front of the thinking attitude helps companies embrace innovation.",
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
      question: "What is application modernization?",
      answer:
        "Application modernization is the process of updating heritage software systems for modern technologies, architecture and practice. This helps companies to improve performance, scalability and security, in accordance with current user expectations and digital trends. Modernization often involves migration on clouds, breaking the code or redesign applications for better agility.",
    },
    {
      question: "How to modernize the application?",
      answer:
        "To modernize an application, start by assessing the boundaries and business goals of the current system. Then select suitable application modernization services - such as the reconstruction for clouds, reflects the code or reconstruct parts of the app using microsar or containerization. Using Agile and Devops practice as part of the service ensures a smooth and effective modernization journey.",
    },
    {
      question: "What are the 5 Rs of application modernization?",
      answer:
      `The 5 Rs of application modernization are:
      - Rehost (lift and shift to new infrastructure)
      - Refactor (optimize code without changing functionality)
      - Rearchitect (modify architecture for scalability)
      - Rebuild (rewrite components from scratch)
      - Replace (swap outdated apps with new solutions).
      These strategies guide how to transform legacy systems effectively.`,
    },
    {
      question: "What is an example of modernization?",
      answer:
        "A common example of app modernization is to transfer the CRM system on the radius on a cloud-based platform like Salesforce. This improves infection access, reduces the costs of infrastructure and provides real -time data access, eventually improving the customer's involvement and operational efficiency.",
    },
   
  ];

  return (
    <div>
      <Head>
        <title>Application Modernization & Migration Services</title>
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
     Application Modernization & Migration Services
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
  Empower your business with next-generation application modernization services that transform legacy systems into agile, scalable, and high-performing digital solutions. When technology develops at electricity speed, companies require flexible and future prepared applications to remain competitive. We help you unlock the complete capacity of your software ecosystem through an analog application modernization strategy promoting the look, improve the customer experience and speed up the market from time to time.
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
      Drive Growth Through Application Modernization
    </h2>
    <p className="mb-4 text-gray-500">
      Getting stuck with heritage systems limits your business capacity. Our expert application modernization services help you unlock innovation, increase performance and reduce technical debt-something that makes your organization more smooth and future-proof.
    </p>
    <p className="text-gray-500">
      Let's create a scalable and flexible digital foundation that runs the real results. To know this, contact us today how our application modernization strategy can convert your business applications to the development engine.
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
    Key Benefits of Application Modernization Services
  </h2>
  <p className="mb-6 text-gray-500 text-base leading-relaxed">
   Modernization of your application is not just a technological upgrade - it is a strategic step that gives the average business effect. Here are the seven major benefits of using our app modernization services.:
  </p>
  <ul className="list-disc pl-6 text-gray-500 leading-relaxed space-y-2">
    <li>
      <strong>Enhanced Performance & Speed:</strong>  The heritage system often lags in performance. Modern applications run fast, process data effectively and support real -time interactions, which improves both user experience and backend operations.
    </li>
    <li>
      <strong>Improved Scalability:</strong> As your business grows, your application must scale with it. Our application modernization strategy ensures that your system can increase the workload without compromising.
    </li>
    <li>
      <strong>Better Security & Compliance:</strong>Old applications are sensitive to cyber threats. We built -in modern safety protocols and compliance standards to protect your data and ensure regulatory adjustment.

    </li>
    <li>
      <strong>Reduced Operational Costs:</strong> Maintaining cultural monuments can be expensive. In case of infection in modern infrastructure, blame the environment and efficient code base, you can significantly reduce maintenance and operating expenses.

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



export default AppModernizationDetails;