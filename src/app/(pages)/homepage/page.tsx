"use client";
import React from "react";
import SecurityFeatures from "@/components/landing/SecurityFeatures";
import SecurityIntelligence from "@/components/landing/SecurityIntelligence";
//import SeamlessIntegrations from "@/components/landing/SeamlessIntegrations";
import CompromiseChecker from "@/components/landing/CompromiseChecker";
import Integration from "@/components/landing/Integration";
//import ChartHome from "@/components/landing/ChartHome";
import ScrubbeHighlights from "@/components/landing/ScrubbeHighlights";
import BuiltForDevelopers from "@/components/landing/BuiltForDevelopers";
import Hero from "@/components/landing/Hero";
import { CodeBlock, dracula } from "react-code-blocks";

export function CodeDisplay({
  code,
  language,
  showLineNumbers,
}: {
  code: string;
  language: string;
  showLineNumbers: boolean;
}) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
      wrapLongLines={true}
    />
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <SecurityFeatures />
      <BuiltForDevelopers />
      <SecurityIntelligence />
      {/* <SeamlessIntegrations /> */} {/* causing horizontal scroll */}
      <CompromiseChecker />
      <Integration />
      {/*  <ChartHome />  */} {/* causing horizontal scroll */}
      <ScrubbeHighlights />
    </>
  );
}

export default HomePage;
