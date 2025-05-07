"use client";
import { useState } from "react";
import Image from "next/image";

const MediumSizedCompanies = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    // Apply overall container constraints and base styles
    <div className="w-full mx-auto bg-slate-50 text-slate-900 leading-relaxed font-sans overflow-hidden">
      {" "}
      {/* Added overflow-hidden to prevent potential issues */}
      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-5 md:px-10 max-w-screen-xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            Enterprise-Grade Security for Medium-Sized Businesses
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-blue-100">
            Scrubbe delivers comprehensive threat detection, authentication, and
            automated response systems designed specifically for growing
            organizations with or without dedicated security teams.
          </p>
          <a
            href="#contact"
            className="cta-button inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
          >
            Schedule a Demo
          </a>
        </div>
      </section>
      {/* Complete Security Solutions Section */}
      <section className="section py-16">
        <div className="container mx-auto px-5 md:px-10 max-w-screen-xl">
          <div className="section-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-blue-800">
              Complete Security Solutions
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-slate-500">
              Regardless of your current security infrastructure, Scrubbe
              provides the tools and services you need to protect your business
              from fraud and user-based threats.
            </p>
          </div>

          {/* Stats */}
          <div className="stats-container flex justify-around flex-wrap gap-5 mt-10">
            <div className="stat-item flex-1 min-w-[200px] p-5 bg-white rounded-lg shadow-sm text-center">
              <div className="stat-number text-4xl font-bold text-blue-700 mb-2">
                94%
              </div>
              <div className="stat-label text-base text-slate-500">
                Reduction in unauthorized access attempts
              </div>
            </div>
            <div className="stat-item flex-1 min-w-[200px] p-5 bg-white rounded-lg shadow-sm text-center">
              <div className="stat-number text-4xl font-bold text-blue-700 mb-2">
                67%
              </div>
              <div className="stat-label text-base text-slate-500">
                Less time spent on security management
              </div>
            </div>
            <div className="stat-item flex-1 min-w-[200px] p-5 bg-white rounded-lg shadow-sm text-center">
              <div className="stat-number text-4xl font-bold text-blue-700 mb-2">
                89%
              </div>
              <div className="stat-label text-base text-slate-500">
                Faster threat detection and response
              </div>
            </div>
          </div>

          {/* Tabs Container */}
          <div className="tab-container my-16">
            {/* Tab Buttons */}
            <aside className="tabs flex justify-center mb-8 border-b border-slate-300 flex-wrap gap-x-4">
              <button
                className={`tab-button px-6 py-4 border-none bg-transparent text-base font-semibold cursor-pointer transition duration-300 ease-in-out relative hover:text-blue-700 ${
                  activeTab === "overview"
                    ? 'text-blue-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-700'
                    : "text-slate-500"
                }`}
                onClick={() => handleTabClick("overview")}
              >
                Solution Overview
              </button>
              <button
                className={`tab-button px-6 py-4 border-none bg-transparent text-base font-semibold cursor-pointer transition duration-300 ease-in-out relative hover:text-blue-700 ${
                  activeTab === "auth"
                    ? 'text-blue-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-700'
                    : "text-slate-500"
                }`}
                onClick={() => handleTabClick("auth")}
              >
                Authentication SDK
              </button>
              <button
                className={`tab-button px-6 py-4 border-none bg-transparent text-base font-semibold cursor-pointer transition duration-300 ease-in-out relative hover:text-blue-700 ${
                  activeTab === "api"
                    ? 'text-blue-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-700'
                    : "text-slate-500"
                }`}
                onClick={() => handleTabClick("api")}
              >
                API-as-a-Service
              </button>
              <button
                className={`tab-button px-6 py-4 border-none bg-transparent text-base font-semibold cursor-pointer transition duration-300 ease-in-out relative hover:text-blue-700 ${
                  activeTab === "soar"
                    ? 'text-blue-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-700'
                    : "text-slate-500"
                }`}
                onClick={() => handleTabClick("soar")}
              >
                SOAR Capabilities
              </button>
              <button
                className={`tab-button px-6 py-4 border-none bg-transparent text-base font-semibold cursor-pointer transition duration-300 ease-in-out relative hover:text-blue-700 ${
                  activeTab === "teams"
                    ? 'text-blue-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-700'
                    : "text-slate-500"
                }`}
                onClick={() => handleTabClick("teams")}
              >
                For Security Teams
              </button>
              <button
                className={`tab-button px-6 py-4 border-none bg-transparent text-base font-semibold cursor-pointer transition duration-300 ease-in-out relative hover:text-blue-700 ${
                  activeTab === "no-teams"
                    ? 'text-blue-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-700'
                    : "text-slate-500"
                }`}
                onClick={() => handleTabClick("no-teams")}
              >
                Without Security Teams
              </button>
            </aside>

            {/* Tab Content - Conditional Rendering based on activeTab state */}
            {activeTab === "overview" && (
              <div id="overview" className="tab-content">
                {" "}
                {/* Animation is not directly ported via Tailwind */}
                <div className="flex flex-col md:flex-row gap-10 items-center my-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                      The Complete Scrubbe Security System
                    </h3>
                    <p className="mb-6 text-slate-700">
                      Scrubbe offers a fully integrated security ecosystem that
                      addresses the unique challenges of medium-sized companies.
                      Our platform combines advanced SIEM (Security Information
                      and Event Management) with SOAR (Security Orchestration,
                      Automation and Response) capabilities, along with a robust
                      Authentication SDK and API-as-a-Service.
                    </p>
                    <ul className="benefits-list list-none my-8 space-y-5">
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        {/* Replicating the feature icon style */}
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Complete Visibility
                          </h4>
                          <p className="text-slate-600">
                            Monitor all user activities and authentication
                            events across your entire digital ecosystem
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Automated Responses
                          </h4>
                          <p className="text-slate-600">
                            Detect and neutralize threats without manual
                            intervention
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Seamless Integration
                          </h4>
                          <p className="text-slate-600">
                            Implement enterprise-grade security with minimal
                            development resources
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1 relative min-h-[250px] md:min-h-[400px] w-full">
                    {" "}
                    {/* Added w-full for mobile */}
                    {/* Using Next.js Image Component */}
                    <Image
                      src="/scrubbe-logo-01.png"
                      alt="Scrubbe Security Overview"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "auth" && (
              <div id="auth" className="tab-content">
                <div className="flex flex-col md:flex-row gap-10 items-center my-10">
                  <div className="flex-1 relative min-h-[250px] md:min-h-[400px] w-full">
                    {" "}
                    {/* Added w-full for mobile */}
                    <Image
                      src="/scrubbe-logo-01.png"
                      alt="Scrubbe Authentication SDK"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                      Authentication SDK: Secure User Access in Minutes
                    </h3>
                    <p className="mb-6 text-slate-700">
                      Our Authentication SDK provides enterprise-grade security
                      with minimal development effort. Implement multi-factor
                      authentication, behavioral analytics, and fraud detection
                      right out of the box.
                    </p>
                    <ul className="benefits-list list-none my-8 space-y-5">
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Drop-in Integration
                          </h4>
                          <p className="text-slate-600">
                            Integrate with your existing systems in days, not
                            months
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Continuous Session Monitoring
                          </h4>
                          <p className="text-slate-600">
                            Detect anomalous behavior even after successful
                            authentication
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Customizable Authentication Flows
                          </h4>
                          <p className="text-slate-600">
                            Tailor security measures to your specific business
                            requirements
                          </p>
                        </div>
                      </li>
                    </ul>
                    <p className="mb-6 text-slate-700">
                      Our SDK includes pre-built components for single sign-on,
                      biometric authentication, device fingerprinting, and
                      risk-based challenges that adapt to detected threat
                      levels.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "api" && (
              <div id="api" className="tab-content">
                <div className="flex flex-col md:flex-row gap-10 items-center my-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                      API-as-a-Service: End-to-End Security for All Your
                      Endpoints
                    </h3>
                    <p className="mb-6 text-slate-700">
                      Protect your API ecosystem with Scrubbe&lsquo;s
                      comprehensive API security service. Our solution monitors
                      all API traffic, identifies suspicious patterns, and
                      automatically mitigates attacks without disrupting
                      legitimate business operations.
                    </p>
                    <ul className="benefits-list list-none my-8 space-y-5">
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            API Traffic Analysis
                          </h4>
                          <p className="text-slate-600">
                            Detect unusual patterns and potential abuse across
                            all your endpoints
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Rate Limiting and Throttling
                          </h4>
                          <p className="text-slate-600">
                            Intelligently manage API access based on user
                            behavior and risk levels
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Data Leakage Prevention
                          </h4>
                          <p className="text-slate-600">
                            Identify and block attempts to extract sensitive
                            information
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1 relative min-h-[250px] md:min-h-[400px] w-full">
                    {" "}
                    {/* Added w-full for mobile */}
                    <Image
                      src="/scrubbe-logo-01.png"
                      alt="Scrubbe API-as-a-Service"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "soar" && (
              <div id="soar" className="tab-content">
                <div className="flex flex-col md:flex-row gap-10 items-center my-10">
                  <div className="flex-1 relative min-h-[250px] md:min-h-[400px] w-full">
                    {" "}
                    {/* Added w-full for mobile */}
                    <Image
                      src="/scrubbe-logo-01.png"
                      alt="Scrubbe SOAR Capabilities"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                      SOAR Capabilities: Automate Your Security Response
                    </h3>
                    <p className="mb-6 text-slate-700">
                      Scrubbe&lsquo;s Security Orchestration, Automation and
                      Response (SOAR) system transforms how medium-sized
                      businesses handle security incidents. Our platform detects
                      threats and executes response playbooks automatically,
                      without requiring 24/7 security staff.
                    </p>
                    <ul className="benefits-list list-none my-8 space-y-5">
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Pre-built Response Playbooks
                          </h4>
                          <p className="text-slate-600">
                            Leverage industry best practices for common threat
                            scenarios
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Automatic Containment
                          </h4>
                          <p className="text-slate-600">
                            Isolate compromised accounts and systems to prevent
                            lateral movement
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Contextual Analysis
                          </h4>
                          <p className="text-slate-600">
                            Make intelligent response decisions based on
                            comprehensive threat intelligence
                          </p>
                        </div>
                      </li>
                    </ul>
                    <p className="mb-6 text-slate-700">
                      Our SOAR system can integrate with your existing security
                      tools and business applications to provide seamless,
                      automated protection across your entire organization.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "teams" && (
              <div id="teams" className="tab-content">
                <div className="flex flex-col md:flex-row gap-10 items-center my-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                      Scrubbe for Companies with Security Teams
                    </h3>
                    <p className="mb-6 text-slate-700">
                      If you already have a dedicated security team, Scrubbe
                      becomes your force multiplier. Our solutions integrate
                      with your existing security infrastructure and empower
                      your team to accomplish more with fewer resources.
                    </p>
                    <ul className="benefits-list list-none my-8 space-y-5">
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Enhanced Visibility
                          </h4>
                          <p className="text-slate-600">
                            Give your team complete insight into all security
                            events across your organization
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Automated Triage
                          </h4>
                          <p className="text-slate-600">
                            Let your team focus on critical threats while
                            Scrubbe handles routine alerts
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Customizable Security Policies
                          </h4>
                          <p className="text-slate-600">
                            Implement your team&lsquo;s expertise through
                            configurable security rules and workflows
                          </p>
                        </div>
                      </li>
                    </ul>
                    <p className="mb-6 text-slate-700">
                      Our platform helps your security team scale their
                      capabilities by handling routine tasks and providing the
                      tools they need to effectively manage more complex
                      threats.
                    </p>
                  </div>
                  <div className="flex-1 relative min-h-[250px] md:min-h-[400px] w-full">
                    {" "}
                    {/* Added w-full for mobile */}
                    <Image
                      src="/scrubbe-logo-01.png"
                      alt="Scrubbe for Security Teams"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "no-teams" && (
              <div id="no-teams" className="tab-content">
                <div className="flex flex-col md:flex-row gap-10 items-center my-10">
                  <div className="flex-1 relative min-h-[250px] md:min-h-[400px] w-full">
                    {" "}
                    {/* Added w-full for mobile */}
                    <Image
                      src="/scrubbe-logo-01.png"
                      alt="Scrubbe for Companies without Security Teams"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                      Scrubbe for Companies without Dedicated Security Teams
                    </h3>
                    <p className="mb-6 text-slate-700">
                      For organizations without security specialists, Scrubbe
                      provides enterprise-level protection that runs efficiently
                      with minimal oversight. Our system acts as your virtual
                      security team, handling detection and response
                      automatically.
                    </p>
                    <ul className="benefits-list list-none my-8 space-y-5">
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Zero-Day Deployment
                          </h4>
                          <p className="text-slate-600">
                            Get up and running quickly without specialized
                            security expertise
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Managed Detection and Response
                          </h4>
                          <p className="text-slate-600">
                            Benefit from continuous monitoring and automatic
                            threat remediation
                          </p>
                        </div>
                      </li>
                      <li className="benefit-item flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="feature-icon w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700 font-bold">
                          ✓
                        </div>
                        <div className="benefit-text flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">
                            Security Advisory Services
                          </h4>
                          <p className="text-slate-600">
                            Access expert guidance when you need it for critical
                            security decisions
                          </p>
                        </div>
                      </li>
                    </ul>
                    <p className="mb-6 text-slate-700">
                      Scrubbe effectively bridges the security talent gap,
                      providing robust protection for organizations that
                      don&lsquo;t have the resources to build and maintain an
                      in-house security team.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* How Scrubbe Works Section */}
      <section className="section py-16 bg-slate-100">
        <div className="container mx-auto px-5 md:px-10 max-w-screen-xl">
          <div className="section-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-blue-800">
              How Scrubbe Works
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-slate-500">
              A seamless security ecosystem that protects your business at every
              level
            </p>
          </div>

          <div className="solution-grid flex flex-wrap gap-8 mt-10 justify-center">
            <div className="solution-card flex-1 min-w-[300px] max-w-[350px] bg-white rounded-lg p-8 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <div className="relative w-full h-40 mb-5 rounded-md overflow-hidden">
                {/* Using Next.js Image Component for card images */}
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="User Authentication"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                1. Secure Authentication
              </h3>
              <p className="text-slate-700">
                Our Authentication SDK provides robust identity verification
                while maintaining a smooth user experience. Implement
                passwordless options, adaptive multi-factor authentication, and
                continuous session validation.
              </p>
            </div>

            <div className="solution-card flex-1 min-w-[300px] max-w-[350px] bg-white rounded-lg p-8 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <div className="relative w-full h-40 mb-5 rounded-md overflow-hidden">
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="Comprehensive Monitoring"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                2. Comprehensive Monitoring
              </h3>
              <p className="text-slate-700">
                Scrubbe collects and analyzes data from all user interactions,
                authentication events, and API calls to establish behavioral
                baselines and detect anomalies in real-time.
              </p>
            </div>

            <div className="solution-card flex-1 min-w-[300px] max-w-[350px] bg-white rounded-lg p-8 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <div className="relative w-full h-40 mb-5 rounded-md overflow-hidden">
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="Automated Response"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                3. Automated Response
              </h3>
              <p className="text-slate-700">
                When threats are detected, Scrubbe automatically executes
                appropriate response actions—from additional verification
                challenges to account lockdowns—based on the severity and
                context of the threat.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Implementation Journey Section */}
      <section className="section py-16">
        <div className="container mx-auto px-5 md:px-10 max-w-screen-xl">
          <div className="section-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-blue-800">
              Implementation Journey
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-slate-500">
              Getting started with Scrubbe is easier than you think
            </p>
          </div>

          <div className="solution-grid flex flex-wrap gap-8 mt-10 justify-center">
            <div className="solution-card flex-1 min-w-[300px] max-w-[350px] bg-white rounded-lg p-8 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Day 1: Initial Setup
              </h3>
              <ul className="feature-list list-none my-5 space-y-4">
                <li className="feature-item flex items-start">
                  <div className="feature-icon w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-xs">
                    1
                  </div>
                  <div className="text-slate-700">
                    Quick deployment of basic monitoring capabilities
                  </div>
                </li>
                <li className="feature-item flex items-start">
                  <div className="feature-icon w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-xs">
                    2
                  </div>
                  <div className="text-slate-700">
                    Authentication SDK integration with your primary user portal
                  </div>
                </li>
                <li className="feature-item flex items-start">
                  <div className="feature-icon w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-xs">
                    3
                  </div>
                  <div className="text-slate-700">
                    Configuration of alert notifications for critical events
                  </div>
                </li>
              </ul>
            </div>

            <div className="solution-card flex-1 min-w-[300px] max-w-[350px] bg-white rounded-lg p-8 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Week 1: Enhanced Security
              </h3>
              <ul className="feature-list list-none my-5 space-y-4">
                <li className="feature-item flex items-start">
                  <div className="feature-icon w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-xs">
                    1
                  </div>
                  <div className="text-slate-700">
                    Complete integration with all authentication endpoints
                  </div>
                </li>
                <li className="feature-item flex items-start">
                  <div className="feature-icon w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-xs">
                    2
                  </div>
                  <div className="text-slate-700">
                    API-as-a-Service protection for core business functions
                  </div>
                </li>
                <li className="feature-item flex items-start">
                  <div className="feature-icon w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-xs">
                    3
                  </div>
                  <div className="text-slate-700">
                    Implementation of basic automated response playbooks
                  </div>
                </li>
              </ul>
            </div>

            <div className="solution-card flex-1 min-w-[300px] max-w-[350px] bg-white rounded-lg p-8 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Month 1: Fully Optimized
              </h3>
              <ul className="feature-list list-none my-5 space-y-4">
                <li className="feature-item flex items-start">
                  <div className="feature-icon w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-xs">
                    1
                  </div>
                  <div className="text-slate-700">
                    Fine-tuning of detection algorithms based on your business
                    context
                  </div>
                </li>
                <li className="feature-item flex items-start">
                  <div className="feature-icon w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-xs">
                    2
                  </div>
                  <div className="text-slate-700">
                    Advanced SOAR capabilities with customized playbooks
                  </div>
                </li>
                <li className="feature-item flex items-start">
                  <div className="feature-icon w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-xs">
                    3
                  </div>
                  <div className="text-slate-700">
                    Complete security ecosystem with all components working in
                    harmony
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="section py-16 bg-slate-100" id="contact">
        <div className="container mx-auto px-5 md:px-10 max-w-screen-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-blue-800">
            Ready to Secure Your Business?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-500">
            Take the first step toward comprehensive security that grows with
            your organization
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="cta-button inline-block bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-blue-800"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediumSizedCompanies;
