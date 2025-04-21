"use client";
import Banner from "@/components/banner";
import MainLayout from "@/components/main-layout";
import SecurityFeatures from "@/components/landing/SecurityFeatures";
import SecurityIntelligence from "@/components/landing/SecurityIntelligence";
import SeamlessIntegrations from "@/components/landing/SeamlessIntegrations";
import CompromiseChecker from "@/components/landing/CompromiseChecker";
import Integration from "@/components/landing/Integration";
import ChartScroll from "@/components/landing/ChartScroll";
import ScrubbeHighlights from "@/components/landing/ScrubbeHighlights";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import React from "react";
import { FlipWords } from "@/components/animation/flip-words";
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
  const words = ["Intelligence", "Features", "in Action"];

  return (
    <MainLayout>
      <div
        className="w-full min-h-screen flex justify-center pb-14"
        style={{ backgroundImage: "linear-gradient(135deg, #1e293b, #1e40af)" }}
      >
        <div className="xl:w-10/12 h-full grid xl:grid-cols-2 pt-20 gap-10 ">
          <div className="col-span-1">
            <div className="w-full">
              <Card className="bg-transparent shadow-none space-y-4 xl:space-y-1 ">
                <CardHeader>
                  <div className="text-5xl xl:text-6xl text-white font-Inter font-semibold">
                    Advanced{" "}
                    <span className="text-[#10b981]">SIEM & SOAR </span>{" "}
                    Security{" "}
                    <FlipWords
                      className="text-5xl xl:text-6xl text-white font-Inter font-semibold"
                      words={words}
                    />
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="font-light text-md text-white/70 font-Roboto xl:w-11/12 ">
                    Scrubbe combines powerful security monitoring with automated
                    response capabilities to keep your organization safe from
                    emerging threats.
                  </div>
                </CardBody>
                <CardFooter className="mt-8 w-full">
                  <div className="space-x-4 w-full flex justify-center xl:justify-start">
                    <Button
                      className="bg-blue-600 text-white font-semibold  font-Inter  text-md rounded-sm"
                      size="lg"
                    >
                      Start free trial
                    </Button>
                    <Button
                      className=" text-white font-Inter font-semibold border-white  text-md rounded-sm"
                      color="secondary"
                      variant="bordered"
                      size="lg"
                    >
                      See Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="w-full h-fit flex px-2 gap-4 xl:px-0 items-center justify-center xl:grid xl:grid-cols-3 py-10">
              <div className="py-1 xl:px-4 flex justify-center col-span-1 flex-col space-y-2 xl:border-l-2 xl:border-l-green-400">
                <span className="font-Poppins text-white font-bold text-3xl tracking-wide">
                  98.7%
                </span>
                <div className="text-xs xl:text-md font-normal font-Montserrat text-white/60">
                  Threat Detection
                </div>
              </div>
              <div className="py-1 xl:px-4 flex justify-center items-center xl:item-start col-span-1 flex-col space-y-2 xl:border-l-2 xl:border-l-green-400">
                <span className="w-fit h-fit  font-Poppins text-white font-bold text-3xl tracking-wide">
                  87%
                </span>
                <div className="text-sm xl:text-md font-normal font-Montserrat text-white/60">
                  Faster Response
                </div>
              </div>
              <div className="py-1 xl:px-4 flex justify-center  sm:items-center col-span-1 flex-col space-y-2 xl:border-l-2 xl:border-l-green-400">
                <span className="font-Poppins text-white font-bold text-3xl tracking-wide whitespace-nowrap">
                  Tons of
                </span>
                <div className="text-sm xl:text-md font-normal font-Montserrat text-white/60 ">
                  Integrations
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1  flex justify-center items-center w-full">
            <div className="px-4 xl:px-0 w-full">
              <Banner />
            </div>
          </div>
        </div>
      </div>
      <SecurityFeatures />

      <SecurityIntelligence />

      <SeamlessIntegrations />

      <CompromiseChecker />

      <Integration />

      <ChartScroll />

      <ScrubbeHighlights />
    </MainLayout>
  );
}

export default HomePage;
