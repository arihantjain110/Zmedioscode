import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import DeveloperRegistrationSection from "../../components/Common/DeveloperRegistratonForm";
import Head from "next/head";
import React from "react";

const HireMe = () => {
  return (
    <>
      <Head>
        <title>Register Company</title>
      </Head>
      <Header />
      <DeveloperRegistrationSection />
      <Footer />
    </>
  );
};

export default HireMe;
