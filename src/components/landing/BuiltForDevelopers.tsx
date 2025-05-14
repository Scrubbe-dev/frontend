import React from "react";
import Image from "next/image";

const BuiltForDevelopers = () => {
  return (
    <div className="w-full mx-auto h-[550px] relative overflow-hidden">
      {/* Custom blue background (top portion) */}
      <div
        className="absolute inset-x-0 top-0 h-[30%] lg:h-[40%]"
        style={{ backgroundColor: "#DBEAFE" }}
        aria-hidden="true"
      />

      {/* White background (bottom portion) */}
      <div
        className="absolute inset-x-0 bottom-0 h-[70%] lg:h-[60%] bg-white"
        aria-hidden="true"
      />

      {/* Floating Stats Bar */}
      <nav className="absolute top-[5%] left-1/2 transform -translate-x-1/2 z-10 w-[90%] flex items-center justify-between text-center text-gray-700 text-xs font-normal">
        {/* Start divider */}
        <div className="h-10 w-px bg-gray-300" />

        {/* Stats */}
        <div className="flex-1 px-2">
          <p className="text-base font-semibold">&lt;5 mins</p>
          <p>Average time to investigate incident</p>
        </div>

        <div className="h-10 w-px bg-gray-300" />

        <div className="flex-1 px-2">
          <p className="text-base font-semibold">90%+</p>
          <p>Analyst satisfaction with UI usability</p>
        </div>

        <div className="h-10 w-px bg-gray-300" />

        <div className="flex-1 px-2">
          <p className="text-base font-semibold">99.9%</p>
          <p>Uptime for dashboard availability</p>
        </div>

        <div className="h-10 w-px bg-gray-300" />

        <div className="flex-1 px-2">
          <p className="text-base font-semibold">&lt;5%</p>
          <p>False positives on automated action</p>
        </div>

        {/* End divider */}
        <div className="h-10 w-px bg-gray-300" />
      </nav>

      {/* Modal component */}
      <article
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                   w-[70%] h-[70%] lg:w-[60%] lg:h-[60%] rounded-[10px] overflow-hidden
                   grid lg:grid-cols-2 grid-cols-1 grid-rows-2 lg:grid-rows-1"
      >
        {/* Left side - appears on top on mobile, left on desktop */}
        <aside className="h-full w-full" style={{ backgroundColor: "#1F2B71" }}>
          <div className="text-white p-8 lg:p-12 flex flex-col justify-center h-full">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Built for developers. Trusted by enterprises. Designed to protect
              what fintechs value most
            </h2>
            <p className="text-sm lg:text-base font-normal leading-relaxed">
              At Scrubbe, we believe cybersecurity should be powerful,
              accessible, and intuitive for everyone not just security experts.
              Our platform is built to empower organizations of all sizes to
              detect, investigate, and respond to threats in real time without
              needing deep technical knowledge.
            </p>
          </div>
        </aside>

        {/* Right side - appears at bottom on mobile, right on desktop */}
        <aside
          className="h-full w-full relative"
          style={{ backgroundColor: "#3C4399" }}
        >
          <div className="absolute inset-0 flex items-center justify-center w-[95%] h-[95%] m-auto">
            <Image
              src="/threats-in-motion.svg"
              alt="Threats in motion illustration"
              fill
              sizes="(min-width: 360px) 100vw"
              className="object-contain"
            />
          </div>
        </aside>
      </article>
    </div>
  );
};

export default BuiltForDevelopers;
