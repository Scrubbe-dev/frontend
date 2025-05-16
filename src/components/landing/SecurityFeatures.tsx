"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { FaSquareCheck } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { BiBarChart } from "react-icons/bi";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="h-full bg-white p-6 rounded-xl border border-gray-200 flex flex-col hover:border-blue-400 hover:shadow-sm transition-all duration-200">
      <div className="mb-4">
        <div className="text-blue-500 text-3xl w-12 h-12 flex items-center justify-center rounded-full border-2 border-emerald-400 bg-blue-50 [box-shadow:0_0_0_4px_rgba(59,130,246,0.1)]">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
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
const SecurityFeatures: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Check if mobile on mount and when window resizes
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
      icon: <FaClock />,
      title: "Real-Time Threat Detection",
      description:
        "Monitor and detect suspicious activities across your network with advanced analytics and machine learning algorithms.",
    },
    {
      icon: <FaSquareCheck />,
      title: "Automated Response",
      description:
        "Configure playbooks to automatically respond to security incidents reducing response time and minimizing change",
    },
    {
      icon: <GiBrickWall />,
      title: "Comprehensive Dashboards",
      description:
        "Visualize security data with intuitive dashboards that provide actionable insights at a glance",
    },
    {
      icon: <HiMiniCodeBracketSquare />,
      title: "Integration Ecosystem",
      description:
        "Connect with over 200 security tools and data sources to centralize your security operations.",
    },
    {
      icon: <BsExclamationOctagonFill />,
      title: "Mobile Alerts",
      description:
        "Stay informed with real-time notifications on critical security events via mobile app or SMS.",
    },
    {
      icon: <BiBarChart />,
      title: "Compliance Reporting",
      description:
        "Visualize security data with intuitive dashboards that provide actionable insights at a glance",
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
    <div className="w-full h-auto bg-gray-50 overflow-x-hidden">
      {" "}
      {/* Added overflow-x-hidden to prevent horizontal scrolling */}
      <section className="w-full max-w-[1440px] py-16 bg-gray-50 mx-auto overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 overflow-x-hidden">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Powerful Security Features
            </h2>
            <div className="w-28 h-1 bg-emerald-400 mx-auto"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Scrubbe offers comprehensive security monitoring and automated
              response capabilities to identify and neutralize threats before
              they impact your business.
            </p>
          </div>

          {/* Desktop Grid Layout (hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 overflow-x-hidden max-w-full">
            {features.map((feature, index) => (
              <FeatureCard
                key={`feature-${index}`}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Mobile Carousel (visible only on mobile) */}
          {isMobile && (
            <div className="md:hidden max-w-full overflow-x-hidden">
              {" "}
              {/* Added max-width constraint */}
              <Carousel className="max-w-[calc(100vw-40px)] mx-auto">
                {" "}
                {/* Set max width to viewport minus padding */}
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
                        {" "}
                        {/* Constrain card width */}
                        <FeatureCard
                          icon={feature.icon}
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

export default SecurityFeatures;
