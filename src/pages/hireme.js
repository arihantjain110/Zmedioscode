import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import DeveloperRegistrationSection from "../components/developerRegistratonForm";
import Head from "next/head";
import React from "react";

const HireMe = () => {
  return (
    <>
      <Head>
        <title>Hire Me</title>
      </Head>
      <Header />
      <DeveloperRegistrationSection />
      <Footer />
    </>
  );
};

export default HireMe;
