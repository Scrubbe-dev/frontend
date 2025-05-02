"use client";
import { useState } from "react";
import Link from "next/link";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";

interface FeatureCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <div className="bg-[#f8fafd] rounded-lg p-6 mb-5 border-l-4 border-[#3a7bd5] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-[#2a3f5f] mb-3 text-lg font-semibold">{title}</h3>
      <p className="text-[#556580] mb-4 text-sm">{description}</p>
      <Link
        href={linkHref}
        className="inline-block text-[#3a7bd5] font-medium relative pr-6 transition-colors duration-300 hover:text-[#2d62b1] group"
      >
        {linkText}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-1">
          <FiArrowRight />
        </span>
      </Link>
    </div>
  );
};

const AuthenticationSdk = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const features = [
    {
      title: "Passwordless Authentication",
      description:
        "Eliminate password-based vulnerabilities with our modern passwordless authentication system. Users can securely authenticate using biometrics, hardware tokens, or other secure methods without the security risks associated with traditional passwords.",
      linkText: "Learn more about Passwordless Authentication",
      linkHref: "#",
    },
    {
      title: "Magic Link Authentication",
      description:
        "Provide frictionless login experiences with secure, time-limited magic links sent to verified email addresses. Our system includes advanced fraud detection to identify suspicious login attempts and prevent account takeovers.",
      linkText: "Explore Magic Link Authentication",
      linkHref: "#",
    },
    {
      title: "User Management & Role-Based Access Control",
      description:
        "Comprehensive user management with granular permission controls. Define custom roles, manage access privileges, and enforce least-privilege principles across your application while maintaining detailed audit logs of all identity actions.",
      linkText: "Discover User Management features",
      linkHref: "#",
    },
    {
      title: "Behavioral Biometrics",
      description:
        "Detect account takeovers with our behavioral biometrics system that analyzes typing patterns, mouse movements, and interaction styles to identify suspicious logins even when valid credentials are used.",
      linkText: "Learn about Behavioral Biometrics",
      linkHref: "#",
    },
    {
      title: "Multi-Factor Authentication (MFA)",
      description:
        "Deploy risk-based MFA that intelligently adapts authentication requirements based on contextual factors such as location, device, and behavior patterns. Our system supports TOTP, WebAuthn, push notifications, and SMS codes.",
      linkText: "Explore MFA options",
      linkHref: "#",
    },
    {
      title: "Device Fingerprinting",
      description:
        "Identify and track suspicious devices with our advanced device fingerprinting technology. Silently detect emulators, virtual machines, and known fraud devices while maintaining legitimate user privacy.",
      linkText: "Device Fingerprinting documentation",
      linkHref: "#",
    },
  ];

  return (
    <div className="min-w-[320px] max-w-[1440px] mx-auto px-5 py-10 bg-[#f7f9fc] text-[#333]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          {/* Header Section with Gradient */}
          <div
            className="bg-gradient-to-r from-[#3a7bd5] to-[#00d2ff] p-5 md:p-6 flex justify-between items-center cursor-pointer transition-all duration-300 hover:from-[#2d62b1] hover:to-[#00b8e0]"
            onClick={toggleSection}
          >
            <h2 className="text-white text-xl md:text-2xl font-semibold">
              Authentication SDK
            </h2>
            <span className="text-white text-2xl transition-transform duration-300">
              {isOpen ? <FiMinus /> : <FiPlus />}
            </span>
          </div>

          {/* Collapsible Content Section */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen ? "max-h-[5000px]" : "max-h-0"
            }`}
          >
            {/* Introduction Section */}
            <div className="p-5 md:p-7 border-b border-[#eaeef6]">
              <p className="text-[#556580] text-sm md:text-base">
                Scrubbe&apos;s Authentication SDK provides a comprehensive
                security solution for your application, offering advanced fraud
                prevention and seamless user experience. Our SDK is designed to
                protect your users while minimizing friction in the
                authentication process, with robust features that can be
                implemented with minimal integration effort.
              </p>
            </div>

            {/* Features List */}
            <div className="p-5 md:p-7">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  linkText={feature.linkText}
                  linkHref={feature.linkHref}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationSdk;
