import React from "react";

const DashboarHero = () => {
  return (
    <div className="w-full h-[600px] relative z-0 ]">
      <img
        src="/incident_management_bg.png"
        alt="incident management"
        className="w-full h-full object-cover absolute z-[-1] inset-0"
      />
      <div className="w-full h-full bg-[#DBEAFE]/20">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center h-full">
          <h1 className="text-white md:text-[60px] text-[30px] font-bold">
            Scrubbe Dashboard
          </h1>
          <p className="text-white text-center  md:text-lg">
            The central command hub for monitoring, analyzing, and responding to{" "}
            <br className="hidden md:block" /> all security, fraud, and
            compliance events in real-time
          </p>
          <div className="flex gap-4 text-[14px] sm:text-[16px] mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Get Started
            </button>
            <button className="border-2 border-blue-500 text-blue-500 bg-white font-medium py-3 px-6 rounded-md transition-colors">
              View Documentation
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default DashboarHero;
