import EzraAddons from "@/components/header/pricing/EzraAddons";
import GetInTouch from "@/components/header/pricing/GetInTouch";
import IMSPricing from "@/components/header/pricing/IMSPricing";
import MainPricing from "@/components/header/pricing/MainPricing";
import FAQ from "@/components/header/products/authentication-sdk/FAQ";
import React from "react";

const IS_STANDALONE = process.env.NEXT_PUBLIC_IS_STANDALONE === "true";
const faqData = [
  {
    question: "How does WhatsApp incident raising work?",
    answer: `Scrubbe IMS integrates with WhatsApp to allow teams to raise and track incidents via a dedicated WhatsApp number, streamlining communication for teams already using the platform.`,
    iscode: false,
  },
  {
    question: "What compliance standards does Enterprise support?",
    answer: `The Enterprise plan includes advanced analytics and reporting for PCI, ISO, and SOC2 compliance, ensuring your organization meets regulatory requirements.`,
    iscode: false,
  },
  {
    question: "How fast is onboarding with Scrubbe IMS?",
    answer: `Onboarding is designed to be lightweight, with most teams up and running within hours. Enterprise customers receive dedicated support for faster setup.`,
    iscode: false,
  },
  {
    question: "Can I switch plans later?",
    answer: `Yes, you can upgrade or downgrade plans at any time. Contact our support team for assistance with plan changes or custom Enterprise contracts.`,
    iscode: false,
  },
];
const page = () => {
  return (
    <div>
      {IS_STANDALONE ? (
        <>
          <IMSPricing />
          <FAQ faqData={faqData} />
        </>
      ) : (
        <>
          <MainPricing />
          <EzraAddons />
          <GetInTouch />
        </>
      )}
    </div>
  );
};

export default page;
