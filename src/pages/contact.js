import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import FormSection from "../components/Contact/FormSection";
import Location from "../components/Contact/Location";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Contact Us - Zmedios</title>
        <meta
          name="description"
          content="Get in touch with Zmedios for expert advice and support. Contact us via email, phone, or visit our locations in India and the USA."
        />
        <meta property="og:title" content="Contact Us - Zmedios" />
        <meta
          property="og:description"
          content="Connect with our experts for professional advice and support. Available via email, phone, or visit our locations."
        />
        <meta property="og:url" content="https://www.zmedios.com/contact" />
        <meta property="og:type" content="website" />
      </Head>
      <FormSection />
      <Location />
      <Footer />
    </>
  );
};

export default contact;
