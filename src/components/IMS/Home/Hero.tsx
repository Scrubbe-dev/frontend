/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CButton from "@/components/ui/Cbutton";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <div className="h-screen bg-[url('/IMS/hero-bg.png')] bg-cover bg-center flex md:flex-row gap-5 relative z-0">
      <motion.div
        className="container mx-auto flex flex-col justify-center md:items-start items-center h-full p-4 flex-1 z-10 md:pt-0 pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants as any}
          className="border-2 border-[#009FAD] w-fit md:p-3 p-2 rounded-full text-sm text-white bg-gradient-to-b from-[#009FAD] top-[#060809B2]"
        >
          <p>No noise. No runbooks. No “what happened?” at 3 AM.</p>
        </motion.div>
        <motion.div
          variants={itemVariants as any}
          className="text-white text-5xl md:text-6xl font-bigshotOne md:text-start text-center"
        >
          Incident Intelligence <br /> Platform
        </motion.div>
        <motion.p
          variants={itemVariants as any}
          className="text-white text-lg md:text-xl max-w-lg mt-5 md:text-start text-center"
        >
          The first IMS that prevents repeat failures, reconstructs incidents
          automatically and eliminates shift handovers.
        </motion.p>
        <motion.div
          variants={itemVariants as any}
          className="flex flex-row md:justify-start justify-center gap-4 mt-4 md:mt-10 md:max-w-sm w-full"
        >
          <CButton
            onClick={() => router.push("/auth/business-signup")}
            className="  w-full px-5 h-[50px] bg-IMSCyan hover:bg-IMSDarkGreen shadow-none text-base"
          >
            Get Started
          </CButton>
          <CButton className=" w-full px-5  h-[50px] border bg-transparent hover:bg-transparent border-IMSCyan text-IMSCyan shadow-none text-base">
            Book a Demo
          </CButton>
        </motion.div>

        <motion.div
          variants={itemVariants as any}
          className="h-[500px] md:hidden flex"
        >
          <img
            src="/IMS/hero-cubes.png"
            alt="cube-blocks"
            className="h-full object-cover rotate-[-30deg] opacity-70"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className=" max-w-[800px] absolute right-0 md:flex hidden translate-x-[15%]"
      >
        <img
          src="/IMS/hero-cubes.png"
          alt="cube-blocks"
          className="h-screen object-cover rotate-[-30deg] opacity-70"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
