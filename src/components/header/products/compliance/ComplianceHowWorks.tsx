import React from "react";

const process = [
  {
    name: "Assessment",
    description:
      "Begin with a comprehensive assessment of your current security posture and compliance needs. Scrubbe analyzes your existing controls and identifies gaps relative to your target frameworks",
  },
  {
    name: "Implementation",
    description:
      "Follow guided workflows to implement necessary controls. Scrubbe provides templates, best practices, and step-by-step instructions tailored to your organization.",
  },
  {
    name: "Evidence Collection",
    description:
      "Set up automated evidence collection through integrations with your tech stack. Scrubbe periodically gathers proof of control effectiveness from various sources.",
  },
  {
    name: "Monitoring",
    description:
      "Continuously monitor your compliance posture with real-time dashboards that track control effectiveness and highlight areas requiring attention.",
  },
  {
    name: "Reporting",
    description:
      "Generate comprehensive compliance reports and audit-ready documentation at any time, significantly reducing the effort required during formal audits.",
  },
];

const ComplianceHowWorks = () => {
  return (
    <div className=" bg-[url('/detection_bg.png')] bg-no-repeat bg-cover ">
      <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
        <div>
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-white mb-2">
            How our compliance Platform works
          </h2>
          <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20">
          <div>
            <img src="/compliance.png" alt="" />
          </div>
          <div className="flex flex-col gap-8">
            {process.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="font-bold flex justify-center items-center size-[60px] md:size-[80px] border-4 border-pink-500/60 rounded-full bg-white">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <p className="text-lg md:text-2xl text-white font-bold">
                    {item.name}
                  </p>
                  <p className=" text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceHowWorks;
