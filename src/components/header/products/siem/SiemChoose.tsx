"use client";
import type React from "react";
import Image from "next/image";

// Benefit Card Component
interface BenefitCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
      <div className="mb-3">
        <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 border-2 border-blue-200">
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-[13px] lg:text-[14px] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const SiemChoose = () => {
  const benefits = [
    {
      iconSrc: "/icon-clock-vector.svg",
      iconAlt: "Reduce Mean Time to Detect Icon",
      title: "Reduce Mean Time to Detect",
      description:
        "Identify security incidents up to 80% faster with real-time correlation and automated alert prioritization",
    },
    {
      iconSrc: "/icon-funnel-vector.svg",
      iconAlt: "Minimize Alert Fatigue Icon",
      title: "Minimize Alert Fatigue",
      description:
        "Reduce false positives by up to 90% with our advanced ML-based filtering and contextual analysis",
    },
    {
      iconSrc: "/icon-majesticons-map-simple.svg",
      iconAlt: "Simplify Compliance Icon",
      title: "Simplify Compliance",
      description:
        "Meet regulatory requirements with automated data retention, access controls, and customizable reporting",
    },
    {
      iconSrc: "/icon-fluent_scale-fill.svg",
      iconAlt: "Scale Effortlessly Icon",
      title: "Scale Effortlessly",
      description:
        "Handle billions of events per day with our cloud-native architecture that grows with your business",
    },
  ];

  return (
    <>
      <div className="w-full bg-white">
        <section className="w-full mx-auto px-4 py-6 md:py-10">
          <article className="w-[90%] mx-auto rounded-[20px] overflow-hidden bg-[url('/background-siemchoose.svg'),linear-gradient(to_bottom,#2664EA,#153884)] bg-cover bg-center bg-no-repeat">
            {/* Content Container */}
            <div className="relative z-10 px-6 sm:px-8 lg:px-10 py-8 lg:py-10">
              {/* Header Section */}
              <div className="text-left mb-8 lg:mb-10">
                <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-white mb-3 lg:mb-4">
                  Why Choose Our SIEM Platform
                </h2>
                <p className="max-w-4xl text-[14px] sm:text-[16px] lg:text-[18px] text-blue-100 leading-relaxed">
                  Our SIEM platform combines real-time monitoring, advanced
                  analytics, and automated response to deliver complete
                  protection for your critical assets.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <BenefitCard
                    key={`benefit-${index}`}
                    iconSrc={benefit.iconSrc}
                    iconAlt={benefit.iconAlt}
                    title={benefit.title}
                    description={benefit.description}
                  />
                ))}
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default SiemChoose;
