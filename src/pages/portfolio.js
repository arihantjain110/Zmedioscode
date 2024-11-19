import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import PortfolioListing from "../components/Portfolio/PortfolioListing";
import Head from "next/head";
import Heading from "../components/Common/Heading";
function portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Zmedios Technology Private Limited</title>
        <meta
          name="description"
          content="Explore our diverse portfolio showcasing our expertise in delivering top-notch web and mobile solutions. From innovative startups to industry giants, our portfolio highlights our commitment to excellence."
        />
        <meta
          name="keywords"
          content="Zmedios portfolio, web development, mobile solutions, design, technology, case studies, project showcase"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zmedios Technology Private Limited" />
        <meta property="og:title" content="- Zmedios Technology" />
        <meta
          property="og:description"
          content="Take a look at some of our work across various industries, showcasing our design and development capabilities."
        />
        <meta
          property="og:image"
          content="https://www.zmediostech.com/assets/images/portfolio-thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://www.zmediostech.com/portfolio"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <Heading
        titletext="Portfolio"
        title="Portfolio"
        subtext="Take a look at some of our work"
      />

      <PortfolioListing />
      <Footer />
    </>
  );
}
export default portfolio;
