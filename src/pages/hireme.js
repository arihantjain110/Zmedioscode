import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import DeveloperRegistrationSection from "../components/Common/DeveloperRegistratonForm";
import Head from "next/head";
import React from "react";

const HireMe = () => {
  return (
    <>
      <Head>
        <title>Hire Me - Professional Developer for Your Project</title>
        <meta
          name="description"
          content="Looking to hire a professional developer for your project? Register now and connect with top development talent at Zmedios."
        />
        <meta
          name="keywords"
          content="hire developer, hire me, professional developer, freelance developer, developer registration, Zmedios Technology"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zmedios Technology Private Limited" />
        <meta
          property="og:title"
          content="Hire Me - Professional Developer for Your Project"
        />
        <meta
          property="og:description"
          content="Need a skilled developer for your project? Register with Zmedios and hire a professional developer who fits your requirements."
        />
        <meta
          property="og:image"
          content="https://www.zmedios.com/assets/images/hire-me-thumbnail.jpg"
        />
        <meta property="og:url" content="https://www.zmedios.com/hire-me" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <DeveloperRegistrationSection />
      <Footer />
    </>
  );
};

export default HireMe;
