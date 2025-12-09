/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CButton from "@/components/ui/Cbutton";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React from "react";

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

const referenceImages = [
  "cicd-aware",
  "logs",
  "metrics",
  "fraud-risk",
  "magic-insight",
  "on-call",
];

const ApiReference = () => {
  const router = useRouter();
  return (
    <div className="min-h-[700px] bg-[#060709]">
      <motion.div
        className="container mx-auto py-10 px-5 flex-col gap-6 flex max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.h2
            variants={itemVariants as any}
            className=" text-4xl md:text-5xl text-white font-bigshotOne text-center"
          >
            API-First Incident Management
          </motion.h2>
          <p className=" text-white text-base text-center max-w-xl">
            Scrubbe plugs directly into your CI/CD, logs, metrics, fraud
            systems, and sensors. These examples are real integration patterns
            teams use in production.
          </p>
          <motion.div
            variants={itemVariants as any}
            className="flex flex-row md:justify-start justify-center gap-4 md:max-w-sm w-full mt-3"
          >
            <CButton
              onClick={() => router.push("/auth/business-signup")}
              className="  w-full px-5 h-[45px] bg-IMSCyan hover:bg-IMSCyan shadow-none text-base"
            >
              Get API Keys
            </CButton>
            <CButton className=" w-full px-5  h-[45px] border bg-transparent hover:bg-transparent border-IMSCyan text-IMSCyan shadow-none text-base">
              View full API Reference{" "}
            </CButton>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10  place-content-center mt-4">
          {referenceImages.map((referenceImage) => (
            <div key={referenceImage} className="relative group z-10">
              <div className="w-full h-full absolute -z-10 bg-IMSCyan scale-50 group-hover:scale-80 blur-3xl transition-all duration-200 ease-linear" />
              <motion.img
                src={`/IMS/${referenceImage}.svg`}
                alt=""
                className="w-full   z-10"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ApiReference;
