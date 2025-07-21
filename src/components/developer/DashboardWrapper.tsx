"use client";
import React from "react";
import Navbar from "../dashboard/Navbar";
import Sidebar from "./Sidabar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen dark:bg-[#111827] bg-white overflow-clip">
      <div className="flex w-full h-full">
        <Sidebar type="developer" />
        <div className="w-full h-full">
          <Navbar />
          <div className="w-full bg-[#F9FAFB] dark:bg-[#1F2937] h-[calc(100vh-80px)] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
