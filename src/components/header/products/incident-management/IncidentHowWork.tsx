"use client";
import { useEffect, useState } from "react";

const steps = [
  {
    number: 1,
    title: "Detection & Alerting",
    description:
      "Advanced algorithms detect security anomalies and trigger alerts based on customizable thresholds. Integration with your existing security tools ensures no threat goes unnoticed",
  },
  {
    number: 2,
    title: "Triaging & Prioritization",
    description:
      "Automatically categorize and prioritize incidents based on severity, impact, and organizational context to focus resources on critical issues first",
  },
  {
    number: 3,
    title: "Investigation & Analysis",
    description:
      "Leverage built-in investigation tools and contextual data to quickly analyze incidents and identify root causes with comprehensive evidence collection",
  },
  {
    number: 4,
    title: "Response & Remediation",
    description:
      "Execute predefined response playbooks to contain threats and remediate vulnerabilities, with options for manual intervention or fully automated responses",
  },
  {
    number: 5,
    title: "Documentation & Reporting",
    description:
      "Generate comprehensive incident reports with all relevant details, actions taken, and outcomes to support compliance requirements and continuous improvement",
  },
];
const IncidentHowWork = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length) {
          return 1; // Reset to 1 when reaching the end
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
      <div className="text-center mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          How it Works
        </h2>
        <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base md:max-w-2xl mx-auto">
          Generate comprehensive incident reports with all relevant details,
          actions taken, and outcomes to support compliance requirements and
          continuous improvement
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 place-items-center w-full">
        <div className="size-[350px] sm:size-[400px] md:size-[520px] w-full rounded-xl p-6 bg-blue-100">
          <img
            src="/incident_how_work.png"
            alt="incident-timeline"
            className="h-full w-fullobject-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col space-y-6 sm:space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex items-start transition-all duration-300 ${
                activeStep === step.number ? "scale-[1.02]" : ""
              }`}
            >
              <div className="relative flex-shrink-0 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full border-2 border-gray-200 flex items-center justify-center mr-4 sm:mr-5">
                <span className="text-[20px] md:text-[24px] font-bold">
                  {step.number}
                </span>
                {activeStep === step.number && (
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent 
                        animate-[spin_2s_cubic-bezier(0.4,0,0.2,1)_infinite]
                        border-t-emerald-400 border-r-emerald-100 border-b-emerald-100 border-l-emerald-100"
                  />
                )}
              </div>

              <div className="flex-1">
                <h3
                  className={`text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-tight mb-1 sm:mb-2 ${
                    activeStep === step.number
                      ? "text-gray-800 animate-[pulse_2s_ease-in-out_infinite]"
                      : "text-gray-800"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`${
                    activeStep === step.number
                      ? "text-gray-600 animate-[pulse_2s_ease-in-out_infinite]"
                      : "text-gray-600"
                  } text-sm sm:text-base leading-relaxed max-w-lg`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { 
              color: inherit;
              text-shadow: 0 0 0 rgba(16, 185, 129, 0); 
            }
            50% { 
              color: #059669;
              text-shadow: 0 0 8px rgba(16, 185, 129, 0.2); 
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default IncidentHowWork;
