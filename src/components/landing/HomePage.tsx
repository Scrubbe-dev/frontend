"use client";
import Banner from "@/components/banner";
import SecurityFeatures from "@/components/landing/SecurityFeatures";
import SecurityIntelligence from "@/components/landing/SecurityIntelligence";
import SeamlessIntegrations from "@/components/landing/SeamlessIntegrations";
import CompromiseChecker from "@/components/landing/CompromiseChecker";
import Integration from "@/components/landing/Integration";
import ChartHome from "@/components/landing/ChartHome";
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
    <>
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
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-800 text-white 
             font-Inter font-semibold text-md rounded-sm"
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
            <aside className="w-full h-fit px-2 gap-4 xl:px-0 flex items-center justify-between  py-10">
              <div className="h-[4rem] bg-green-400 w-[2px]"></div>

              <div className="py-1 xl:px-4 flex justify-center col-span-1 flex-col space-y-2 ">
                <span className="font-Poppins text-white font-bold text-3xl tracking-wide">
                  98.7%
                </span>
                <div className="text-xs xl:text-md font-normal font-Montserrat text-white/60">
                  Threat Detection
                </div>
              </div>
              <div className="h-[4rem] bg-green-400 w-[2px]"></div>

              <div className="py-1 xl:px-4 flex justify-center items-center xl:item-start col-span-1 flex-col space-y-2">
                <span className="w-fit h-fit  font-Poppins text-white font-bold text-3xl tracking-wide">
                  87%
                </span>
                <div className="text-sm xl:text-md font-normal font-Montserrat text-white/60">
                  Faster Response
                </div>
              </div>
              <div className="h-[4rem] bg-green-400 w-[2px]"></div>
            </aside>
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

      <ChartHome />

      <ScrubbeHighlights />
    </>
  );
}

export default HomePage;
