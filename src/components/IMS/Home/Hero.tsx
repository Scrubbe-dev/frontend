/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CButton from "@/components/ui/Cbutton";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Animation variants for the staggered fade-in effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay each child's animation by 0.3s
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

const Hero = () => {
  return (
    <div className="h-[800px] bg-[url('/IMS/IncidentHero.png')] bg-cover bg-center">
      <motion.div
        className="container mx-auto flex flex-col justify-center h-full p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants as any}
          className="text-white text-5xl md:text-6xl font-bigshotOne"
        >
          Revolutionize Your <br /> DevOps & SRE <br /> Operations
        </motion.div>
        <motion.p
          variants={itemVariants as any}
          className="text-white text-lg md:text-xl max-w-lg mt-5"
        >
          Empower your IT team with AI-driven insights, war room collaboration,
          and Integration with Github, Gitlab, Slack and More
        </motion.p>
        <motion.div
          variants={itemVariants as any}
          className="flex gap-4 mt-4 md:mt-10"
        >
          <Link
            href={"https://www.scrubbe.com/auth/business-signup"}
            target="_blank"
          >
            <CButton className="w-fit h-[50px] bg-IMSLightGreen text-white hover:bg-IMSDarkGreen shadow-none text-base">
              Get Started
            </CButton>
          </Link>
          <CButton className="w-fit h-[50px] border bg-transparent hover:bg-transparent border-IMSLightGreen text-IMSLightGreen shadow-none text-base">
            Request War Room Demo
          </CButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
