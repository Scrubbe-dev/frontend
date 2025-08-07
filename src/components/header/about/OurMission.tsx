import React from "react";

const OurMission = () => {
  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
      <div className="text-center mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          Our Mission and Vision
        </h2>
        <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-colorScGreen text-white p-5 rounded-lg space-y-3">
          <p className=" text-lg font-bold">Our Mission</p>
          <p>
            To help businesses detect, respond to, and prevent digital threats
            with explainable AI, natural language rules, and real-time
            automation — without requiring a SOC team.
          </p>
        </div>
        <div className="bg-colorScIndigo text-white p-5 rounded-lg space-y-3">
          <p className=" text-lg font-bold">Our Vision</p>
          <p>
            To become the world&apos;s most accessible, AI-native security
            platform — enabling any company, regardless of size or team, to
            automate threat detection and response like an enterprise
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
