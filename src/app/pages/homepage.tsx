"use client";
import Banner from "@/components/banner";
import MainLayout from "@/components/main-layout";
import SecurityFeatures from "@/components/SecurityFeatures";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@heroui/react";
import React from "react";
import { integrationData } from "@/features/home/integration/dto/integration-data";
import { FlipWords } from "@/components/animation/flip-words";
import { Meteors } from "@/components/animation/meteors";
import { AnimatingButton } from "@/components/animation/moving-border";
import { Timeline } from "@/components/animation/timeline";
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

  const data = [
    {
      title: "1. Allow initialization with custom settings",
      content: (
        <div className="w-full space-y-4">
          <div className="font-thin font-Montserrat text-sm xl:text-lg">
            Configuration Options using Javascript:
          </div>
          <div className="w-3/6 overflow-x-scroll xl:w-full h-fit">
            <CodeDisplay
              code={`import { ScrubbeDashboard } from 'scrubbe-dashboard';
                  const dashboard = new ScrubbeDashboard({
                    apiKey: 'YOUR_API_KEY',
                    tenant: 'customer-name',
                    theme: 'light',
                    modules: ['alerts', 'incidents', 'reporting']
                  });
                `}
              language={"javascript"}
              showLineNumbers={true}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2. React Integration",
      content: (
        <div className="w-full space-y-4">
          <div className="font-thin font-Montserrat text-sm xl:text-lg">
            Create a new dashboard configuration file:
          </div>
          <div className="w-3/6 overflow-x-scroll xl:w-full h-fit">
            <CodeDisplay
              code={`import { ScrubbeDashboard, AlertsWidget } from '@scrubbe/react-components';
                      function SecurityDashboard() {
                        return (
                          ScrubbeDashboard apiKey="YOUR_API_KEY" 
                        );
                      }
                `}
              language={"javascript"}
              showLineNumbers={true}
            />
          </div>
        </div>
      ),
    },
  ];

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
                <span className="font-Poppins text-white font-bold text-3xl tracking-wide">
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

      <div className="w-full min-h-full">
        <div className="min-h-full w-full flex items-center flex-col  py-32">
          <div className="container w-full h-full">
            <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
              <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl  xl:text-4xl font-semibold ">
                Security Intelligence In Action
              </div>
              <div className="bg-[#10b981] h-1 w-16 rounded-full "></div>
            </div>

            <div className="w-full h-full flex items-center  justify-center py-8">
              <span className="h-fit xl:w-3/6 text-wrap text-center text-md text-muted-foreground px-2 xl:px-0 font-Raleway font-[500] ">
                Experience how Scrubbe collects and analyzes device and network
                data to enhance security monitoring.
              </span>
            </div>

            <div className="w-full flex items-center justify-center mt-6">
              <div className="w-11/12 h-fit">
                <Card className="w-full ">
                  <CardHeader>
                    <div className="w-full p-8">
                      <div className="w-full h-fit space-y-2">
                        <div className="w-fit h-fit font-Poppins text-slate-800 font-bold text-lg">
                          Your Device Fingerprint
                        </div>
                        <div className="text-sm font-Poppins font-[400]  text-muted-foreground">
                          Below is a sample of the type of data Scrubbe can
                          collect and analyze to identify potential security
                          threats:
                        </div>
                      </div>
                      <div className="w-full grid-cols-2 grid xl:grid-cols-4  gap-5 py-5">
                        <div className="hover:-translate-y-2 hover:shadow-medium transition-all hover:transition rounded-xl col-span-1 xl:min-h-[130px] bg-slate-100 border-l-2 py-4 border-l-blue-400">
                          <div className="w-full h-full flex flex-col justify-center space-y-4 px-4">
                            <div className="xl:text-[12px] font-semibold font-Poppins text-muted-foreground  text-slate-700">
                              VPN Status
                            </div>
                            <div className="font-Poppins text-md font-normal line-clamp-2">
                              Not Decteted
                            </div>
                          </div>
                        </div>
                        <div className="hover:-translate-y-2 hover:shadow-medium transition-all hover:transition rounded-xl col-span-1 xl:min-h-[130px] bg-slate-100 border-l-2 border-l-blue-400">
                          <div className="w-full h-full flex flex-col justify-center space-y-4 px-4">
                            <div className="xl:text-[12px] font-semibold font-Poppins text-muted-foreground  text-slate-700">
                              Device Type
                            </div>
                            <div className="font-Poppins text-md font-normal line-clamp-2">
                              Desktop
                            </div>
                          </div>
                        </div>
                        <div className="hover:-translate-y-2 hover:shadow-medium transition-all hover:transition rounded-xl col-span-1 xl:min-h-[130px] bg-slate-100 border-l-2 border-l-blue-400">
                          <div className="w-full h-full flex flex-col justify-center space-y-4 px-4">
                            <div className="xl:text-[12px] font-semibold font-Inter text-muted-foreground  text-slate-700">
                              Timestamp
                            </div>
                            <div className="font-Poppins text-md font-normal line-clamp-2">
                              4/3/2025, 10:36:42 AM
                            </div>
                          </div>
                        </div>
                        <div className="hover:-translate-y-2 hover:shadow-medium transition-all hover:transition rounded-xl col-span-1 xl:min-h-[120px] bg-slate-100 border-l-2 border-l-blue-400">
                          <div className="w-full h-full flex flex-col justify-center space-y-4 px-4">
                            <div className="xl:text-[12px] font-semibold font-Inter text-muted-foreground  text-slate-700">
                              OS Model
                            </div>
                            <div className="font-Poppins text-md font-normal line-clamp-2">
                              Win32
                            </div>
                          </div>
                        </div>

                        <div className="hover:-translate-y-2 hover:shadow-medium transition-all hover:transition rounded-xl col-span-1 xl:min-h-[120px] bg-slate-100 border-l-2 border-l-blue-400">
                          <div className="w-full h-full flex flex-col justify-center space-y-4 px-4">
                            <div className="xl:text-[12px] font-semibold font-Poppins text-muted-foreground  text-slate-700">
                              IP Address
                            </div>
                            <div className="font-Poppins text-md font-normal line-clamp-2">
                              192.168.x.x (masked)
                            </div>
                          </div>
                        </div>
                        <div className="hover:-translate-y-2 hover:shadow-medium transition-all hover:transition rounded-xl col-span-1 xl:min-h-[100px] bg-slate-100 border-l-2 border-l-blue-400">
                          <div className="w-full h-full flex flex-col justify-center space-y-4 px-4">
                            <div className="xl:text-[12px] font-semibold font-Inter text-muted-foreground  text-slate-700">
                              Region/City
                            </div>
                            <div className="font-Poppins text-md font-normal line-clamp-2">
                              Unknown (Demo)
                            </div>
                          </div>
                        </div>
                        <div className="hover:-translate-y-2 hover:shadow-medium transition-all hover:transition rounded-xl col-span-1 xl:min-h-[130px] bg-slate-100 border-l-2 border-l-blue-400">
                          <div className="w-full h-full flex flex-col justify-center space-y-4 px-4">
                            <div className="xl:text-[12px] font-semibold font-Inter text-muted-foreground  text-slate-700">
                              Browser Information
                            </div>
                            <div className="font-Poppins text-md font-normal line-clamp-2">
                              Mozilla/5.0 (Windows NT 10.0; Win64; x64...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full xl:py-10">
        <div className="h-full w-full flex items-center flex-col">
          <div className="container w-full h-full">
            <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
              <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl  xl:text-4xl font-semibold ">
                Seamless Integrations
              </div>
              <div className="bg-[#10b981] h-1 w-16 rounded-full "></div>
            </div>

            <div className="w-full h-full flex items-center  justify-center py-8">
              <span className="h-fit xl:w-3/6 text-wrap text-center text-md text-muted-foreground px-2 xl:px-0 font-Raleway font-[500] ">
                Scrubbe connects with your existing security and cloud
                infrastructure to provide comprehensive visibility and control.
              </span>
            </div>

            <div className="w-full flex items-center justify-center mt-6">
              <div className=" w-11/12 h-fit grid grid-cols-2 xl:grid-cols-5 gap-6 py-10">
                {integrationData.map((item, index) => (
                  <Card
                    className="col-span-1 transition-all hover:-translate-y-2  hover:transition-all"
                    key={index}
                  >
                    <CardHeader>
                      <div className="w-full  flex-col flex items-center justify-center ">
                        <div className="flex h-[100px] items-center justify-center w-full">
                          <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center">
                            {item.icon}
                          </div>
                        </div>
                        <div className="w-full h-fit flex items-center space-y-3 my-4 flex-col justify-center">
                          <div className="font-Raleway font-bold text-xl">
                            {item.title}
                          </div>
                          <div className="w-5/6 items-center font-Poppins  text-center text-sm font-thin text-muted-foreground">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full bg-slate-100  pb-12 px-2 overflow-x-hidden">
        <div className="min-h-screen xl:h-screen w-full flex items-center flex-col xl:pt-28">
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-full w-full flex justify-center ">
              <Card className="w-full xl:w-5/6 h-screen xl:h-full my-10 xl:my-0">
                <CardBody className="p-0 m-0 w-full">
                  <div className="w-full h-full grid xl:grid-cols-5">
                    <div
                      className="xl:col-span-3 w-full h-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, #1e293b, #1e40af)",
                      }}
                    >
                      <div className="w-full h-full">
                        <div className="w-full h-full flex items-center space-y-4 flex-col justify-center">
                          <div className=" text-center font-semibold font-Roboto tracking-wide text-3xl text-white">
                            {" "}
                            Scrubbe Compromise Checker
                          </div>
                          <div className="w-full h-fit text-md font-Raleway  flex items-center justify-center text-center">
                            <span className="w-4/6  h-fit text-center text-muted-foreground">
                              Check if your email or IP address has been
                              compromised in a data breach. Our system scans
                              across multiple breach databases to identify
                              potential security risks.
                            </span>
                          </div>

                          <div className="w-full flex items-center justify-center pt-10">
                            <AnimatingButton
                              containerClassName="xl:w-[280px] w-[263px]"
                              className="xl:w-[278px] w-[260px] bg-black font-Poppins "
                            >
                              Get Started
                            </AnimatingButton>
                          </div>
                        </div>
                        <div className="hidden">
                          <Meteors number={30} />
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-2 w-full px-6  h-full flex flex-col  items-center justify-center">
                      <div className="py-5 h-fit w-full">
                        <Input
                          label="Email Address"
                          className="w-full"
                          // labelPlacement="outside"

                          classNames={{}}
                          size="lg"
                          placeholder="Enter your email"
                          type="email"
                        />
                      </div>

                      <div className="h-fit w-full">
                        <Input
                          label="IP Address (optional)"
                          className="w-full"
                          //  labelPlacement="outside"

                          classNames={{}}
                          size="lg"
                          placeholder="Enter your IP Address (eg., 192.168.1.1 )"
                          type="text"
                        />
                      </div>
                      <div className="w-full h-fit py-10">
                        <Button
                          size="lg"
                          className="bg-blue-900 uppercase font-Poppins text-sm rounded-sm w-full text-white"
                        >
                          Check for breaches
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen pt-20 xl:pt-32">
        <div className="h-full w-full flex items-center flex-col">
          <div className="container w-full h-full">
            <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
              <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl  xl:text-4xl font-semibold ">
                Quick Installation Guide
              </div>
              <div className="bg-[#10b981] h-1 w-16 rounded-full "></div>
            </div>

            <div className="w-full h-full flex items-center  justify-center py-8">
              <span className="h-fit xl:w-3/6 text-wrap text-center text-md text-muted-foreground px-2 xl:px-0 font-Raleway font-[500] ">
                Get started with Scrubbe in just a few minutes with our simple
                installation process.
              </span>
            </div>

            <div className="w-full flex items-center justify-center ">
              <div className=" w-11/12 h-fit grid ">
                <Timeline data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
