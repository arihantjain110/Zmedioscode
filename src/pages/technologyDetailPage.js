import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Advisors from "../components/Technology/TechnologyDetail/Advisors";
import Band from "../components/Common/Band";
import Banner from "../components/Technology/TechnologyDetail/Banner";
import Section from "../components/Technology/TechnologyDetail/Section";
import React from "react";
import ComponentHead from "../components/Common/ComponentHead";
import Heading from "../components/Common/Heading";

const TechnologyDetailPage = () => {
  return (
    <div>
      <Header />
      <Heading
        titletext="Technologies"
        title="Technologies "
        subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
      <Banner />
      <Section />
      <Band />
      <ComponentHead
        title=" Advisors"
        head="Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
            tincidunt urna vulputate. Elit amet nam nulla"
        sub="Our Advisors"
      />
      <Advisors />
      <Footer />
    </div>
  );
};

export default TechnologyDetailPage;
