import React from "react";

const usecases = [
  {
    title: "DevOps / SRE Teams",
    description:
      "Incidents don’t wait and neither should your response. With Scrubbe IMS, DevOps and SRE teams detect issues faster (MTTD), resolve them quicker (MTTR), and keep SLAs intact without breaking the continuous delivery loop. Integrate GitHub, GitLab, Kubernetes, and your on-call workflows into one resilient platform",
  },
  {
    title: "IT Operations (ITOps)",
    description:
      "Keep the lights on with less stress. Scrubbe IMS helps IT Ops teams streamline incident detection, automate escalations, and maintain uptime so every system, from servers to applications, runs with continuous reliability.",
  },
  {
    title: "Life Sciences Ops / HealthOps",
    description:
      "In healthcare and life sciences, downtime isn’t just costly — it can risk patient safety and compliance. Scrubbe IMS helps HealthOps teams detect, track, and resolve critical system incidents faster with Real-time alerts to ensure clinicians, labs, and IT staff are notified instantly.",
  },
  {
    title: " Fintech / Banking Ops",
    description:
      "Trust is your currency. Scrubbe IMS empowers fintechs and banks to manage service outages, fraud incidents, and transaction risks in real time protecting revenue while keeping customer confidence intact.",
  },
  {
    title: "Customer Support ",
    description:
      "Your customers don’t see the backend they just expect availability. Scrubbe IMS helps support teams resolve incidents faster, collaborate across channels, and deliver service that builds trust, not frustration.",
  },
];
const UseCase = () => {
  return (
    <div className=" bg-gradient-to-b from-[#00223B] to-[#00474D] h-screen min-h-[700px] flex items-center justify-between py-10 relative ">
      <div className=" flex flex-col gap-4 pl-10 container mx-auto w-full flex-1 ">
        <p className=" text-3xl md:text-5xl max-w-2xl font-bigshotOne text-white">
          Use Case
        </p>

        <div className=" max-w-2xl space-y-5">
          {usecases.map((usecase, index) => (
            <div key={index} className="flex gap-4">
              <div className=" flex items-center justify-center text-white font-bold h-[40px] min-w-[40px] rounded-full bg-gradient-to-b from-IMSLightGreen to-IMSDarkGreen">
                {index + 1}
              </div>
              <div>
                <p className="flex text-xl font-bold text-white md:text-2xl ">
                  {usecase.title}
                </p>
                <p className=" text-white">{usecase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src="/IMS/usecase.png"
        className=" absolute right-[-100px] h-full "
      />
    </div>
  );
};

export default UseCase;
