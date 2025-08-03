"use client";
import CButton from "@/components/ui/Cbutton";
import React from "react";

const incidentFeature = [
  {
    iconSrc: "/check-box.svg",
    title: "Continuous Monitoring",
    description:
      "Stay compliant with real-time monitoring of your control effectiveness and receive alerts when issues arise that could impact your compliance status",
  },
  {
    iconSrc: "/icon-famicons_log-in.svg",
    title: "Evidence Collection",
    description:
      "Set up automated evidence collection from various sources including cloud platforms, security tools, and internal systems to support your compliance claims",
  },
  {
    iconSrc: "/icon-mingcute_alert-fill.svg",
    title: "Gap Analysis",
    description:
      "Identify compliance gaps in your current practices and receive actionable recommendations to address them efficiently.",
  },
  {
    iconSrc: "/dashboard.svg",
    title: "Documentation Generation",
    description:
      "Automatically generate compliance documentation, policies, and procedures tailored to your organization's needs and the requirements of your selected standards.",
  },
  {
    iconSrc: "/analytics2.svg",
    title: "Automated Control Management",
    description:
      "Scrubbe automatically maps compliance requirements to controls, helping you implement and maintain the necessary safeguards for your selected frameworks.",
  },
];

const ComplianceFeature = () => {
  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
      <div className="text-center mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          Key Features
        </h2>
        <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base md:max-w-2xl mx-auto">
          Streamline your security incident response with these powerful
          capabilities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full mx-auto">
        {incidentFeature.slice(0, 3).map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 lg:gap-6 w-full mx-auto">
        {incidentFeature.slice(3, 5).map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
      <CButton className=" w-fit">Download Full Feature List</CButton>
    </div>
  );
};

export default ComplianceFeature;

interface FeatureCardProps {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`h-full bg-white p-6 rounded-xl border border-neutral-300 flex flex-col hover:border-blue-400 hover:shadow-sm transition-all duration-200 ${className}`}
    >
      <div className="mb-4">
        <div className="relative w-12 h-12 flex items-center justify-center rounded-full  bg-neutral-100 border  border-colorScBlue">
          <img
            src={iconSrc}
            alt={iconAlt ?? ""}
            height={40}
            width={40}
            className="object-contain h-[60%] w-[60%]"
          />
        </div>
      </div>
      <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold mb-2">
        {title}
      </h3>
      <p className="text-[14px] lg:text-[16px] flex-grow">{description}</p>
    </div>
  );
};
