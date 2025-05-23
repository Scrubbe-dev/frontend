"use client";
import type React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

const SiemPlatform: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Data Collection",
      description:
        "Gather logs and event data from across your network, endpoints, applications, and cloud services",
    },
    {
      number: 2,
      title: "Normalization",
      description:
        "Convert disparate data formats into a standardized structure for consistent analysis",
    },
    {
      number: 3,
      title: "Analysis",
      description:
        "Apply correlation rules, behavioral analytics, and machine learning to identify threats.",
    },
    {
      number: 4,
      title: "Response",
      description:
        "Alert security teams and trigger automated responses to contain and remediate threats.",
    },
  ];

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
    <div className="w-full bg-white overflow-hidden">
      <section className="w-full mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-3">
            How Our SIEM Platform Works
          </h2>
          <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            A streamlined approach to enterprise security monitoring and threat
            management
          </p>
        </div>

        <article className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10 max-w-6xl mx-auto">
          {/* Left side with image */}
          <aside className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] relative order-2 xl:order-1 mx-auto max-w-[650px]">
            <Image
              src="/threat-intelligence.png"
              alt="threat-intelligence"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 768px) 600px,
                     (max-width: 1280px) 650px,
                     600px"
            />
          </aside>

          {/* Right side with steps */}
          <aside className="w-full max-w-[650px] mx-auto order-1 xl:order-2">
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
          </aside>
        </article>
      </section>

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

export default SiemPlatform;
