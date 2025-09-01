import React from "react";
import { IoIosInfinite } from "react-icons/io";

const Impacts = () => {
  return (
    <div className=" bg-[#162932]  py-10 px-4 relative overflow-clip z-10">
      <div className=" size-[400px] rounded-full opacity-30 bg-lime-400 absolute left-[10%] -top-[10%] blur-3xl -z-10" />
      <div className=" flex gap-4 container h-full items-center mx-auto min-h-[600px]">
        <div className="flex-[.8] flex justify-center items-center h-full">
          <div className=" relative rotate-45 size-[230px] shadow-inner bg-gradient-to-r flex justify-center items-center rounded-lg from-lime-400 to-IMSLightGreen">
            <div className="absolute -rotate-45">
              <IoIosInfinite className=" text-8xl" />
            </div>
          </div>
        </div>
        <div className="flex-1 relative z-10">
          <div className=" absolute -translate-y-10 -z-10">
            <img src="/IMS/line.svg" alt="" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl sm:text-4xl font-bold  text-center mb-12 font-bigshotOne">
            Proven Impact for DevOps & SRE
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-[133px] rounded-md flex flex-col items-center justify-center p-3 bg-[#243131]">
              <p className="text-white text-3xl md:text-4xl sm:text-4xl font-bold  text-center font-bigshotOne">
                99.9%
              </p>
              <p className=" text-xl text-white text-center">
                Uptime Time with War room
              </p>
            </div>
            <div className="h-[133px] rounded-md flex flex-col items-center justify-center p-3 bg-[#243131]">
              <p className="text-white text-3xl md:text-4xl sm:text-4xl font-bold  text-center font-bigshotOne">
                50%
              </p>
              <p className=" text-xl text-white text-center">
                Faster MTTR with AI Insights
              </p>
            </div>
            <div className="h-[133px] rounded-md flex flex-col items-center justify-center p-3 bg-[#243131]">
              <p className="text-white text-3xl md:text-4xl sm:text-4xl font-bold  text-center font-bigshotOne">
                10k+
              </p>
              <p className=" text-xl text-white text-center">
                Incidents resolved via integrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impacts;
