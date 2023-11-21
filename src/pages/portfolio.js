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
        <title> Portfolio </title>
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
