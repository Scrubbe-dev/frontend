"use client";
import React from "react";
import { motion } from "framer-motion";
import EzraDashboard from "@/components/Home/EzraDashboard/Index";

const SoarHero = () => {
  return (
    <div className="  bg-[#6A5ACD] relative z-0">
      <div className=" bg-black bg-opacity-35 blur-3xl h-[80%] w-full rounded-[100%] absolute left-[-20%] -z-10 top-[-20%]" />
      <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 pt-10">
        <h1 className="text-white md:text-[60px] text-[30px] font-bold">
          SOAR Automation
        </h1>
        <p className="text-white text-center  md:text-lg">
          Respond to incidents faster and smarter with automated{" "}
          <br className="hidden md:block" /> workflows, advanced log analysis,
          and centralized monitoring.
        </p>

        <div className="flex gap-4 text-[14px] sm:text-[16px] mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Request Demo
          </button>
          <button className="border-2 border-blue-500 text-blue-500 bg-white font-medium py-3 px-6 rounded-md transition-colors">
            Learn More
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="md:flex hidden w-full sm:w-[90%] h-[500px] rounded-t-3xl z-10 mt-10 overflow-clip"
        >
          <EzraDashboard path="playbook" />
        </motion.div>

        <img
          src="/playbook_builder.png"
          alt="playbook_builder"
          className="w-full rounded-t-lg md:hidden h-[200px]  md:h-[300px] object-fill"
        />
      </div>
    </div>
  );
};

export default SoarHero;
