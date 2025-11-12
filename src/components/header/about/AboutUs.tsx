import React from "react";
import AboutHero from "./AboutHero";
import OurMission from "./OurMission";
import WhatWeDo from "./WhatWeDo";
import WhyWeExist from "./WhyWeExist";
import WhoWeServe from "./WhoWeServe";
const AboutUs = () => {
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

export default AboutUs;
