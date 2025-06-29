"use client";
import React from "react";
import CButton from "../ui/Cbutton";
import { X } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const MachineDetection = () => {
  return (
    <section className="h-full bg-gradient-to-b from-white to-gray-50 px-4 md:px-6 lg:px-20 xl:px-20 py-20 relative overflow-clip">
      <div className=" max-w-[1440px] mx-auto space-y-8 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold  text-center mb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            From Human Intent to Machine Detection{" "}
            <br className=" md:block hidden" /> Instantly
          </motion.h2>
          <motion.div
            className="w-24 h-2 bg-teal-400 mx-auto mb-12 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </motion.div>
        <motion.div
          className="flex flex-col-reverse md:grid md:grid-cols-2 w-full min-h-[520px] rounded-xl overflow-clip"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.18 }}
        >
          <motion.div
            className="  w-full relative flex justify-center items-center py-5"
            variants={textVariants}
            custom={0}
          >
            <div className=" bg-colorScBlue absolute h-full w-[50%] left-0" />
            <div className=" bg-colorScLightBlue absolute h-full w-[50%] right-0" />

            <div className="md:w-[80%] w-full h-[80%] bg-white z-10 rounded-md p-4 space-y-3 shadow-xl md:scale-100 scale-80">
              <div className=" p-2 rounded-full bg-neutral-100 w-fit float-end">
                <X size={15} />
              </div>
              <p className=" font-medium pt-5">Natural Language Rule Input</p>
              <div className=" space-y-1">
                <p className=" text-sm">Natural Language Rule</p>
                <div className=" border border-zinc-200 p-2 py-3 rounded-md text-xs">
                  <TypeAnimation
                    sequence={[
                      `eg if a user logs in more than 5 times from a new location, send an alert to SOC analyst`, // Types 'One'
                      2000, // Waits 1s
                      `eg if a user logs in more than 5 times from a new location, send an alert to SOC analyst.`, // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      `eg if a user logs in more than 5 times from a new location, send an alert to SOC analyst..`,
                      2000, // Types 'Three' without deleting 'Two'
                      () => {},
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="link"
                    style={{ display: "inline-block", fontSize: "12px" }}
                  />
                </div>
              </div>
              <div className=" space-y-1">
                <p className=" text-sm">Execution Date and Time </p>
                <div className=" border border-zinc-200 p-2 py-3 rounded-md text-xs">
                  <TypeAnimation
                    sequence={[
                      `06/06/25 11:41 am`, // Types 'One'
                      2000, // Waits 1s
                      `06/06/25 11:41 am`, // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      `06/06/25 11:41 am.`,
                      2000, // Types 'Three' without deleting 'Two'
                      () => {},
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="link"
                    style={{ display: "inline-block", fontSize: "12px" }}
                  />
                </div>
              </div>
              <div className=" space-y-1">
                <p className=" text-sm">Execution Frequency</p>
                <div className=" border border-zinc-200 p-2 py-3 rounded-md text-xs">
                  Daily
                </div>
              </div>

              <div className=" justify-end flex gap-4">
                <CButton className=" hover:bg-white bg-white border border-colorScBlue text-colorScBlue w-fit text-base h-[40px] ">
                  Close
                </CButton>
                <CButton className=" bg-colorScBlue text-white w-fit text-base h-[40px]">
                  Schedule
                </CButton>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                delay: 4,
                repeatDelay: 4,
                ease: "easeOut",
              }}
              className=" absolute flex flex-col justify-center items-center md:w-[80%] w-full h-[80%] bg-white z-10 rounded-md p-4 space-y-3 shadow-xl md:scale-100 scale-80"
            >
              <img src="/success.svg" />
              <p className=" font-semibold text-xl">Successful</p>
              <p>Alert has been sent successfully to SOC analyst</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-colorScGreen w-full p-8 py-10 space-y-3"
            variants={textVariants}
            custom={1}
          >
            {[
              "Natural Language Rule Input (NLRI) converts everyday language into powerful rules that detect behavioral anomalies, account takeovers, and fraud in real time",
              "Write Security Rules in Plain English",
              "Empower your team to define complex detection logic without code. Scrubbe turns natural language into real-time threat monitoring.",
              "No Code. No Delay. Just Detection.",
              "Create and deploy security rules without writing a single line of code — using clear English that anyone on your team can understand.monitoring.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className={
                  i % 2 === 0
                    ? " text-xl font-medium text-white text-justify md:text-2xl"
                    : i === 2 || i === 4
                    ? " text-white text-lg md:text-xl"
                    : " text-xl font-medium text-white text-justify md:text-2xl"
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <CButton className=" bg-white text-colorScBlue w-fit text-base ">
                Write your first rule
              </CButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MachineDetection;
