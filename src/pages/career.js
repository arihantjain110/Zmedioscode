import JobListingCareers from "../components/Career/JobListingCareers";
import TopHeaderCareer from "../components/Career/TopHeaderCareer";
import WhyJoinUsCareer from "../components/Career/WhyJoinUsCareer";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Head from "next/head";
import React from "react";
import Heading from "../components/Common/Heading";
const Career = () => {
  return (
    <div>
      <Head>
        <title>
          Career Opportunities at Zmedios Technology | Join Our Team
        </title>
        <meta
          name="description"
          content="Explore career opportunities at Zmedios Technology. Join our innovative team and help turn ideas into reality. Discover job openings, company culture, and why you should join us."
        />
        <meta
          name="keywords"
          content="Zmedios Technology careers, job opportunities, join Zmedios, tech jobs, IT careers, Zmedios team"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.zmediostech.com/career" />
      </Head>
      <Header />
      <Heading
        titletext="Career"
        title="Career "
        subtext="Get ready to solve challenging problems and turn your ideas into reality with Zmedios Innovations. At Zmedios, we’re empowered, supported, and inspired to make a difference every day."
      />
      <TopHeaderCareer />
      <WhyJoinUsCareer />
      <JobListingCareers />
      <Footer />
    </div>
  );
};

export default Career;
