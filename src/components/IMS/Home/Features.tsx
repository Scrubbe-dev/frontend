/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger delay for each major section
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Features = () => {
  return (
    <div className=" min-h-[700px] bg-white">
      <motion.div
        className="container mx-auto py-10 px-5 flex-col gap-6 flex"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.p
          className=" text-3xl md:text-5xl text-center max-w-2xl mx-auto font-bigshotOne"
          variants={itemVariants as any}
        >
          Powerful Features for{" "}
          <span className=" text-transparent bg-gradient-to-l bg-clip-text from-IMSDarkGreen to-[#8F166F]">
            DevOps & SRE
          </span>
        </motion.p>

        <motion.div variants={itemVariants as any}>
          <Background>
            <div className="flex gap-4 justify-between items-center h-full md:flex-row flex-col flex-1">
              <div className="flex-[.8] text-white gap-4 flex flex-col">
                <p className=" text-xl font-bold">GitHub & GitLab Sync</p>
                <p>
                  By syncing GitHub and GitLab with Scrubbe IMS, every failed
                  build, broken deployment, or risky change can automatically
                  raise an incident. DevOps teams get real-time visibility,
                  faster MTTD, and shorter MTTR, keeping your CI/CD pipeline
                  smooth and reliable
                </p>
              </div>

              <div className="flex-1">
                <img src="/IMS/github-gitlab.png" alt="" />
              </div>
            </div>
          </Background>
        </motion.div>

        <motion.div
          variants={itemVariants as any}
          className="grid xl:grid-cols-2 gap-10"
        >
          {/* War Room */}
          <div className=" min-h-[300px] rounded-lg w-full p-4  bg-[#F4F6F3] relative z-10 overflow-clip">
            <div className=" absolute -z-10 bottom-0">
              <img src="/IMS/orb2.svg" alt="" className=" " />
            </div>
            <div className="flex gap-4 sm:flex-row flex-col  z-10">
              <div className="flex-1 gap-3 flex flex-col">
                <p className=" text-xl font-bold">War Room Creation</p>
                <p>
                  Spin up a War Room in seconds align your teams when it matters
                  most. When a critical incident strikes, speed and coordination
                  are everything. Scrubbe IMS lets you instantly create a War
                  Room — a dedicated collaboration space where engineers, SREs,
                  and support teams can resolve issues together.
                </p>
              </div>

              <div className=" relative flex justify-center items-center flex-1 pt-6">
                <div className=" size-[200px] flex justify-center items-center">
                  <motion.img
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    src="/IMS/rooms.svg"
                    alt=""
                    className="absolute"
                  />
                  <img src="/IMS/sheild.svg" alt="" className="absolute" />
                </div>
              </div>
            </div>
          </div>
          <div className=" min-h-[300px] sm:flex-row flex-col  rounded-lg w-full p-4  bg-[#F4F6F3] relative z-10 overflow-clip">
            <div className=" absolute -z-10 bottom-0">
              <img src="/IMS/orb2.svg" alt="" className=" " />
            </div>
            <div className="flex gap-4 sm:flex-row flex-col">
              <div className="flex-1 gap-3 flex flex-col">
                <p className=" text-xl font-bold">Multi-Channel Alerts</p>
                <p>
                  Never miss a critical alert reach your team on any channel,
                  every time. Scrubbe IMS ensures your team gets notified
                  instantly wherever they are. Incidents don’t wait, and neither
                  should alerts.
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className=" flex-1 flex flex-col gap-3 "
              >
                <motion.img
                  variants={itemVariants as any}
                  src="/IMS/alert1.png"
                  alt=""
                  className=" -translate-x-5"
                />
                <motion.img
                  variants={itemVariants as any}
                  src="/IMS/alert2.png"
                  alt=""
                />
                <motion.img
                  variants={itemVariants as any}
                  src="/IMS/alert3.png"
                  alt=""
                  className=" -translate-x-5"
                />
              </motion.div>
            </div>{" "}
          </div>
          <div className=" min-h-[500px] sm:min-h-[300px] h-full sm:max-h-[300px] rounded-lg w-full p-4  bg-[#F4F6F3] relative z-10 overflow-clip">
            <div className=" absolute -z-10 bottom-0">
              <img src="/IMS/orb2.svg" alt="" className=" " />
            </div>
            <div className="flex gap-4 sm:flex-row flex-col-reverse">
              <div className=" flex-1 flex flex-col gap-3 relative ">
                <img
                  src="/IMS/Notifications.png"
                  alt=""
                  className=" absolute"
                />
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  className=" absolute flex flex-col items-center top-24"
                >
                  <motion.img
                    variants={itemVariants as any}
                    src="/IMS/alert4.png"
                    alt=""
                    className="w-[95%]"
                  />
                  <motion.img
                    variants={itemVariants as any}
                    src="/IMS/alert5.png"
                    alt=""
                    className="w-[95%]"
                  />
                </motion.div>
              </div>
              <div className="flex-1 gap-3 flex flex-col">
                <p className=" text-xl font-bold">Email Incident Raising</p>
                <p>
                  Raise incidents directly from email in simple, universal,
                  effective way. Not every team lives in GitHub, GitLab, or
                  Slack. With Scrubbe IMS, incidents can be raised just by
                  sending an email. Vendors, support teams, and business units
                  can trigger incidents without logging into the dashboard.
                </p>
              </div>
            </div>{" "}
          </div>
          <div className=" min-h-[300px] rounded-lg w-full p-4  bg-[#F4F6F3] relative z-10 overflow-clip">
            <div className=" absolute -z-10 bottom-0">
              <img src="/IMS/orb2.svg" alt="" className=" " />
            </div>
            <div className="flex gap-4 sm:flex-row flex-col">
              <div className=" flex-1 flex flex-col gap-3 ">
                <img src="/IMS/integration.jpg" alt="" />
              </div>
              <div className="flex-1 gap-3 flex flex-col">
                <p className=" text-xl font-bold">Seamless Integrations</p>
                <p>
                  Connect with Salesforce, ServiceNow, PagerDuty, Jira, and
                  more.{" "}
                </p>
              </div>
            </div>{" "}
          </div>
        </motion.div>

        <motion.div variants={itemVariants as any}>
          <Background>
            <div className="flex  gap-4 items-center justify-between w-full md:flex-row flex-col ">
              <div className=" w-full text-white gap-2 flex flex-col flex-[.6]">
                <p className=" text-3xl font-bold">AI-Driven Insights</p>
                <p>Reduce MTTR with real-time AI resolution suggestions.</p>
              </div>

              <div className="  flex-1">
                <img src="/IMS/ai-message.png" alt="" className="" />
              </div>
            </div>
          </Background>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" min-h-[280px] md:max-h-[280px] flex items-center p-4 md:p-10 rounded-lg bg-IMSDarkGreen w-full relative overflow-clip z-10">
      <div className="z-10 w-full">{children}</div>
      <div className=" absolute bottom-0 h-full w-full flex justify-center z-0">
        <img
          src="/IMS/orb1.svg"
          alt=""
          className="translate-y-[100px] min-w-[500px] scale-110"
        />
      </div>
    </div>
  );
};
