import AboutHero from "@/components/header/about/AboutHero";
import OurMission from "@/components/header/about/OurMission";
import WhatWeDo from "@/components/header/about/WhatWeDo";
import WhoWeServe from "@/components/header/about/WhoWeServe";
import WhyWeExist from "@/components/header/about/WhyWeExist";
import React from "react";
const page = () => {
  return (
    <div className=" bg-white">
      <AboutHero />
      <OurMission />
      <WhatWeDo />
      <WhyWeExist />
      <WhoWeServe />
    </div>
  );
};

export default page;
