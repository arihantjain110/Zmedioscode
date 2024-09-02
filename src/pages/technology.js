import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Backend from "../components/Technology/Backend";
import Section from "../components/Technology/Section";

import Head from "next/head";
import React from "react";
import Heading from "../components/Common/Heading";

const Technology = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Technologies - Zmedios Technology Private Limited</title>
        <meta
          name="description"
          content="Discover the diverse range of technologies we leverage to deliver cutting-edge solutions. From frontend to backend, we utilize the latest tools and frameworks to build robust and scalable applications."
        />
        <meta
          name="keywords"
          content="Zmedios technologies, frontend, backend, development, programming languages, frameworks, tech stack"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zmedios Technology Private Limited" />
        <meta property="og:title" content="Technologies - Zmedios Technology" />
        <meta
          property="og:description"
          content="Explore the various technologies we use to create high-performance, secure, and scalable solutions for our clients."
        />
        <meta
          property="og:image"
          content="https://www.zmediostech`.com/assets/images/technology-thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://www.zmediostech.com/technology"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Heading
        titletext="Technologies"
        title="Technologies "
        subtext="We use a wide range of technologies for different purposes"
      />
      <Section />
      <Backend />
      <Footer />
    </div>
  );
};

export default Technology;
