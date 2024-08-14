import React from "react";
import Head from "next/head";
import Heading from "../components/Common/Heading";
import Header from "../components/Common/Header";
import ComponentHead from "../components/Common/ComponentHead";
import Band from "../components/Common/Band";
import Footer from "../components/Common/Footer";
import Banner from "../components/Industry/IndustryDetails/Banner";
import Advisors from "../components/Common/Advisor";
import CardSlider from "../components/Industry/IndustryDetails/CardSlider";

const industryDetailsPage = () => {
  return (
    <>
      <div>
        <Head>
          <title> Industry </title>
        </Head>
        <Header />
        <Heading
          titletext="We Serve"
          title="HealthCare And Medical "
          //subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex.  "
        />
        <Banner />
        <ComponentHead
          title="Sample"
          sub="Work Sample"
          head="Explore some of our most impactful projects, where innovation meets excellence. From cutting-edge technology to groundbreaking research, our work speaks for itself."
        />

        <CardSlider />
        <Band />
        <ComponentHead
          title="Advisors"
          sub="Our Advisors"
          head="Meet our team of world-renowned experts who bring decades of experience in medicine, research, and innovation. Their guidance helps us shape the future of healthcare and science."
        />
        <Advisors />
        <Footer />
      </div>
    </>
  );
};

export default industryDetailsPage;
