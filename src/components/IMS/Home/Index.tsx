import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Impacts from "./Impacts";
import Contact from "./Contact";
import HowItWorks from "./HowItWorks";
import ApiReference from "./ApiReference";

const Index = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <ApiReference />
      {/* <VideoSection /> */}
      {/* <UseCase /> */}
      {/* <FeatureComparisonTable /> */}
      <Impacts />
      <Contact />
    </>
  );
};

export default Index;
