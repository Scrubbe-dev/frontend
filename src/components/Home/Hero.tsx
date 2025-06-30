"use client";
import React, { useEffect, useState } from "react";
import CButton from "../ui/Cbutton";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Connect",
    description:
      "Detect, investigate, and respond to fraud, account takeovers, and behavioral anomalies with AI-powered precision.",
  },
  {
    number: 2,
    title: "Analyze",
    description:
      "Scrubbe delivers full stack threat intelligence from raw logs to analyst ready insights without the noise",
  },
];
const Hero = () => {
  const [activeStep, setActiveStep] = useState(1);
  console.log(activeStep);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length) {
          return 1; // Reset to 1 when reaching the end
        }
        return prev + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const step = steps[activeStep - 1];

  return (
    <section className=" bg-white px-4 md:px-6 lg:px-20 xl:px-20 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className=" max-w-[1440px] mx-auto h-full lg:h-[600px] bg-[#6A5ACD] rounded-[40px] flex lg:flex-row flex-col relative overflow-clip"
      >
        <div className="sm:p-10 p-4 lg:h-[80%] h-[749px] flex flex-col items-center lg:items-start md:justify-center gap-5 lg:gap-10 z-20">
          <h1 className=" text-white xl:text-5xl  md:text-4xl text-2xl  font-bold lg:text-start text-center pt-3">
            Scrubbe – Your On-Demand <br className=" md:block hidden" /> AI
            Security Analyst for Real- <br className=" md:block hidden" />
            Time Threat Detection
          </h1>
          <div className="flex   flex-col space-y-6 sm:space-y-8">
            {
              <div
                key={step.number}
                className={`flex justify-center items-start transition-all duration-300 ${
                  activeStep === step.number ? "scale-[1.02]" : ""
                }`}
              >
                <div className="relative flex-shrink-0 w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] rounded-full bg-white flex items-center justify-center mr-4 sm:mr-5">
                  <span className="text-[20px] md:text-[24px] font-bold">
                    {step.number}
                  </span>
                  {activeStep === step.number && (
                    <div
                      className="absolute inset-0 rounded-full border-4 border-transparent 
                        animate-[spin_4s_cubic-bezier(0.4,0,0.2,1)_infinite]
                        border-t-[#1F3A89]"
                    />
                  )}
                </div>

                <div className="">
                  <p
                    className={`${
                      activeStep === step.number ? "text-white" : "text-white"
                    } text-lg sm:text-xl leading-relaxed max-w-lg font-medium 2xl:w-full lg:w-[56%] w-full`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            }
          </div>
          <div className=" flex items-center lg:justify-start justify-center md:flex-row flex-col gap-4 w-full">
            <CButton className=" md:w-fit w-full">Get a Demo</CButton>
            <CButton className=" md:w-fit w-full bg-white text-colorScBlue hover:bg-white">
              View AI dashboard
            </CButton>
          </div>
        </div>
        <div className=" h-[300%] bg-white w-[50%] absolute -top-[100%] lg:block hidden lg:-right-[10%] xl:-right-[15%] 2xl:-right-[22%]  rotate-45" />
        <div className=" h-[100%] bg-white w-[50%] absolute left-[30%]  min-[400px]:bottom-[-17%] bottom-[-14%] block sm:hidden min-[472px]:rotate-[75deg] min-[400px]:rotate-[72deg] rotate-[69deg]" />
        <div>
          <img
            src="/Hero2.png"
            alt=""
            className=" lg:block hidden absolute right-0 max-w-[800px] h-full rounded-r-[40px] xl:scale-110 object-cover"
          />

          <img
            src="/hero_small.png"
            alt=""
            className=" block md:hidden absolute bottom-0 w-full  h-[400px] brightness-50 rounded-b-[40px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
