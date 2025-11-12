import AboutHero from "../about-us/AboutHero";
import CTA from "../about-us/CTA";
import Impact from "../about-us/Impact";
import OurMission from "../about-us/OurMission";
import WhoWeServe from "../about-us/WhoWeServe";
import WhyChooseScrubbe from "../about-us/WhyChooseScrubbe";
import WhyWeExist from "../about-us/WhyWeExist";

const IncidentAboutUs = () => {
  return (
    <div className=" bg-white">
      <AboutHero />
      <OurMission />
      {/* <WhatWeDo /> */}
      <WhyWeExist />
      <WhoWeServe />
      <WhyChooseScrubbe />
      <Impact />
      <CTA />
    </div>
  );
};

export default IncidentAboutUs;
