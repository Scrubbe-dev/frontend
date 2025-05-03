"use client"
import { useState } from "react";
import {
  FaCode,
  FaShieldAlt,
  FaUserCheck,
  FaClock,
  FaLink,
  FaTruck,
  FaCog,
  FaChevronDown,
} from "react-icons/fa";

// Define types for API offerings
interface ApiOffering {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
}

const ApiService = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  // API offerings data
  const apiOfferings: ApiOffering[] = [
    {
      id: "transaction",
      title: "Transaction Fraud API",
      description:
        "Analyze transactions in real-time to detect suspicious patterns, anomalies, and known fraud signatures. Includes velocity checks, device fingerprinting, and behavioral analytics.",
      icon: <FaShieldAlt className="text-current" />,
      badge: "Real-time",
    },
    {
      id: "identity",
      title: "Identity Verification API",
      description:
        "Verify user identities through multi-factor authentication, document verification, and biometric matching to prevent account takeover and synthetic identity fraud.",
      icon: <FaUserCheck className="text-current" />,
      badge: "KYC",
    },
    {
      id: "behavioral",
      title: "Behavioral Analytics API",
      description:
        "Track and analyze user behavior patterns to identify suspicious activities, account fraud, and unexpected deviations from established usage patterns.",
      icon: <FaClock className="text-current" />,
    },
    {
      id: "link",
      title: "Link Analysis API",
      description:
        "Discover hidden connections between entities to identify fraud rings, money laundering networks, and coordinated attack patterns across your customer base.",
      icon: <FaLink className="text-current" />,
    },
    {
      id: "payment",
      title: "Payment Fraud API",
      description:
        "Secure payment processing with advanced fraud detection for credit cards, ACH, cryptocurrency, and alternative payment methods with minimal false positives.",
      icon: <FaTruck className="text-current" />,
      badge: "PCI-DSS",
    },
    {
      id: "rule",
      title: "Rule Engine API",
      description:
        "Create, deploy, and manage custom fraud detection rules without coding. Combine predefined and custom rules with machine learning models for maximum flexibility.",
      icon: <FaCog className="text-current" />,
    },
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-6 py-5">
      <div className="my-10 bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div
          className="bg-blue-900 hover:bg-blue-950 transition-colors px-6 py-6 sm:px-8 flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-white text-xl sm:text-2xl font-semibold flex items-center gap-4">
            <FaCode className="w-7 h-7" />
            Scrubbe API-as-a-Service
          </h2>
          <FaChevronDown
            className={`w-6 h-6 text-white transform transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        {/* Content Section - Conditionally rendered based on expanded state */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded
              ? "max-h-[5000px] px-6 py-8 sm:px-8"
              : "max-h-0 px-6 py-0"
          }`}
        >
          {/* Intro Section */}
          <div className="mb-8">
            <p className="text-lg mb-4 text-gray-800">
              Scrubbe offers a comprehensive suite of fraud detection and
              prevention APIs that seamlessly integrate with your existing
              security infrastructure. Our API-as-a-Service model provides
              real-time protection against the most sophisticated fraud attacks
              while maintaining high performance and low latency.
            </p>
            <p className="text-lg text-gray-800">
              With flexible deployment options and detailed documentation, you
              can implement robust fraud detection capabilities in minutes, not
              months.
            </p>
          </div>

          {/* API Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {apiOfferings.map((api) => (
              <div
                key={api.id}
                className="bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-blue-900 text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-current w-6 h-6">{api.icon}</span>
                  {api.title}
                  {api.badge && (
                    <span className="ml-2 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {api.badge}
                    </span>
                  )}
                </h3>
                <p className="text-gray-700 mb-5">{api.description}</p>
                <a
                  href="#"
                  className="text-blue-500 font-semibold inline-block border-b-2 border-transparent hover:border-blue-500 transition-all"
                >
                  View Documentation →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiService;