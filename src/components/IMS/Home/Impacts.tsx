/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { IoIosInfinite } from "react-icons/io";
import { motion } from "framer-motion";

// Variants for the text and number cards, with a stagger effect
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5, // Delay the start of child animations
      staggerChildren: 0.3, // Stagger effect for the children
    },
  },
};

const textItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Impacts = () => {
  return (
    <div className="bg-[#162932] py-10 px-4 relative overflow-clip z-10">
      <div className="size-[400px] rounded-full opacity-30 bg-lime-400 absolute left-[10%] -top-[10%] blur-3xl -z-10" />

      <div className="flex gap-10 md:flex-row flex-col container h-full items-center mx-auto min-h-[600px]">
        {/* Animated Icon Section */}
        <motion.div
          className="flex-[.8] flex justify-center items-center h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative flex items-center justify-center z-10">
            <img
              src="/IMS/grid-bg.svg"
              alt=""
              className=" min-w-[500px] h-[500px] absolute -z-20 opacity-20"
            />
            <motion.div
              initial={{
                borderRadius: "100%",
                rotate: 0,
                scale: 1.3,
              }}
              animate={{
                borderRadius: "10%",
                rotate: "45deg",
                scale: 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              className="absolute size-[150px] md:size-[230px] shadow-inner bg-gradient-to-r flex justify-center items-center rounded-lg from-lime-400 to-IMSLightGreen"
            ></motion.div>
            <div className="absolute ">
              <IoIosInfinite className="text-8xl" />
            </div>
          </div>
        </motion.div>

        {/* Animated Text and Cards Section */}
        <motion.div
          className="flex-1 relative z-10"
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute -translate-y-10 -z-10">
            <img src="/IMS/line.svg" alt="" />
          </div>
          <motion.h2
            className="text-white text-4xl md:text-5xl sm:text-4xl font-bold text-center mb-12 font-bigshotOne"
            variants={textItemVariants as any}
          >
            Proven Impact for DevOps & SRE
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              className="h-[133px] rounded-md flex flex-col items-center justify-center p-3 bg-[#243131]"
              variants={textItemVariants as any}
            >
              <p className="text-white text-3xl md:text-4xl sm:text-4xl font-bold text-center font-bigshotOne">
                99.9%
              </p>
              <p className="text-xl text-white text-center">
                Uptime Time with War room
              </p>
            </motion.div>
            <motion.div
              className="h-[133px] rounded-md flex flex-col items-center justify-center p-3 bg-[#243131]"
              variants={textItemVariants as any}
            >
              <p className="text-white text-3xl md:text-4xl sm:text-4xl font-bold text-center font-bigshotOne">
                50%
              </p>
              <p className="text-xl text-white text-center">
                Faster MTTR with AI Insights
              </p>
            </motion.div>
            <motion.div
              className="h-[133px] rounded-md flex flex-col items-center justify-center p-3 bg-[#243131]"
              variants={textItemVariants as any}
            >
              <p className="text-white text-3xl md:text-4xl sm:text-4xl font-bold text-center font-bigshotOne">
                10k+
              </p>
              <p className="text-xl text-white text-center">
                Incidents resolved via integrations
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impacts;
