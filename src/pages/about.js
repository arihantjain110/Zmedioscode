import Banner from "../components/About/Banner";
import Card from "../components/About/Card";
import Section from "../components/About/Section";
import SectionTwo from "../components/About/SectionTwo";
import ValuesMissions from "../components/About/ValuesMissions";
import VideoSection from "../components/About/VideoSection";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Clients from "../components/Home/Clients";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <div className="">
      <Head>
        <header>
          <title>About Us | Zmedios Technology Private Limited</title>
          <meta
            name="description"
            content="Learn about Zmedios Technology Pvt. Ltd., a leading IT company offering web solutions, mobile applications, and digital services since 2013."
          />
          <meta
            name="keywords"
            content="Zmedios Technology, IT company, web development, mobile applications, digital services, about us"
          />
          <meta
            property="og:title"
            content="About Us | Zmedios Technology Private Limited"
          />
          <meta
            property="og:description"
            content="Zmedios Technology Pvt. Ltd. is a global IT and consulting company, trusted by leading organizations across Asia and expanding globally."
          />
          <meta
            property="og:image"
            content="/assets/images/about/about-slide-1.png"
          />
          <meta property="og:url" content="https://zmediostech.com/about" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="canonical" href="https://zmediostech.com/about" />
        </header>
      </Head>
      <Header />
      <Banner />
      <ValuesMissions />
      {/* <Section /> */}
      <Card />
      {/* <VideoSection /> */}

      <SectionTwo />
      <Clients />
      <Footer />
    </div>
  );
};

export default About;
