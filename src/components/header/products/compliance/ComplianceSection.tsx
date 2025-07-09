import React from "react";
import ComplianceHero from "./ComplianceHero";
import ComplianceFeature from "./ComplianceFeature";
import ComplianceStandard from "./ComplianceStandard";
const ComplianceSection = () => {
  return (
    <div className="bg-white">
      <ComplianceHero />
      <ComplianceFeature />
      <ComplianceStandard />
    </div>
  );
};

export default ComplianceSection;
