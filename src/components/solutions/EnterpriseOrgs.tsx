"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const EnterpriseOrgs = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState<
    "overview" | "authentication" | "api" | "soar" | "integration"
  >("overview");

  // Function to handle tab clicks
  const handleTabClick = (
    tabId: "overview" | "authentication" | "api" | "soar" | "integration"
  ) => {
    setActiveTab(tabId);
  };

  return (
    // Outer wrapper for min/max width constraints
    <div className="w-full mx-auto font-sans text-slate-800 leading-relaxed bg-slate-50">
      <header className="py-16 text-center text-white bg-gradient-to-br from-slate-800 to-[#2a4365]">
        <div className="container mx-auto px-8 max-w-screen-xl">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-4">
              Enterprise Security Solutions by Scrubbe
            </h1>
            <p className="text-xl max-w-2xl text-center mb-8">
              Comprehensive fraud detection and security solutions designed for
              enterprises of all sizes, with or without dedicated security
              teams.
            </p>
            <a
              href="#solutions"
              className="inline-block bg-emerald-500 text-white py-3 px-6 rounded-md font-semibold no-underline transition-all duration-300 ease-in-out hover:bg-emerald-600 hover:-translate-y-0.5"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </header>

      <section id="solutions" className="solutions-tabs my-12">
        <div className="container mx-auto px-8 max-w-screen-xl">
          <div className="tabs flex justify-center border-b-2 border-slate-200 mb-8 flex-wrap md:flex-nowrap">
            <button
              className={`tab-button relative py-4 px-6 text-base font-semibold text-slate-500 cursor-pointer transition-colors duration-300 ease-in-out flex-1 text-center md:flex-auto
                ${
                  activeTab === "overview"
                    ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                    : "hover:text-blue-600"
                }`}
              onClick={() => handleTabClick("overview")}
            >
              Complete Solution
            </button>
            <button
              className={`tab-button relative py-4 px-6 text-base font-semibold text-slate-500 cursor-pointer transition-colors duration-300 ease-in-out flex-1 text-center md:flex-auto
                ${
                  activeTab === "authentication"
                    ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                    : "hover:text-blue-600"
                }`}
              onClick={() => handleTabClick("authentication")}
            >
              Authentication SDK
            </button>
            <button
              className={`tab-button relative py-4 px-6 text-base font-semibold text-slate-500 cursor-pointer transition-colors duration-300 ease-in-out flex-1 text-center md:flex-auto
                ${
                  activeTab === "api"
                    ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                    : "hover:text-blue-600"
                }`}
              onClick={() => handleTabClick("api")}
            >
              API-as-a-Service
            </button>
            <button
              className={`tab-button relative py-4 px-6 text-base font-semibold text-slate-500 cursor-pointer transition-colors duration-300 ease-in-out flex-1 text-center md:flex-auto
                ${
                  activeTab === "soar"
                    ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                    : "hover:text-blue-600"
                }`}
              onClick={() => handleTabClick("soar")}
            >
              SOAR Platform
            </button>
            <button
              className={`tab-button relative py-4 px-6 text-base font-semibold text-slate-500 cursor-pointer transition-colors duration-300 ease-in-out flex-1 text-center md:flex-auto
                ${
                  activeTab === "integration"
                    ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                    : "hover:text-blue-600"
                }`}
              onClick={() => handleTabClick("integration")}
            >
              Integration
            </button>
          </div>

          {/* Tab Contents */}
          {/* Apply animation classes conditionally */}
          <div
            id="overview"
            className={`tab-content ${
              activeTab === "overview"
                ? "block opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-2.5"
            } transition-all duration-500 ease-in-out`}
          >
            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white rounded-lg shadow-md">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {/* Container for Image */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="Scrubbe Complete Security Solution"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover" // Use object-cover or contain based on desired fit
                />
              </div>
              <div className="solution-content flex-grow">
                <h3 className="text-2xl mb-4 text-blue-600">
                  Complete Enterprise Security Solution
                </h3>
                <p>
                  Scrubbe offers a comprehensive security platform that combines
                  advanced threat detection, authentication solutions, and
                  automated response systems to protect your enterprise from
                  modern threats.
                </p>
                <ul className="feature-list list-none my-6">
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    All-in-one security platform requiring minimal configuration
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Real-time monitoring and detection of user-based threats and
                    fraud attempts
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Advanced machine learning algorithms that adapt to your
                    business environment
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Seamless integration with existing infrastructure
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Suitable for enterprises with or without dedicated security
                    teams
                  </li>
                </ul>
                <p>
                  Whether you&apos;re looking to enhance your existing security
                  posture or building a security strategy from scratch, Scrubbe
                  provides the tools and intelligence you need to protect your
                  enterprise.
                </p>
              </div>
            </div>

            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white rounded-lg shadow-md">
              <div className="solution-content flex-grow">
                <h3 className="text-2xl mb-4 text-blue-600">
                  Designed for Modern Enterprises
                </h3>
                <p>
                  Scrubbe is built to address the unique security challenges
                  faced by today&apos;s enterprises, with a focus on user
                  behavior analytics and automated threat response.
                </p>
                <ul className="feature-list list-none my-6">
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Intuitive dashboard providing complete visibility into
                    security events
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Automated reporting and compliance documentation
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Scalable architecture that grows with your business
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    24/7 threat monitoring and alerting
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Continuous updates to threat intelligence database
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {" "}
                {/* Container for Image */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="Scrubbe Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div
            id="authentication"
            className={`tab-content ${
              activeTab === "authentication"
                ? "block opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-2.5"
            } transition-all duration-500 ease-in-out`}
          >
            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white rounded-lg shadow-md">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {" "}
                {/* Container for Image */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="Authentication SDK"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="solution-content flex-grow">
                <h3 className="text-2xl mb-4 text-blue-600">
                  Robust Authentication SDK
                </h3>
                <p>
                  Secure your applications and services with Scrubbe&apos;s
                  enterprise-grade Authentication SDK. Implement advanced
                  authentication methods with minimal development effort.
                </p>
                <ul className="feature-list list-none my-6">
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Multi-factor authentication out of the box
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Biometric authentication support
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Token-based authentication with configurable expiration
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Integration with major identity providers (OAuth, SAML,
                    OIDC)
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Behavioral analysis to detect suspicious login attempts
                  </li>
                </ul>
                <p>
                  Our Authentication SDK features comprehensive documentation
                  and code samples to get your developers up and running
                  quickly, regardless of your technology stack.
                </p>
              </div>
            </div>

            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white rounded-lg shadow-md">
              <div className="solution-content flex-grow">
                <h3 className="text-2xl mb-4 text-blue-600">
                  Authentication Analytics and Reporting
                </h3>
                <p>
                  Gain powerful insights into authentication patterns across
                  your organization with built-in analytics and reporting tools.
                </p>
                <ul className="feature-list list-none my-6">
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Detailed login attempt visualization and reporting
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Geographic access pattern monitoring
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Device fingerprinting and verification
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Customizable risk scoring for authentication events
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Automated response to suspicious login attempts
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {" "}
                {/* Container for Image */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="Authentication Analytics"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div
            id="api"
            className={`tab-content ${
              activeTab === "api"
                ? "block opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-2.5"
            } transition-all duration-500 ease-in-out`}
          >
            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white rounded-lg shadow-md">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {" "}
                {/* Container for Image */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="API-as-a-Service"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="solution-content flex-grow">
                <h3 className="text-2xl mb-4 text-blue-600">
                  Secure API-as-a-Service
                </h3>
                <p>
                  Leverage Scrubbe&apos;s API-as-a-Service to extend your
                  security capabilities and integrate advanced threat detection
                  into your existing applications without building complex
                  security infrastructure.
                </p>
                <ul className="feature-list list-none my-6">
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    RESTful API endpoints for all Scrubbe security services
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Real-time threat intelligence accessible via API
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    User behavior analysis and risk scoring
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Transaction monitoring and fraud detection
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Custom integration points for your business logic
                  </li>
                </ul>
                <p>
                  Our API-first approach means you can adapt Scrubbe&apos;s
                  powerful security capabilities to meet your specific
                  enterprise requirements with minimal development overhead.
                </p>
              </div>
            </div>

            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white rounded-lg shadow-md">
              <div className="solution-content flex-grow">
                <h3 className="text-2xl mb-4 text-blue-600">
                  Developer-Friendly Integration
                </h3>
                <p>
                  Designed with developers in mind, our API platform provides
                  the tools needed to implement security features quickly and
                  effectively.
                </p>
                <ul className="feature-list list-none my-6">
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Comprehensive API documentation with interactive examples
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Client libraries for multiple programming languages
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Webhook support for event-driven architectures
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Rate limiting and usage monitoring
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Sandbox environment for testing and development
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {" "}
                {/* Container for Image */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="API Documentation"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div
            id="soar"
            className={`tab-content ${
              activeTab === "soar"
                ? "block opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-2.5"
            } transition-all duration-500 ease-in-out`}
          >
            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white rounded-lg shadow-md">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {" "}
                {/* Container for Image */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="SOAR Platform"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="solution-content flex-grow">
                <h3 className="text-2xl mb-4 text-blue-600">
                  Powerful SOAR Capabilities
                </h3>
                <p>
                  Scrubbe&apos;s Security Orchestration, Automation, and
                  Response (SOAR) platform enables enterprises to automate
                  security workflows and respond to threats faster than ever
                  before.
                </p>
                <ul className="feature-list list-none my-6">
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Visual workflow builder for security playbooks
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Automated response to common security incidents
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Case management for security incidents
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Integration with major security tools and platforms
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Machine learning for incident prioritization
                  </li>
                </ul>
                <p>
                  Our SOAR platform reduces response times from hours to
                  seconds, enabling even small security teams to handle
                  enterprise-scale threat landscapes effectively.
                </p>
              </div>
            </div>

            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white rounded-lg shadow-md">
              <div className="solution-content flex-grow">
                <h3 className="text-2xl mb-4 text-blue-600">
                  Advanced Threat Intelligence
                </h3>
                <p>
                  Stay ahead of emerging threats with Scrubbe&apos;s
                  continuously updated threat intelligence feed, integrated
                  directly into your security operations.
                </p>
                <ul className="feature-list list-none my-6">
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Global threat intelligence database
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Industry-specific threat patterns and signatures
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    User behavior analytics for detecting insider threats
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Anomaly detection powered by machine learning
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Contextual alerts with actionable recommendations
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {" "}
                {/* Container for Image */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="Threat Intelligence"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div
            id="integration"
            className={`tab-content ${
              activeTab === "integration"
                ? "block opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-2.5"
            } transition-all duration-500 ease-in-out`}
          >
            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white rounded-lg shadow-md">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {" "}
                {/* Container for Image */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="Enterprise Integration"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="solution-content flex-grow">
                <h3 className="text-2xl mb-4 text-blue-600">
                  Seamless Enterprise Integration
                </h3>
                <p>
                  Scrubbe is designed to integrate with your existing enterprise
                  infrastructure, providing immediate security benefits without
                  disrupting operations.
                </p>
                <ul className="feature-list list-none my-6">
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Integration with major cloud providers (AWS, Azure, GCP)
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Support for on-premises, cloud, and hybrid environments
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Connection to existing SIEM and log management systems
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Identity management integration (Active Directory, Okta,
                    etc.)
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Custom integration services for unique enterprise needs
                  </li>
                </ul>
                <p>
                  Our platform adapts to your environment, not the other way
                  around, ensuring a smooth implementation process regardless of
                  your current technology stack.
                </p>
              </div>
            </div>

            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white rounded-lg shadow-md">
              <div className="solution-content flex-grow">
                <h3 className="text-2xl mb-4 text-blue-600">
                  Implementation Approach
                </h3>
                <p>
                  Whether you have a dedicated security team or not, Scrubbe
                  offers implementation pathways to get you up and running
                  quickly with enterprise-grade security.
                </p>
                <ul className="feature-list list-none my-6">
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Guided implementation process with expert support
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Pre-configured security rules and policies
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Phased deployment options to minimize business impact
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Comprehensive training for IT and security teams
                  </li>
                  <li className="mb-3 pl-6 relative">
                    <FaCheckCircle className="absolute left-0 top-1 text-emerald-500 font-bold" />
                    Continuous improvement recommendations based on your
                    environment
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {" "}
                {/* Container for Image */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="Implementation Process"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section bg-slate-800 text-white py-16 text-center">
        <div className="container mx-auto px-8 max-w-screen-xl">
          <h2 className="text-3xl mb-4">
            Start Securing Your Enterprise Today
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Ready to transform your enterprise security posture with
            Scrubbe&apos;s advanced fraud detection, authentication, and
            automated response capabilities? Our platform is designed to get you
            up and running quickly, regardless of your current security
            maturity.
          </p>
          <div className="cta-buttons flex flex-col md:flex-row justify-center gap-4 items-center">
            <a
              href="#"
              className="btn inline-block bg-emerald-500 text-white py-3 px-6 rounded-md font-semibold no-underline transition-all duration-300 ease-in-out hover:bg-emerald-600 hover:-translate-y-0.5"
            >
              Request a Demo
            </a>
            <a
              href="#"
              className="btn btn-secondary inline-block bg-transparent border-2 border-white text-white py-3 px-6 rounded-md font-semibold no-underline transition-all duration-300 ease-in-out hover:bg-white/10 hover:-translate-y-0.5"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseOrgs;
