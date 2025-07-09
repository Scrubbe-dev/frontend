import React from "react";

const useCases = [
  {
    title: "Phishing Response",
    description:
      "Automatically analyze suspicious emails, quarantine threats, and implement protective measures across your organization in minutes instead of hours",
    image: "/phishing.png",
  },
  {
    title: "Malware Containment",
    description:
      "Identify infected systems, isolate them from your network, and deploy remediation actions to prevent lateral movement and data exfiltration",
    image: "/malware.png",
  },
  {
    title: "User Access Management",
    description:
      "Monitor user behavior, detect unauthorized access attempts, and automatically implement access controls based on security policies.",
    image: "/user_access.png",
  },
  {
    title: "Vulnerability Management",
    description:
      "Continuously scan your environment for vulnerabilities, prioritize based on risk, and automate patching workflows for critical systems",
    image: "/vulnerability.png",
  },
];

const SoarUseCase = () => {
  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
      <div className="text-center mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          Use Cases
        </h2>
        <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base md:max-w-2xl mx-auto">
          SOAR Automation can be applied across various security scenarios to
          enhance your team&apos;s capabilities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 lg:gap-6 w-full mx-auto">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-200 gap-y-4 bg-gray-50 p-4 rounded-lg"
          >
            <h3 className="text-lg font-bold">{useCase.title}</h3>
            <p className="text-gray-600">{useCase.description}</p>
            <img
              src={useCase.image}
              alt={useCase.title}
              className="w-full rounded-lg h-[300px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoarUseCase;
