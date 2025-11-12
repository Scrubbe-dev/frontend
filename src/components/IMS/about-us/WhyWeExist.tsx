import React from "react";

const WhyWeExist = () => {
  return (
    <div className="w-full min-h-[600px] relative z-0 bg-[#162932] overflow-clip">
      <div className="size-[400px] rounded-full opacity-30 bg-lime-400 absolute left-[0] top-[6px] blur-3xl -z-10" />

      <div className="max-w-[1440px] mx-auto items-center justify-center h-full grid md:grid-cols-2 gap-5 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
        <div className="text-white space-y-3">
          <p className=" text-2xl md:text-3xl font-bold font-bigshotOne">
            Our Story
          </p>
          <p>
            We built what we wished existed during our toughest on-call hours
          </p>
          <p>
            Our founders came from enterprise IT and incident response
            backgrounds, having led major outage recoveries across banking,
            telecoms, and cloud infrastructure.{" "}
          </p>
          <p>
            They saw teams struggling with fragmented tools — Slack for chat,
            Jira for tickets, Grafana for metrics — and decided to unify
            everything into one intelligent platform: Scrubbe.
          </p>

          <ul className=" list-disc pl-4">
            <li>Founded in 2024, registered in Delaware, based in London.</li>
            <li>
              Supported by a passionate engineering team distributed across
              Africa, Europe, and North America.
            </li>
            <li>
              Designed to empower global teams managing mission-critical
              infrastructure.
            </li>
          </ul>
        </div>
        <div className=" w-full md:h-[500px] h-[400px] bg-gray-700 rounded-lg px-6 pt-6 relative">
          <img
            src="/about-us.png"
            alt="incident management"
            className=" object-cover w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default WhyWeExist;
