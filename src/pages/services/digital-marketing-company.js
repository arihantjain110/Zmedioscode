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

const Marketing = () => {
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
    
    subtitle: "What Makes Our Digital Marketing Strategy Work",
    // subsubtitle: "Precision Planning with Data Insights",
    // para: "Every decision is based totally on insights. Our team uses advanced analytics equipment to collect and interpret data approximately your target market, competition, and performance metrics. This guarantees that your digital advertising and marketing strategy is grounded in real-time intelligence. We constantly reveal campaigns to refine messaging and maximize return on funding.",
    bgcolor: "bg-[#fff]",
    cols: "md:col-span-2",
    textcolor: "text-secondary",
    display: "hidden",
  },

    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
       subsubtitle: "Precision Planning with Data Insights",
      para: "We do not believe in a form-pass. Your business is unique - and your SEO should also have a strategy. Our search engine optimization services begin with your site, the target audience and intensive competition analysis.",
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
       subsubtitle: "Personalized Campaigns",
      para: "We do not believe in general campaigns. Whether you want to increase brand awareness or promote conversion, our team creates material and advertising for your objective and marketing behavior. Through partition and privatization, your digital marketing services become more efficient, attractive and profitable.",
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
       subsubtitle: "Omnichannel Marketing Integration",
      para: "Success lies in stability. This is why our digital marketing strategy ensures that all the brand for your brand have an integrated appearance attack, email, social media and paid ads. We integrate all digital channels into a harmonious strategy to strengthen your messages and strengthen your brand identity.",
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
       subsubtitle: "Agile and Scalable Approach",
      para: "The digital landscape changes rapidly, and we do. Our digital marketing services are tight and adaptable, so we can pose strategies based on real -time performance and new trends. Whether your business is launching a new product, or feeling seasonally demanding, campaigns to meet your developed needs, maintain efficiency and budget control.",
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
       subsubtitle: "Focused on Measurable Outcomes",
      para: "We believe that marketing should be transparent and results -oriented. This is why we put Clear KPI and regularly provide a performance report to show what works and what improvement is required. Whether it is traffic, lead, sales or commitment, our digital marketing strategy focuses on the matrix that matters most to your business.",
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
       subsubtitle: "Support for All Business Sizes and Industries",
      para: "From the early phase startups to established companies, and from health services to e-commerce, we offer digital marketing services corresponding to your specific business environment. And for those looking for online marketing services for small businesses, our flexible packages and dedicated support ensures that you never feel overwhelmed.",
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
      question: "What are digital marketing services?",
      answer:
        "Digital marketing services are various online marketing solutions designed to assist corporations promote their brand, products, or offerings using digital channels. These services may include SEO, PPC advertising, social media marketing, content creation, email marketing, and more.",
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
        <title>Digital Marketing</title>
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
      Digital Marketing Services
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
  Your business just requires more than an online look - it requires a powerful strategy to stand out and fast scale. In Zmedios Tech, we offer groundbreaking digital marketing services that are ready to speed up developments, generate quality lines and improve the brand. Whether you are a start-up or a growing business, our customized digital marketing strategy ensures that you are ahead of the competition. From SEO and PPC to social media and e-mail marketing, we help you reach the right audience with the right message, especially when it comes to digital marketing services for small businesses who want to expand their footsteps.
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
      Customized Digital Marketing Strategy for Every Business Type
    </h2>
    <p className="mb-4 text-gray-500">
      No two businesses are the same - they should also not have their marketing methods. Our team focuses on designing a digital marketing strategy that corresponds to your industry, goals and target groups. Whether it is B2B or B2C, local or global, we interact with all strategies with your brand and goals.
    </p>
    <p className="text-gray-500">
      The strategy for a well-defined digital marketing services includes full market research, competitive analysis and public division. We use all this to produce campaigns that resonate with potential customers and effectively lead them through buyers.
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
    End-to-End Digital Marketing Services
  </h2>
  <p className="mb-6 text-gray-500 text-base leading-relaxed">
    We offer a complete range of digital marketing services that cover every essential touchpoint your business needs to succeed online. From brand awareness to lead generation and conversion optimization, we’ve got you covered. Our digital marketing solutions encompass:
  </p>
  <ul className="list-disc pl-6 text-gray-500 leading-relaxed space-y-2">
    <li>
      <strong>Search Engine Optimization (SEO):</strong> Boost your rankings and stay visible when clients search for products or services like yours.
    </li>
    <li>
      <strong>Pay-Per-Click (PPC) Advertising:</strong> Drive targeted traffic to your website through data-driven paid campaigns on Google, Bing, and social platforms.
    </li>
    <li>
      <strong>Content Marketing:</strong> Engage your audience with high-quality content that informs, educates, and converts.
    </li>
    <li>
      <strong>Social Media Marketing:</strong> Build and grow a faithful network on platforms like Instagram, LinkedIn, Facebook, and X (previously Twitter).
    </li>
    <li>
      <strong>Conversion Rate Optimization:</strong> Ensure your website turns visitors into clients with strategic upgrades to layout, messaging, and CTAs.
    </li>
    <li>
      <strong>Email Marketing:</strong> Deliver personalized messages directly to your clients’ inbox to foster loyalty and repeat business.
    </li>
  </ul>
</div>

</div>

  </div>
</div>


      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Technology"
          sub="Digital Marketing"
          head="The technology stack for Digital Marketing can vary depending on the specific requirements of the application and the chosen modernization approach."
        />
        <Technology tech={techs} />
      </div>

      <div>
        <div
          style={{
            backgroundImage:
              'url("/assets/images/service/servicebackground.png")',
          }}
        >
          <div className="container-ack md:px-0 px-5">
            <ProcessHead
              processhead="Services"
              processsub="Other Services"
              // processdesc="Your business just requires more than an online look - it requires a powerful strategy to stand out and fast scale. In Zmedios Tech, we offer groundbreaking digital marketing services that are ready to speed up developments, generate quality lines and improve the brand. Whether you are a start -up or a growing business, our customized digital marketing strategy ensures that you are ahead of the competition. From SEO and PPC to social media and e -mail marketing, we help you reach the right audience with the right message, especially when it comes to digital marketing services for small businesses who want to expand their footsteps"
              processimg="/assets/images/service/videoservice.png"
            />
            <Process process={processes} />
          </div>
        </div>
        <div className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}></div>
      </div>

      <Work />
      {/* <Section /> */}
         <Faq  faqData={faqData}/>
      <Enquiry />
   

      <Clients />
      <Footer />
    </div>
  );
};

export default Marketing;