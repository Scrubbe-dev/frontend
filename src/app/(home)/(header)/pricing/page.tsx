import PricingAndAddons from "@/components/header/pricing/EzraAddons";
import PricingTable from "@/components/header/pricing/IMSPricing";
import IMSPricing from "@/components/header/pricing/IMSPricing";
import MainPricing from "@/components/header/pricing/MainPricing";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <IMSPricing /> */}
      <MainPricing/>
      <PricingAndAddons/>
    </div>
  );
};

export default page;
