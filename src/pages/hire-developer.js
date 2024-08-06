import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import DeveloperRegistrationSection from "../components/developerRegistratonForm";
import FreelancerSearch from "../components/OnDemandDeveloper/freelancerSearch";
import Head from "next/head";
import React from "react";

const HireDeveloper = () => {
    return (
        <>
            <Head>
                <title>Hire Developer</title>
            </Head>
            <Header />
            {/* <DeveloperRegistrationSection /> */}
            <FreelancerSearch />
            <Footer />
        </>
    );
};

export default HireDeveloper;
