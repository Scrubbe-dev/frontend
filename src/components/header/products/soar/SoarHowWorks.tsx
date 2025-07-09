import React from "react";
const steps = [
  {
    title: "Detect",
    description:
      "Our platform continuously monitors your environment for security incidents, anomalies, and potential threats using advanced detection algorithms and machine learning",
  },
  {
    title: "Analyze",
    description:
      "Once detected, incidents are automatically analyzed to determine severity, impact, and appropriate response actions based on your predefined playbooks and rules",
  },
  {
    title: "Respond",
    description:
      "Automated response workflows kick in immediately, containing threats and implementing remediation steps while keeping your security team informed..",
  },
  {
    title: "Learn",
    description:
      "Our system continuously learns from each incident, improving detection accuracy and response effectiveness over time through AI-powered analytics",
  },
];
const SoarHowWorks = () => {
  return (
    <div className="max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
      <div className="text-center mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          How Our SOAR Platform Works
        </h2>
        <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base md:max-w-2xl mx-auto">
          Our SOAR Automation platform streamlines your security operations
          through a simple yet powerful workflow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 lg:gap-6 w-full mx-auto">
        {steps.map((step, index) => (
          <div key={index} className=" flex gap-8 items-center">
            <div className="min-w-12 h-12 border border-black rounded-full flex justify-center items-center">
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoarHowWorks;
