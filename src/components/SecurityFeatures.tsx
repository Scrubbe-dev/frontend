/* "use client";
import { Card, CardHeader } from "@heroui/react";
import React from "react";
import { security_data } from "@/features/home/security-features/dto/security-data";

function SecurityFeatures() {
  return (
    <aside className="w-full h-full pt-20 xl:pt-0">
      <div className="min-h-screen w-full flex items-center flex-col xl:pt-28">
        <div className="container w-full h-full">
          <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
            <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl xl:text-4xl font-semibold">
              Powerful Security Features
            </div>
            <div className="bg-[#10b981] h-1 w-16 rounded-full"></div>
          </div>

          <div className="w-full h-full flex items-center justify-center py-8">
            <div className="h-fit xl:w-3/6 text-wrap text-center text-md text-muted-foreground px-2 xl:px-0 font-Raleway font-[500]">
              Scrubbe offers comprehensive security monitoring and automated
              response capabilities to identify and neutralize threats before
              they impact your business.
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-6">
            <div className="w-11/12 h-fit grid xl:grid-cols-3 gap-6">
              {security_data.map((items) => {
                return (
                  <div key={items.id} className="col-span-1 w-full h-fit">
                    <Card className="px-6 pb-4 h-full transition-all xl:h-[260px] hover:-translate-y-2 hover:transition-all">
                      <CardHeader>
                        <div className="w-full">
                          <div className="h-[100px] flex items-center w-full">
                            <div className="h-14 flex justify-center items-center w-14 rounded-full bg-slate-200">
                              {items.icon}
                            </div>
                          </div>
                          <div className="font-Poppins font-bold text-xl py-4 text-slate-900">
                            {items.title}
                          </div>
                          <div className="font-Raleway text-sm font-thin">
                            {items.description}
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SecurityFeatures;
 */

"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  IoPersonOutline,
  IoShieldOutline,
  IoGlobeOutline,
  IoChevronForwardOutline,
  IoChevronBackOutline,
} from "react-icons/io5";
import { MdPhishing } from "react-icons/md";

// Card Component
interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="h-full px-4 pb-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-xl bg-white">
      <div className="flex flex-col items-start text-left h-full ">
        <div className="w-full border-b-[2px] border-scblue my-2">
          <div className="text-scblue text-4xl inline-block">{icon}</div>
        </div>
        <h3 className="text-scblue text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-800 mb-4">{description}</p>
        <Link
          href="/"
          className="flex items-center text-scblue font-bold mt-auto cursor-pointer hover:underline"
        >
          Learn More <IoChevronForwardOutline className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

// Carousel Components
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
  isMobile: boolean;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
}

const CarouselContent: React.FC<CarouselContentProps> = ({
  children,
  currentIndex,
  isMobile,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) => {
  return (
    <div
      className="overflow-hidden px-8"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: isMobile
            ? `translateX(-${currentIndex * 100}%)`
            : `translateX(-${currentIndex * (100 / 3)}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

interface CarouselItemProps {
  children: React.ReactNode;
  isMobile: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children, isMobile }) => {
  return (
    <div className={`flex-shrink-0 ${isMobile ? "w-full" : "w-1/3"} p-2`}>
      {children}
    </div>
  );
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
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "opacity-100 cursor-pointer"
      } ${direction === "previous" ? "left-0" : "right-0"}`}
      disabled={disabled}
      aria-label={direction === "previous" ? "Previous cards" : "Next cards"}
    >
      <Icon className="text-2xl text-scblue" />
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
      setIsMobile(window.innerWidth < 1024);
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

  const IconWrapper = ({ Icon }: { Icon: React.ElementType }) => (
    <div className="p-2 bg-white rounded-full border-2 border-scblue">
      <Icon className="text-scblue" />
    </div>
  );

  const cards = [
    {
      icon: IconWrapper({ Icon: IoPersonOutline }),
      title: "Real-Time Threat Detection",
      description:
        "Monitor and detect suspicious activities across your network with advanced analytics and machine learning algorithms.",
    },
    {
      icon: IconWrapper({ Icon: MdPhishing }),
      title: "Automated Response",
      description:
        "Configure playbooks to automatically respond to security incidents, reducing response time and minimizing damage",
    },
    {
      icon: IconWrapper({ Icon: IoGlobeOutline }),
      title: "Comprehensive Dashboards",
      description:
        "Visualize security data with intuitive dashboards that provide actionable insights at a glance",
    },
    {
      icon: IconWrapper({ Icon: IoShieldOutline }),
      title: "Integration Ecosystem",
      description:
        "Connect with over 200 security tools and data sources to centralize your security operations.",
    },
    {
      icon: IconWrapper({ Icon: IoPersonOutline }),
      title: "Mobile Alerts",
      description:
        "Stay informed with real-time notifications on critical security events via mobile app or SMS.",
    },
    {
      icon: IconWrapper({ Icon: IoShieldOutline }),
      title: "Compliance Reporting",
      description:
        "Generate comprehensive reports for regulatory compliance including GDPR, HIPAA, PCI DSS, and more.",
    },
  ];

  // Calculate visible items and max index
  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = cards.length - itemsPerView;

  // Navigation handlers
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
    <div className="w-full h-auto bg-white flex justify-center py-12">
      <section className="w-full max-w-[1440px] px-4 flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[1.9rem] md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Security Features
          </h2>
          <p className="text-[0.9rem] md:text-[1.2rem] text-gray-700 max-w-4xl mx-auto">
            Scrubbe offers comprehensive security monitoring and automated
            response capabilities to identify and neutralize threats before they
            impact your business.
          </p>
        </div>

        {/* Carousel */}
        <Carousel className="my-8">
          <CarouselButton
            direction="previous"
            onClick={goToPrevious}
            disabled={isPreviousDisabled}
          />

          <CarouselContent
            currentIndex={currentIndex}
            isMobile={isMobile}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {cards.map((card, idx) => (
              <CarouselItem key={`card-${idx}`} isMobile={isMobile}>
                <Card
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselButton
            direction="next"
            onClick={goToNext}
            disabled={isNextDisabled}
          />
        </Carousel>
      </section>
    </div>
  );
};

export default SecurityFeatures;
