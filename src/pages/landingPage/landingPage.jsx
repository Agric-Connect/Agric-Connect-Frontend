import React from "react";
import Navbar from "../../components/navbar";
import Header from "./header";
import Hero from "./hero";
import Footer from "../../components/footer";
import PageLayout from "../../components/pageLauout";
import WhatWeDo from "./whatWeDo";
import AboutUs from "./aboutUs";
import ProduceSection from "./produceSection";

const LandingPage = () => {
  return (
    <PageLayout>
      <Hero />
      <WhatWeDo />
      <AboutUs />
      <ProduceSection />
    </PageLayout>
  );
};

export default LandingPage;
