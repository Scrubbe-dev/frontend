"use client";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TABS = ["General", "Incident", "History"];
const Page = () => {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  return (
    <div className="p-4 gap-5 flex flex-col">
      <p className=" text-2xl font-bold">Changes and Problems</p>

      <div className=" bg-white p-3 rounded-md">
        <div
          className="flex items-center gap-2 w-fit"
          onClick={() => router.back()}
        >
          <ChevronLeft />
          <p>Problem Details</p>
        </div>

        <div className="grid grid-cols-3 gap-8 border-b border-gray-200 mb-6">
          {TABS.map((t, i) => (
            <button
              key={t}
              className={`p-4 text-sm font-medium border-b-2 transition-colors ${
                tab === i
                  ? "border-IMSLightGreen text-IMSLightGreen"
                  : "border-transparent text-gray-500  dark:text-gray-400 hover:text-green"
              }`}
              onClick={() => setTab(i)}
            >
              {t}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          key={tab}
        >
          {tab === 0 && <></>}
          {tab === 1 && <></>}

          {/* Collaboration Tab */}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
