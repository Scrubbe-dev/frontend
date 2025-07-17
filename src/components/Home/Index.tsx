import React, { Suspense } from "react";
import Hero from "./Hero";
import FraudAnalyst from "./FraudAnalyst";
import MachineDetection from "./MachineDetection";
import SecurityStack from "./SecurityStack";
import DetectionStack from "./DetectionStack";
import Fingerprint from "./Fingerprint";
import CTA from "./CTA";
import Brands from "./Brands";
import EzraConversation from "./EzraConversation";

const Index = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <FraudAnalyst />
      <MachineDetection />
      <SecurityStack />
      <DetectionStack />
      <Fingerprint />
      <EzraConversation />
      <CTA />
      <Brands />
      </Suspense>
    </>
  );
};

export default Index;
