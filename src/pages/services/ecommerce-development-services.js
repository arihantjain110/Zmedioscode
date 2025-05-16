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

const EcommerceDevelopmentCompany = () => {
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

      subtitle: "Top 7 Reasons to Choose Our eCommerce Development Service",
      // subsubtitle: "Precision Planning with Data Insights",
      para: "When you partner with us for your ecommerce development service or ecommerce web improvement wishes, you are choosing a crew dedicated to handing over impactful effects. Here's why organizations rely upon us to electricity their digital trade achievement:",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
    },

    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      subsubtitle: "Custom-Built Solutions",
      para: "We do not offer cookie-cuts websites. Each ecommerce platform we created is fully adapted to reflect your brand, match your business model and to provide a comfortable customer experience. From product catalogs to checkout, everything matches your needs.",
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
      subsubtitle: "Expert Technology Stack",
      para: "We benefit from unconventional technologies such as Shopify, Magento, WooCommerce, Laravel, React and Node.JS, which will create strong and scalable e -commerce solutions. Our team chooses the right stack based on your goals, and ensures performance, flexibility and future ties.",
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
      subsubtitle: "Marketing-Driven Design",
      para: "With deep roots in digital marketing, we develop e -commerce sites that are not only visually attractive, but also conversion -friendly. Each design element instructions, product setup, requires banners - is designed to engage and promote sales online.",
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
      subsubtitle: "User-Centric UX/UI",
      para: "Your customers expect fast, simple and smooth experiences while shopping online. We prioritize user experience (UX) and interface design (UI) to simplify navigation, reduce boom prices and return buyers to buyers.",
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
      subsubtitle: "SEO-Optimized Development",
      para: "Our ecommerce development service includes SEO basics from the development phase. Pure code structure, custom images, fast side loading and skimmer marking help your site run high ranking and frequent organic traffic on the search engine.",
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
      subsubtitle: "Secure & Scalable Architecture",
      para: "Safety and scalability are produced in each e -commerce solution distributed by us. Whether you handle 100 or 10,000 daily users, your site will be fast and safe with facilities such as SSL encryption, secure payment port and future upgrading.",
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
      question: "What is E-commerce Development?",
      answer:
        "Ecommerce development refers to the process of producing and maintaining an online platform where companies can sell products or services. This includes everything ranging from the installation of user -friendly interfaces and shopping baskets, administration of inventory, ensures customer data and enables uninterrupted transactions. ",
    },
    {
      question: "What is E-commerce Web Development?",
      answer: `Online development of ecommerce is a special branch of the development of e-commerce that focuses completely on the construction and adaptation of the site or the online store. This includes:
        - Front-and Development (user experience and interface) Back-and Development (Server, Database, API)
        - CMS integration (eg Shopify, Magento, WooCommerce)
        - Mobile responsibility
        - Result adaptation
        - SEO best practice
      The goal is to give business owners a smooth, safe and fast shopping experience for users, so that business owners can easily manage and develop their store.`,
    },
    {
      question: "What Does an E-commerce Developer Do?",
      answer: `The most important goal of software development is to create packages that remedy commercial enterprise troubles, enhance performance and boom the consumer experience. This permits companies to automate duties, clean operations and stay competitive within the virtual international. Whether it's a web utility, mobile app or enterprise gadget, software development performs an essential position in commercial enterprise boom and innovation.`,
    },
    {
      question: "Who needs software development services?",
      answer: `An e-commerce developer is responsible for:
        - Designing intuitive person interfaces
        - Ensuring cell and browser compatibility
        - Integrating payment gateways (like PayPal, Stripe, etc.)
        - Setting up product catalogs and stock systems
        - Securing the web site towards fraud and attacks
        - Optimizing website online speed and performance
        - Maintaining and updating the platform frequently
      Some developers additionally paint advertising teams to enforce search engine optimization equipment, analytics, and conversion optimization techniques. `,
    },
    {
      question: "How Much Does It Cost to Develop an E-commerce Website?",
      answer: `The cost of developing online website can vary widely:
        - Number of complexity and features
        - Platforms used
        - Design adaptation level
        - Third -party integration
        - Developer prices (Freelancer vs. agency, local vs. offshore)
      Typical ranges:
        - Basic store: $1,000 – $5,000
        - Mid-level store: $5,000 – $15,000
        - Advanced custom store: $20,000+
      Keep in mind that there are also ongoing costs like hosting, maintenance, updates, and marketing.`,
    },
    {
      question: "What Are Services in E-commerce?",
      answer: `E-commerce proposing encompasses the entirety of the launch, control, and development of an online shop. Key services are:
        - E-commerce internet development
        -  UI/UX layout
        -  Shopping cart and checkout integration
        -  Payment gateway integration
        -  Product and inventory control
        -  Order and shipping answers
        -  Mobile trade (m-commerce) optimization
        -  SEO and digital advertising
        -  Analytics and performance monitoring
        -  Security and information protection
      These offerings are regularly presented through groups or specialised companies to help groups get online speedy and efficiently. `,
    },
  ];

  return (
    <div>
      <Head>
        <title>Ecommerce Development Services</title>
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
            Ecommerce Development Services
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
            If you are ready to convert the retail or B2B business to a powerful
            digital store, you are in the right place. We specialize in
            developing online stores online and ecommerce web development
            services, designed to distribute spontaneous, scalable and safe
            shopping experiences. Whether you are launching your first online
            store or looking to upgrade an existing one, our team ensures that
            your e -commerce store works innocently, looks surprisingly and
            performs beyond all expectations. From Ui/Ux design and payment
            gateway integration to Backend system and mobile responsibilities.
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
                Why Choose Our eCommerce Development Service?
              </h2>
              <p className="mb-4 text-gray-500">
                On a competitive digital marketplace just a website is not
                enough. You need a platform built with accuracy, in line with
                business goals and adapted conversions. Our ecommerce
                development service gives everything more.
              </p>
              <p className="text-gray-500">
                We provide a comprehensive approach that includes strategy,
                design, development, testing and support after launch. With us
                you are not just building an online store - you create a dynamic
                engine for development that meets changed technologies and
                customers' expectations.
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
                Tailored eCommerce Website Development Service for Every
                Business Model
              </h2>
              <p className="mb-6 text-gray-500 text-base leading-relaxed">
                We understand that ecommerce businesses come in different shapes
                and sizes. That’s why our ecommerce web development service is
                designed to support a wide variety of business models,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-500 leading-relaxed space-y-2">
                <li>
                  <strong>B2C Ecommerce:</strong> Online store directly to the
                  customer who prefers customer experience and brand loyalty.
                </li>
                <li>
                  <strong>B2B Ecommerce:</strong>Bulk ordering, price level and
                  customized portals for distributors and wholesale suppliers.
                </li>
                <li>
                  <strong>Multi-Winder Marketplace:</strong>Functional platforms
                  such as Amazon or Ebay supported many suppliers and advanced
                  backend management.
                </li>
                <li>
                  <strong>Membership-based e-municipalities:</strong>websites
                  that provide membership, recurrent invoicing and material or
                  product membership.
                </li>

                <p className="mb-6 text-gray-500 text-base leading-relaxed">
                  We don’t just build ecommerce sites—we engineer business
                  solutions that deliver long-term value.
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

export default EcommerceDevelopmentCompany;
