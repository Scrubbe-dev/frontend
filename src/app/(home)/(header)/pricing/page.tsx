import EzraAddons from "@/components/header/pricing/EzraAddons";
import GetInTouch from "@/components/header/pricing/GetInTouch";
import MainPricing from "@/components/header/pricing/MainPricing";
import React from "react";

const page = () => {
  return (
    <div>
      <MainPricing />
      <EzraAddons />
      <GetInTouch />
    </div>
  );
};

export default page;
