import React from "react";
import Head from "next/head";
import Heading from "../components/Common/Heading";
import Header from "../components/Common/Header";
import Banner from "../components/Industry/Banner";
import ComponentHead from "../components/Common/ComponentHead";
import Card from "../components/Industry/Card";
import Band from "../components/Common/Band";
import Footer from "../components/Common/Footer";

const IndustryWeServe = () => {
  return (
    <>
      <div>
        <Head>
          <title>
            Industries We Serve - Zmedios Technology Private Limited
          </title>
          <meta
            name="description"
            content="Explore the diverse industries served by Zmedios Technology Private Limited. We provide cutting-edge technological solutions tailored to meet the unique needs of various sectors."
          />
          <meta
            name="keywords"
            content="Zmedios industries, industry solutions, technological solutions, industry support, sector services"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Zmedios Technology Private Limited" />
          <meta
            property="og:title"
            content="Industries We Serve - Zmedios Technology"
          />
          <meta
            property="og:description"
            content="Zmedios Technology caters to a wide range of industries, offering specialized technological solutions that drive success across different sectors."
          />
          <meta
            property="og:image"
            content="https://www.zmediostech.com/assets/images/industry-thumbnail.jpg"
          />
          <meta
            property="og:url"
            content="https://www.zmediostech.com/industry"
          />
          <meta property="og:type" content="website" />
        </Head>
        <Header />
        <Heading
          titletext="Industry"
          title="Industry We Serve"
          subtext="Zmedios is a company that caters to a diverse array of industries. They provide technological solutions and support that are applicable across various sectors. "
        />
        <Banner />
        <ComponentHead
          title="We Serve"
          sub="Let's Connect for"
          head="Here is a list of all the industries that we serve"
        />
        <Card />
        <Band />
        <Footer />
      </div>
    </>
  );
};

export default IndustryWeServe;
