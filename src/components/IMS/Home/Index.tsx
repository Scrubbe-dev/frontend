import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import UseCase from "./UseCase";
import { FeatureComparisonTable } from "./FeatureComparisonTable";
import Impacts from "./Impacts";
import Contact from "./Contact";
import VideoSection from "./VideoSection";

const Index = () => {
  return (
    <>
      <Hero />
      <Features />
      <VideoSection />
      <UseCase />
      <FeatureComparisonTable />
      <Impacts />
      <Contact />
    </>
  );
};

export default Index;
