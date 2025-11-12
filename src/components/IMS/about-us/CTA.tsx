import CButton from "@/components/ui/Cbutton";
import React from "react";

const CTA = () => {
  return (
    <div className="bg-[#00474D] py-10 md:px-10 px-5 flex justify-center flex-col items-center gap-7">
      <p className="text-3xl md:text-5xl font-bigshotOne text-white leading-7">
        Ready to make downtime a thing of the past?
      </p>
      <p className=" text-white">Try Scrubbe IMS Today</p>
      <CButton className=" w-fit px-10">Get Started</CButton>
    </div>
  );
};

export default CTA;
