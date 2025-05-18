import type React from "react";
import Image from "next/image";

const FiveEasySteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Connect",
      description:
        "Connect your data sources, authentication endpoints, and user sessions with one-click integrations or APIs. Scrubbe supports cloud apps, RDS, webhooks, and SDKs.",
    },
    {
      number: 2,
      title: "Analyze",
      description:
        "Automatically process device fingerprints, login patterns, and user behaviors in real time — enriched with risk signals, velocity tracking, and LLM-assisted insights.",
    },
    {
      number: 3,
      title: "Monitor",
      description:
        "Track suspicious events, failed login attempts, fraudulent patterns, and system health across a live dashboard built for analysts, not noise.",
    },
    {
      number: 4,
      title: "Identify",
      description:
        "Pinpoint fraud, anomalies, VIP users, and emerging threats with dynamic scoring, fingerprint correlation, and user trust profiles.",
    },
    {
      number: 5,
      title: "Remediate",
      description:
        "Trigger SOAR playbooks, block malicious actors, or notify your team — all with customizable workflows designed to reduce response time to seconds.",
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <section className="w-full max-w-[1440px] mx-auto px-4 py-6 md:py-12 lg:py-16">
        {/* Main heading */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Secure your business in five easy steps
          </h2>
          <div className="w-28 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        {/* Content container - Grid implementation */}
        <article className="grid grid-cols-1 xl:grid-cols-2 justify-items-center mx-auto gap-2">
          {/* Left side - Fraud Detection Workflow image */}
          <aside
            className="w-[280px] h-[284px]  relative
              sm:w-[560px] sm:h-[568px]
              md:w-[670px] md:h-[680px]
              xl:w-[560px] xl:h-[568px]"
          >
            <Image
              src="/fraud-detection.png"
              alt="Fraud Detection Workflow"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 280px,
                     (max-width: 768px) 560px,
                     (max-width: 1024px) 670px,
                     (max-width: 1280px) 520px,
                     650px"
            />
          </aside>

          {/* Right side - Five steps */}
          <aside
            className="w-[280px] h-[454px] overflow-y-auto 
              sm:w-[560px] sm:h-[568px]
              md:w-[670px] md:h-[680px]
              xl:w-[560px] xl:h-[568px]"
          >
            <div className="h-full flex flex-col justify-between sm:py-2">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-2 items-start mb-1 sm:mb-2"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200 flex items-center justify-center my-auto">
                    <span className="text-sm sm:text-base font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-2">
                    <h3 className="text-sm sm:text-lg md:text-xl font-bold leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm sm:leading-snug md:text-base leading-tight mt-0.5 sm:mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </article>
      </section>
    </div>
  );
};

export default FiveEasySteps;
