import React from "react";
import ComplianceHero from "./ComplianceHero";
import ComplianceFeature from "./ComplianceFeature";
import ComplianceStandard from "./ComplianceStandard";
import ComplianceHowWorks from "./ComplianceHowWorks";
import ComplianceGetStarted from "./ComplianceGetStarted";
const ComplianceSection = () => {
  return (
    <div className="bg-white">
      <ComplianceHero />
      <ComplianceFeature />
      <ComplianceStandard />
      <ComplianceHowWorks />
      <ComplianceGetStarted />
    </div>
  );
};

export default ComplianceSection;
