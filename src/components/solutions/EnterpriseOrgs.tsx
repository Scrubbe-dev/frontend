"use client"
import React, { useState } from "react";
import Image from "next/image"; // Assuming Next.js environment for Image component

// Assuming Tailwind CSS is configured with custom colors in tailwind.config.js:
// colors: {
//   'primary-color': '#2563eb', // blue-600
//   'secondary-color': '#4338ca', // violet-700
//   'accent-color': '#10b981', // emerald-500
//   'dark-color': '#1e293b', // slate-800
//   'light-color': '#f8fafc', // slate-50
//   'gray-color': '#64748b', // slate-500
//   'light-gray': '#e2e8f0', // slate-200
// },
// And animation in tailwind.config.js:
// animation: {
//   fadeIn: 'fadeIn 0.5s ease forwards',
// },
// keyframes: {
//   fadeIn: {
//     'from': { opacity: '0', transform: 'translateY(10px)' },
//     'to': { opacity: '1', transform: 'translateY(0)' },
//   },
// },

const EnterpriseOrgs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    // Base background and text color from CSS :root
    <div className="bg-light-color text-dark-color leading-relaxed w-full mx-auto">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary-color to-secondary-color text-white py-8 text-center">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="hero flex flex-col items-center justify-center py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise Security Solutions by Scrubbe
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-center mb-8">
              Comprehensive fraud detection and security solutions designed for
              enterprises of all sizes, with or without dedicated security
              teams.
            </p>
            <a
              href="#solutions"
              className="inline-block bg-accent-color text-white py-3 px-6 rounded-md font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-emerald-600"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </header>

      {/* Solutions Tabs Section */}
      <section id="solutions" className="solutions-tabs py-12">
        <div className="container mx-auto px-4 max-w-screen-xl">
          {/* Tab Buttons */}
          <div className="tabs flex justify-center border-b-2 border-light-gray mb-8 flex-wrap gap-x-4">
            {" "}
            {/* Added gap for spacing */}
            <button
              className={`tab-button py-4 px-6 text-lg font-semibold relative transition-colors duration-300 ${
                activeTab === "overview"
                  ? "active text-primary-color"
                  : "text-gray-color hover:text-primary-color"
              }`}
              onClick={() => handleTabClick("overview")}
            >
              Complete Solution
              {activeTab === "overview" && (
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary-color"></span>
              )}
            </button>
            <button
              className={`tab-button py-4 px-6 text-lg font-semibold relative transition-colors duration-300 ${
                activeTab === "authentication"
                  ? "active text-primary-color"
                  : "text-gray-color hover:text-primary-color"
              }`}
              onClick={() => handleTabClick("authentication")}
            >
              Authentication SDK
              {activeTab === "authentication" && (
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary-color"></span>
              )}
            </button>
            <button
              className={`tab-button py-4 px-6 text-lg font-semibold relative transition-colors duration-300 ${
                activeTab === "api"
                  ? "active text-primary-color"
                  : "text-gray-color hover:text-primary-color"
              }`}
              onClick={() => handleTabClick("api")}
            >
              API-as-a-Service
              {activeTab === "api" && (
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary-color"></span>
              )}
            </button>
            <button
              className={`tab-button py-4 px-6 text-lg font-semibold relative transition-colors duration-300 ${
                activeTab === "soar"
                  ? "active text-primary-color"
                  : "text-gray-color hover:text-primary-color"
              }`}
              onClick={() => handleTabClick("soar")}
            >
              SOAR Platform
              {activeTab === "soar" && (
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary-color"></span>
              )}
            </button>
            <button
              className={`tab-button py-4 px-6 text-lg font-semibold relative transition-colors duration-300 ${
                activeTab === "integration"
                  ? "active text-primary-color"
                  : "text-gray-color hover:text-primary-color"
              }`}
              onClick={() => handleTabClick("integration")}
            >
              Integration
              {activeTab === "integration" && (
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary-color"></span>
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div
            id="overview"
            className={`tab-content ${
              activeTab === "overview" ? "block" : "hidden"
            } animate-fadeIn`}
          >
            {/* Overview Content */}
            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="solution-image flex-1 text-center w-full md:w-auto">
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  {" "}
                  {/* Container for Image */}
                  <Image
                    src="/scrubbe-logo-01.png"
                    alt="Scrubbe Complete Security Solution"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover" // Use object-cover or contain based on desired fit
                  />
                </div>
              </div>
              <div className="solution-content flex-1 md:flex-[1.5]">
                {" "}
                {/* Using flex shorthand for ratio */}
                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                  Complete Enterprise Security Solution
                </h3>
                <p className="mb-6">
                  Scrubbe offers a comprehensive security platform that combines
                  advanced threat detection, authentication solutions, and
                  automated response systems to protect your enterprise from
                  modern threats.
                </p>
                <ul className="feature-list list-none mt-6 mb-4">
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    All-in-one security platform requiring minimal configuration
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Real-time monitoring and detection of user-based threats and
                    fraud attempts
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Advanced machine learning algorithms that adapt to your
                    business environment
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Seamless integration with existing infrastructure
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
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

            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="solution-content flex-1 md:flex-[1.5] order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                  Designed for Modern Enterprises
                </h3>
                <p className="mb-6">
                  Scrubbe is built to address the unique security challenges
                  faced by today&apos;s enterprises, with a focus on user
                  behavior analytics and automated threat response.
                </p>
                <ul className="feature-list list-none mt-6 mb-4">
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Intuitive dashboard providing complete visibility into
                    security events
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Automated reporting and compliance documentation
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Scalable architecture that grows with your business
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    24/7 threat monitoring and alerting
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Continuous updates to threat intelligence database
                  </li>
                </ul>
              </div>
              <div className="solution-image flex-1 text-center w-full md:w-auto order-1 md:order-2">
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
          </div>

          {/* Authentication Tab Content */}
          <div
            id="authentication"
            className={`tab-content ${
              activeTab === "authentication" ? "block" : "hidden"
            } animate-fadeIn`}
          >
            {/* Authentication Content */}
            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="solution-image flex-1 text-center w-full md:w-auto">
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
              </div>
              <div className="solution-content flex-1 md:flex-[1.5]">
                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                  Robust Authentication SDK
                </h3>
                <p className="mb-6">
                  Secure your applications and services with Scrubbe&apos;s
                  enterprise-grade Authentication SDK. Implement advanced
                  authentication methods with minimal development effort.
                </p>
                <ul className="feature-list list-none mt-6 mb-4">
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Multi-factor authentication out of the box
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Biometric authentication support
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Token-based authentication with configurable expiration
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Integration with major identity providers (OAuth, SAML,
                    OIDC)
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
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

            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="solution-content flex-1 md:flex-[1.5] order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                  Authentication Analytics and Reporting
                </h3>
                <p className="mb-6">
                  Gain powerful insights into authentication patterns across
                  your organization with built-in analytics and reporting tools.
                </p>
                <ul className="feature-list list-none mt-6 mb-4">
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Detailed login attempt visualization and reporting
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Geographic access pattern monitoring
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Device fingerprinting and verification
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Customizable risk scoring for authentication events
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Automated response to suspicious login attempts
                  </li>
                </ul>
              </div>
              <div className="solution-image flex-1 text-center w-full md:w-auto order-1 md:order-2">
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
          </div>

          {/* API Tab Content */}
          <div
            id="api"
            className={`tab-content ${
              activeTab === "api" ? "block" : "hidden"
            } animate-fadeIn`}
          >
            {/* API Content */}
            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="solution-image flex-1 text-center w-full md:w-auto">
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
              </div>
              <div className="solution-content flex-1 md:flex-[1.5]">
                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                  Secure API-as-a-Service
                </h3>
                <p className="mb-6">
                  Leverage Scrubbe&apos;s API-as-a-Service to extend your
                  security capabilities and integrate advanced threat detection
                  into your existing applications without building complex
                  security infrastructure.
                </p>
                <ul className="feature-list list-none mt-6 mb-4">
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    RESTful API endpoints for all Scrubbe security services
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Real-time threat intelligence accessible via API
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    User behavior analysis and risk scoring
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Transaction monitoring and fraud detection
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
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

            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="solution-content flex-1 md:flex-[1.5] order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                  Developer-Friendly Integration
                </h3>
                <p className="mb-6">
                  Designed with developers in mind, our API platform provides
                  the tools needed to implement security features quickly and
                  effectively.
                </p>
                <ul className="feature-list list-none mt-6 mb-4">
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Comprehensive API documentation with interactive examples
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Client libraries for multiple programming languages
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Webhook support for event-driven architectures
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Rate limiting and usage monitoring
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Sandbox environment for testing and development
                  </li>
                </ul>
              </div>
              <div className="solution-image flex-1 text-center w-full md:w-auto order-1 md:order-2">
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
          </div>

          {/* SOAR Tab Content */}
          <div
            id="soar"
            className={`tab-content ${
              activeTab === "soar" ? "block" : "hidden"
            } animate-fadeIn`}
          >
            {/* SOAR Content */}
            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="solution-image flex-1 text-center w-full md:w-auto">
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
              </div>
              <div className="solution-content flex-1 md:flex-[1.5]">
                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                  Powerful SOAR Capabilities
                </h3>
                <p className="mb-6">
                  Scrubbe&apos;s Security Orchestration, Automation, and
                  Response (SOAR) platform enables enterprises to automate
                  security workflows and respond to threats faster than ever
                  before.
                </p>
                <ul className="feature-list list-none mt-6 mb-4">
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Visual workflow builder for security playbooks
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Automated response to common security incidents
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Case management for security incidents
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Integration with major security tools and platforms
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
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

            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="solution-content flex-1 md:flex-[1.5] order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                  Advanced Threat Intelligence
                </h3>
                <p className="mb-6">
                  Stay ahead of emerging threats with Scrubbe&apos;s
                  continuously updated threat intelligence feed, integrated
                  directly into your security operations.
                </p>
                <ul className="feature-list list-none mt-6 mb-4">
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Global threat intelligence database
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Industry-specific threat patterns and signatures
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    User behavior analytics for detecting insider threats
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Anomaly detection powered by machine learning
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Contextual alerts with actionable recommendations
                  </li>
                </ul>
              </div>
              <div className="solution-image flex-1 text-center w-full md:w-auto order-1 md:order-2">
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
          </div>

          {/* Integration Tab Content */}
          <div
            id="integration"
            className={`tab-content ${
              activeTab === "integration" ? "block" : "hidden"
            } animate-fadeIn`}
          >
            {/* Integration Content */}
            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="solution-image flex-1 text-center w-full md:w-auto">
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  {" "}
                  {/* Container for Image */}
                  <Image
                    src="/placeholder-integration-1.jpg" // Placeholder image path
                    alt="Enterprise Integration"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="solution-content flex-1 md:flex-[1.5]">
                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                  Seamless Enterprise Integration
                </h3>
                <p className="mb-6">
                  Scrubbe is designed to integrate with your existing enterprise
                  infrastructure, providing immediate security benefits without
                  disrupting operations.
                </p>
                <ul className="feature-list list-none mt-6 mb-4">
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Integration with major cloud providers (AWS, Azure, GCP)
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Support for on-premises, cloud, and hybrid environments
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Connection to existing SIEM and log management systems
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Identity management integration (Active Directory, Okta,
                    etc.)
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
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

            <div className="solution-card flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="solution-content flex-1 md:flex-[1.5] order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                  Implementation Approach
                </h3>
                <p className="mb-6">
                  Whether you have a dedicated security team or not, Scrubbe
                  offers implementation pathways to get you up and running
                  quickly with enterprise-grade security.
                </p>
                <ul className="feature-list list-none mt-6 mb-4">
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Guided implementation process with expert support
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Pre-configured security rules and policies
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Phased deployment options to minimize business impact
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Comprehensive training for IT and security teams
                  </li>
                  <li className="relative pl-6 mb-3 before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-accent-color">
                    Continuous improvement recommendations based on your
                    environment
                  </li>
                </ul>
              </div>
              <div className="solution-image flex-1 text-center w-full md:w-auto order-1 md:order-2">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-gray-600 text-white py-16 text-center">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Start Securing Your Enterprise Today
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Ready to transform your enterprise security posture with
            Scrubbe&apos;s advanced fraud detection, authentication, and
            automated response capabilities? Our platform is designed to get you
            up and running quickly, regardless of your current security
            maturity.
          </p>
          <div className="cta-buttons flex justify-center gap-4 flex-col sm:flex-row">
            <a
              href="#"
              className="inline-block bg-accent-color hover:bg-emerald-600 text-white py-3 px-6 rounded-md font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Request a Demo
            </a>
            <a
              href="#"
              className="inline-block bg-transparent border-2 border-white text-white py-3 px-6 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-10 transform hover:-translate-y-1"
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
