import React from "react";
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
const index = () => {
  return (
    <>
      <Head>
        <title>Zmedios Technology Private Limited.</title>
      </Head>
      <Header />
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
