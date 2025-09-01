import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import UseCase from "./UseCase";
import { FeatureComparisonTable } from "./FeatureComparisonTable";
import Impacts from "./Impacts";
import Contact from "./Contact";

const Index = () => {
  return (
    <>
      <Hero />
      <Features />
      <UseCase />
      <FeatureComparisonTable />
      <Impacts />
      <Contact />
    </>
  );
};

export default Index;
