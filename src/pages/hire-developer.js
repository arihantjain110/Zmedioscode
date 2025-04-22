import Footer from "../components/OnDemandDeveloper/Footer";
import Header from "../components/Common/Header";
import DeveloperRegistrationSection from "../components/Common/DeveloperRegistratonForm";
import FreelancerSearch from "../components/OnDemandDeveloper/freelancerSearch";
import Head from "next/head";
import React from "react";

const HireDeveloper = () => {
  return (
    <>
      <Head>
        <title>Hire Developers - Top Freelancers & Remote Developers</title>
        <meta
          name="description"
          content="Hire top freelance developers and remote developers on demand. Zmedios connects you with skilled professionals for your project needs."
        />
        <meta
          name="keywords"
          content="hire developer, freelance developer, remote developer, hire freelancer, developer on demand, Zmedios Technology"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zmedios Technology Private Limited" />
        <meta
          property="og:title"
          content="Hire Developers - Top Freelancers & Remote Developers"
        />
        <meta
          property="og:description"
          content="Find and hire top freelance and remote developers through Zmedios. Get connected with skilled professionals for your project needs."
        />
        <meta
          property="og:image"
          content="https://www.zmediostehch.com/assets/images/hire-developer-thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://www.zmediostech.com/hire-developer"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      {/* <DeveloperRegistrationSection /> */}
      <FreelancerSearch />
      <Footer />
    </>
  );
};

export default HireDeveloper;
