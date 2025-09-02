/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";

// Variants for the staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
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

const Contact = () => {
  return (
    <div className="bg-[#00474D]">
      <motion.div
        className="min-h-[400px] py-10 px-4 container mx-auto flex flex-col justify-center items-center gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-white text-4xl md:text-5xl sm:text-4xl font-bold text-center font-bigshotOne"
          variants={itemVariants as any}
        >
          Transform your Devops Today
        </motion.p>
        <motion.p
          className="md:text-lg text-white sm:text-start text-center"
          variants={itemVariants as any}
        >
          Start raising incident via email and collaborating in war rooms
        </motion.p>
        <motion.div
          className="flex sm:flex-row flex-col sm:gap-0 gap-5 items-center mt-3"
          variants={itemVariants as any}
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email for demo"
            className="h-[42px] w-[300px] text-center sm:text-start px-2 bg-white outline-none max-sm:rounded-lg sm:rounded-l-lg"
          />
          <div className="h-[42px] max-sm:rounded-lg sm:rounded-r-lg bg-IMSLightGreen text-white flex items-center px-6 font-semibold cursor-pointer">
            Schedule a Demo
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
