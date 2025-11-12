import React from "react";

const OurMission = () => {
  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
      <div className="text-center mb-4">
        <h2 className="text-[20px] font-bigshotOne sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          Our Mission and Vision
        </h2>

        <p className=" text-base text-center max-w-2xl">
          We exist to make resilience effortless.Scrubbe was born from
          real-world experience managing outages, sleepless nights, and broken
          SLAs. We help teams move from firefighting to foresight detecting
          incidents early, reducing MTTR, and preventing downtime across
          distributed systems.
        </p>
      </div>
      <div className="grid sm:grid-cols-3  gap-5">
        <div className="bg-colorScGreen text-white p-5 rounded-lg space-y-3">
          <p className=" text-lg font-bold">Our Mission</p>
          <p>
            From morning rush to the 11 p.m. finish line, we guarantee
            operational perfection.
          </p>
        </div>
        <div className="bg-colorScIndigo text-white p-5 rounded-lg space-y-3">
          <p className=" text-lg font-bold">Our Vision</p>
          <p>
            To be the most trusted reliability platform powering modern DevOps,
            SRE, and IT ecosystems.
          </p>
        </div>
        <div className="bg-[#42004C] text-white p-5 rounded-lg space-y-3">
          <p className=" text-lg font-bold">Promise</p>
          <p>Every incident, resolved smarter and faster.</p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
