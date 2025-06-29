"use client";
import React from "react";
import Cbutton from "../ezra-landing/Cbutton";
import { BsSendFill } from "react-icons/bs";
import { motion } from "framer-motion";

const summary = [
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
  {
    incident:
      "Incident: Failed Login Attempt; Priority: High; Action: Block IP, Notify Admin; Impact: Potential Credential Stuffing",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const EzraConversation = () => {
  return (
    <section className="px-4 md:px-6 lg:px-20 xl:px-20 py-20 relative overflow-clip z-10 h-auto bg-[url('/brand_bg.png')] bg-center bg-no-repeat bg-cover">
      <div className="bg-[url('/talk_bg.png')] bg-center bg-no-repeat bg-cover absolute inset-0 -z-10 " />
      <div className=" max-w-[1440px] mx-auto gap-y-8 flex flex-col items-center ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center w-full"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold  text-center mb-2 text-white"
            variants={itemVariants}
          >
            Talk to Ezra. Investigate Threats in Plain English
          </motion.h2>
          <motion.div
            className="w-24 h-2 bg-teal-400 mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className=" text-lg text-white font-medium text-center mt-3"
            variants={itemVariants}
          >
            Security conversations supercharged with Ezra
          </motion.p>
          <motion.div
            className=" w-full bg-black h-[400px] md:h-[700px] rounded-lg overflow-clip flex flex-col relative mt-10 "
            variants={itemVariants}
          >
            <div className=" h-6 w-full bg-colorScBlue" />
            <div className=" flex-1 flex flex-col w-full h-full gap-4 p-5">
              <div className="flex-1 flex flex-col gap-3 w-full mt-4 h-full">
                <div className="flex justify-end">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      type: "spring",
                      duration: 0.4,
                      delay: 1,
                      damping: 4,
                      stiffness: 60,
                    }}
                    className=" bg-zinc-600 w-fit p-2 rounded-md rounded-tl-none"
                  >
                    <p className=" text-[50%] sm:text-[100%] text-white">
                      Era summarize the incident for today
                    </p>
                    <p className=" text-[30%] sm:text-[80%] text-white text-end">
                      {new Date(Date.now()).toISOString()}
                    </p>
                  </motion.div>
                </div>
                <div className="flex h-[60%] sm:h-[70%] md:max-h-[500px] ">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      type: "spring",
                      duration: 0.4,
                      delay: 2,
                      damping: 4,
                      stiffness: 40,
                    }}
                    className="md:w-[50%] w-[60%] h-[90%] bg-[#23489B] rounded-lg p-3 space-y-2"
                  >
                    <p className=" text-white font-medium text-[60%] sm:text-[100%] ">
                      Incident Summary for today{" "}
                    </p>
                    <div className=" w-full bg-white max-h-[85%] overflow-scroll rounded-md p-4">
                      <div className=" w-[70%] space-y-2">
                        {summary.map((item, index) => (
                          <motion.p
                            key={index}
                            className=" text-[50%] sm:text-[80%]  text-zinc-500"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                              duration: 0.3,
                              delay: 2.2 + index * 0.05,
                            }}
                          >
                            {item.incident}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                    <p className=" text-white text-[60%] sm:text-[100%]  text-end">
                      {new Date(Date.now()).toISOString()}
                    </p>
                  </motion.div>
                </div>
                <div
                  className="flex gap-3 items-center absolute w-[95%] bottom-10"
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true, amount: 0.3 }}
                  // transition={{ duration: 0.7, delay: 2.8 }}
                >
                  <div className=" flex-1 bg-zinc-800 flex gap-3 items-center border border-zinc-600 rounded-lg h-10 px-2">
                    <img src="ezrastar.svg" />
                    <p className="  text-zinc-400 text-[70%] sm:text-[100%] ">
                      Ask Ezra to summarise incidents for today
                    </p>
                  </div>
                  <div className=" size-10 rounded-lg flex justify-center items-center bg-colorScBlue">
                    <BsSendFill className=" text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="mt-8" variants={itemVariants}>
            <Cbutton>Start Investigation with Ezra</Cbutton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EzraConversation;
