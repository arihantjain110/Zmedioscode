import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../components/Common/Footer";
import Banner from "../components/Home/Banner";
import Header from "../components/Common/Header";
import About from "../components/Home/About";
import Advisors from "../components/Home/Advisors";
import Memories from "../components/Home/Memories";
import Leaders from "../components/Home/Leaders";
import Videos from "../components/Home/Videos";
import Blogs from "../components/Home/Blogs";
import Testimonial from "../components/Home/Testimonials";
import Clients from "../components/Home/Clients";
import Card from "../components/Home/Card";
import OurServices from "../components/Home/OurServices";
import Portfolio from "../components/Home/Portfolio";
import OurGroups from "../components/Home/OurGroups";
import EnquiryModal from "../components/Home/EnquiryModal";
const index = () => {
  return (
    <>
      <Head>
        <title>
          Zmedios Technology Private Limited | Software Development and Digital
          Marketing Solutions
        </title>
        <meta
          name="description"
          content="Zmedios Technology Private Limited offers top-notch software development, digital marketing, and technology solutions. Explore our services, portfolio, and client testimonials."
        />
        <meta
          name="keywords"
          content="software development, digital marketing, technology solutions, Zmedios Technology, IT services"
        />
        <meta
          property="og:title"
          content="Zmedios Technology Private Limited | Software Development and Digital Marketing Solutions"
        />
        <meta
          property="og:description"
          content="Leading web development and digital solutions company. Check out our services and successful projects."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://zmediostech.com/" />
      </Head>
      <Header />
      {/* <EnquiryModal /> */}
      <Banner />
      <About />
      <OurServices />
      <OurGroups />
      {/* <Advisors /> */}
      <Memories />
      <Card />
      <Portfolio />
      {/* <Leaders /> */}
      {/* <Videos /> */}
      <Clients />
      <Blogs />
      <Testimonial />
      <Footer />
    </>
  );
};

export default index;
