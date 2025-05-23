"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

// Feature Card Component
interface FeatureCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

// Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => {
  return (
    <div className="h-full bg-white p-6 rounded-xl border border-gray-200 flex flex-col hover:border-blue-400 hover:shadow-sm transition-all duration-200">
      <div className="mb-4">
        <div className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-emerald-400 bg-blue-50 [box-shadow:0_0_0_4px_rgba(59,130,246,0.1)]">
          <Image
            src={iconSrc}
            alt={iconAlt}
            fill
            sizes="32px"
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-[14px] lg:text-[16px] flex-grow">
        {description}
      </p>
      <Link
        href="/"
        className="flex items-center text-blue-500 font-medium mt-4 text-sm hover:underline"
      >
        Learn more <IoChevronForwardOutline className="ml-1" />
      </Link>
    </div>
  );
};

// Mobile Carousel Components
interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ children, className = "" }) => {
  return <div className={`relative w-full ${className}`}>{children}</div>;
};

interface CarouselContentProps {
  children: React.ReactNode;
  currentIndex: number;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
}

const CarouselContent: React.FC<CarouselContentProps> = ({
  children,
  currentIndex,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) => {
  return (
    <div
      className="overflow-hidden w-full max-w-full px-2"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

interface CarouselItemProps {
  children: React.ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className="flex-shrink-0 w-full p-1">{children}</div>; // Reduced padding
};

interface CarouselButtonProps {
  onClick: () => void;
  disabled: boolean;
  direction: "previous" | "next";
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
  onClick,
  disabled,
  direction,
}) => {
  const Icon =
    direction === "previous" ? IoChevronBackOutline : IoChevronForwardOutline;

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-1.5 ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "opacity-100 cursor-pointer"
      } ${direction === "previous" ? "left-1" : "right-1"}`}
      disabled={disabled}
      aria-label={direction === "previous" ? "Previous cards" : "Next cards"}
    >
      <Icon className="text-2xl text-blue-500" />
    </button>
  );
};

// Main Component
const SiemComprehensive: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Check if mobile on mount and when resizes
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add resize listener
    window.addEventListener("resize", checkIsMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Reset current index when switching between mobile and desktop
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const features = [
    {
      iconSrc: "/icon-mingcute_alert-fill.svg",
      iconAlt: "Real-Time Threat Detection Icon",
      title: "Real-Time Threat Detection",
      description:
        "Monitor and analyze security events across your entire infrastructure in real-time to identify threats as they emerge",
    },
    {
      iconSrc: "/icon-famicons_log-in.svg",
      iconAlt: "Advanced Log Analysis Icon",
      title: "Advanced Log Analysis",
      description:
        "Collect, normalize, and analyze logs from all sources with powerful search capabilities and correlation rulesets",
    },
    {
      iconSrc: "/icon-psf-comprehensive.svg",
      iconAlt: "Centralized Monitoring Icon",
      title: "Centralized Monitoring",
      description:
        "Gain a unified view of your security posture across on-premise, cloud, and hybrid environments from a single pane of glass",
    },
    {
      iconSrc: "/icon-psf-compliance.svg",
      iconAlt: "AI-Powered Analytics Icon",
      title: "AI-Powered Analytics",
      description:
        "Leverage machine learning to identify complex attack patterns, reduce false positives, and prioritize high-impact threats",
    },
    {
      iconSrc: "/icon-psf-automated.svg",
      iconAlt: "Automated Response Icon",
      title: "Automated Response",
      description:
        "Implement predefined playbooks to automatically contain and mitigate threats without human intervention",
    },
    {
      iconSrc: "/icon-bxs_report.svg",
      iconAlt: "Compliance Reporting Icon",
      title: "Compliance Reporting",
      description:
        "Generate comprehensive reports for regulatory frameworks like GDPR, HIPAA, PCI-DSS, and SOC 2 with minimal effort",
    },
  ];

  // Mobile carousel navigation handlers
  const maxIndex = features.length - 1;

  const goToPrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  // Check if buttons should be disabled
  const isPreviousDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance to register

    if (diff > threshold) {
      // Swipe left
      if (!isNextDisabled) goToNext();
    } else if (diff < -threshold) {
      // Swipe right
      if (!isPreviousDisabled) goToPrevious();
    }

    // Reset touch values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      {/* Added overflow-x-hidden to prevent horizontal scrolling */}
      <section className="w-full py-16 bg-gray-50 mx-auto overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 overflow-x-hidden">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-4">
              Comprehensive Security Visibility
            </h2>
            <div className="w-28 h-1 bg-emerald-400 mx-auto"></div>
            <p className="max-w-3xl mx-auto text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600">
              Our SIEM platform combines real-time monitoring, advanced
              analytics, and automated response to deliver complete protection
              for your critical assets.
            </p>
          </div>

          {/* Desktop Grid Layout (hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 overflow-x-hidden max-w-full">
            {features.map((feature, index) => (
              <FeatureCard
                key={`feature-${index}`}
                iconSrc={feature.iconSrc}
                iconAlt={feature.iconAlt}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Mobile Carousel (visible only on mobile) */}
          {isMobile && (
            <div className="md:hidden max-w-full overflow-x-hidden">
              <Carousel className="max-w-[calc(100vw-40px)] mx-auto">
                <CarouselButton
                  direction="previous"
                  onClick={goToPrevious}
                  disabled={isPreviousDisabled}
                />
                <CarouselContent
                  currentIndex={currentIndex}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {features.map((feature, idx) => (
                    <CarouselItem key={`mobile-feature-${idx}`}>
                      <div className="max-w-[calc(100vw-56px)] mx-auto">
                        <FeatureCard
                          iconSrc={feature.iconSrc}
                          iconAlt={feature.iconAlt}
                          title={feature.title}
                          description={feature.description}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselButton
                  direction="next"
                  onClick={goToNext}
                  disabled={isNextDisabled}
                />
              </Carousel>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SiemComprehensive;
