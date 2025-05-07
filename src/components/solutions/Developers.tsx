"use client";
import { useState } from "react";
import Image from "next/image";
import { FaShieldAlt, FaBolt, FaTools, FaCheck } from "react-icons/fa";

const Developers = () => {
  const [activeTab, setActiveTab] = useState("fraud-detection");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Map original color variables to Tailwind classes
  // --primary: #2563eb -> blue-600
  // --primary-dark: #1d4ed8 -> blue-700
  // --secondary: #10b981 -> emerald-500
  // --dark: #1e293b -> slate-800
  // --light: #f8fafc -> slate-50
  // --light-gray: #e2e8f0 -> slate-200
  // --text: #334155 -> slate-700

  return (
    // Body background and text color, applying min-width constraint
    <div className="bg-slate-50 text-slate-700 leading-relaxed min-w-[320px] antialiased">
      {/* Hero Section */}
      <section className="py-16 text-center text-white bg-gradient-to-br from-slate-800 to-[#2a4365]">
        {" "}
        {/* Used hex value for the gradient end */}
        <div className="container mx-auto w-11/12 max-w-[1200px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced Security Solutions for Developers
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            Integrate Scrubbe&apos;s powerful SIEM and SOAR platform into your
            applications to detect and prevent user-based fraud and security
            threats with minimal effort.
          </p>
          <div className="hero-buttons flex justify-center">
            {" "}
            {/* Added flex and justify-center */}
            <a
              href="#"
              className="btn inline-block bg-blue-600 text-white py-3 px-7 rounded transition-all duration-300 font-semibold mx-2 hover:bg-blue-700 hover:-translate-y-0.5"
            >
              Get Started
            </a>
            <a
              href="#"
              className="btn btn-secondary inline-block bg-transparent border-2 border-white text-white py-3 px-7 rounded transition-all duration-300 font-semibold mx-2 hover:bg-white hover:bg-opacity-10 hover:-translate-y-0.5"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16">
        <article className="container mx-auto w-11/12 max-w-[1200px]">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b-2 border-slate-200 mb-8">
            <button
              className={`tab-btn w-1/2 md:w-auto md:flex-1 min-w-0 md:min-w-[150px] text-center py-3 md:py-4 px-2 md:px-6 font-semibold text-slate-700 bg-none border-none border-b-2 cursor-pointer transition-colors duration-300 ${
                activeTab === "fraud-detection"
                  ? "active text-blue-600 border-blue-600"
                  : "border-transparent hover:text-blue-600"
              }`}
              onClick={() => handleTabClick("fraud-detection")}
            >
              Fraud Detection
            </button>
            <button
              className={`tab-btn w-1/2 md:w-auto md:flex-1 min-w-0 md:min-w-[150px] text-center py-3 md:py-4 px-2 md:px-6 font-semibold text-slate-700 bg-none border-none border-b-2 cursor-pointer transition-colors duration-300 ${
                activeTab === "authentication"
                  ? "active text-blue-600 border-blue-600"
                  : "border-transparent hover:text-blue-600"
              }`}
              onClick={() => handleTabClick("authentication")}
            >
              Authentication SDK
            </button>
            <button
              className={`tab-btn w-1/2 md:w-auto md:flex-1 min-w-0 md:min-w-[150px] text-center py-3 md:py-4 px-2 md:px-6 font-semibold text-slate-700 bg-none border-none border-b-2 cursor-pointer transition-colors duration-300 ${
                activeTab === "api-services"
                  ? "active text-blue-600 border-blue-600"
                  : "border-transparent hover:text-blue-600"
              }`}
              onClick={() => handleTabClick("api-services")}
            >
              API Services
            </button>
            <button
              className={`tab-btn w-1/2 md:w-auto md:flex-1 min-w-0 md:min-w-[150px] text-center py-3 md:py-4 px-2 md:px-6 font-semibold text-slate-700 bg-none border-none border-b-2 cursor-pointer transition-colors duration-300 ${
                activeTab === "integration"
                  ? "active text-blue-600 border-blue-600"
                  : "border-transparent hover:text-blue-600"
              }`}
              onClick={() => handleTabClick("integration")}
            >
              Integration
            </button>
          </div>

          {/* Tab Content Container - Using display instead of absolute positioning */}
          <div className="min-h-[300px] md:min-h-[400px]">
            {/* Tab Content - Fraud Detection */}
            {activeTab === "fraud-detection" && (
              <div
                id="fraud-detection"
                className="tab-content transition-opacity duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="tab-text w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
                      Advanced Fraud Detection
                    </h2>
                    <p className="mb-6">
                      Scrubbe&apos;s fraud detection system uses machine
                      learning and behavioral analysis to identify suspicious
                      activities in real-time, protecting your users and
                      business from financial loss and data breaches.
                    </p>

                    <ul className="list-none my-6">
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Real-time transaction monitoring with sub-100ms response
                        times
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Anomaly detection based on user behavior patterns
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Customizable risk scoring algorithms
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Automated threat response workflows
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Comprehensive audit logs for compliance requirements
                      </li>
                    </ul>

                    <p>
                      Our fraud detection APIs can be implemented with just a
                      few lines of code, enabling you to focus on core
                      application features while we handle the security.
                    </p>
                  </div>
                  <div className="tab-image w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="relative w-full aspect-video md:aspect-square max-h-[400px]">
                      <Image
                        src="/scrubbe-logo-01.png"
                        alt="Fraud Detection Dashboard"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content - Authentication */}
            {activeTab === "authentication" && (
              <div
                id="authentication"
                className="tab-content transition-opacity duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="tab-text w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
                      Complete Authentication SDK
                    </h2>
                    <p className="mb-6">
                      Secure your application with Scrubbe&apos;s Authentication
                      SDK, offering multi-factor authentication, passwordless
                      login options, and session management with minimal
                      integration effort.
                    </p>

                    <ul className="list-none my-6">
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Multi-factor authentication (MFA) with SMS, email, and
                        app-based options
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Passwordless authentication using magic links and
                        biometrics
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Single Sign-On (SSO) capabilities for enterprise
                        customers
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        FIDO2 and WebAuthn support for hardware security keys
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Automated brute force attack prevention
                      </li>
                    </ul>

                    <p>
                      Our SDK is fully customizable to match your
                      application&apos;s look and feel, creating a seamless
                      experience for your users while maintaining
                      enterprise-grade security.
                    </p>
                  </div>
                  <div className="tab-image w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="relative w-full aspect-video md:aspect-square max-h-[400px]">
                      <Image
                        src="/scrubbe-logo-01.png"
                        alt="Authentication SDK Implementation"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content - API Services */}
            {activeTab === "api-services" && (
              <div
                id="api-services"
                className="tab-content transition-opacity duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="tab-text w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
                      Comprehensive API Services
                    </h2>
                    <p className="mb-6">
                      Access Scrubbe&apos;s powerful security features through
                      our simple, well-documented REST APIs. Integrate fraud
                      detection, user verification, and threat intelligence into
                      your applications with ease.
                    </p>

                    <ul className="list-none my-6">
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        RESTful API architecture with comprehensive
                        documentation
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        SDKs available for JavaScript, Python, Java, Ruby, and
                        .NET
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Webhook integrations for real-time event notifications
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Scalable infrastructure handling millions of requests
                        per second
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        99.99% uptime SLA for enterprise customers
                      </li>
                    </ul>

                    <p>
                      Our API-first approach means you can easily incorporate
                      advanced security features into your existing architecture
                      without major refactoring.
                    </p>
                  </div>
                  <div className="tab-image w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="relative w-full aspect-video md:aspect-square max-h-[400px]">
                      <Image
                        src="/scrubbe-logo-01.png"
                        alt="API Documentation Interface"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content - Integration */}
            {activeTab === "integration" && (
              <div
                id="integration"
                className="tab-content transition-opacity duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="tab-text w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
                      Seamless Integration
                    </h2>
                    <p className="mb-6">
                      Integrate Scrubbe into your development workflow with
                      minimal friction. Our platform works with your existing
                      tools and processes, speeding up deployment while
                      enhancing security.
                    </p>

                    <ul className="list-none my-6">
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        One-click integration with popular frameworks and
                        platforms
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        CI/CD pipeline compatibility with GitHub Actions,
                        Jenkins, and more
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Containerized deployment options with Docker and
                        Kubernetes support
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Comprehensive logging and monitoring integrations
                      </li>
                      <li className="mb-4 flex items-start">
                        <FaCheck className="text-emerald-500 mr-3 mt-1 shrink-0" />
                        Developer-friendly documentation with interactive
                        examples
                      </li>
                    </ul>

                    <p>
                      From startups to enterprise organizations, Scrubbe scales
                      with your needs and integrates with your existing tech
                      stack without disrupting development workflows.
                    </p>
                  </div>
                  <div className="tab-image w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="relative w-full aspect-video md:aspect-square max-h-[400px]">
                      <Image
                        src="/scrubbe-logo-01.png"
                        alt="Integration Workflow Diagram"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Feature Cards */}
          <aside className="mt-20 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-slate-50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 text-xl md:text-2xl text-blue-600">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-slate-800">
                Advanced Threat Intelligence
              </h3>
              <p className="text-sm md:text-base">
                Leverage our global threat intelligence network to stay ahead of
                emerging fraud patterns and attack vectors.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-slate-50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 text-xl md:text-2xl text-yellow-500">
                <FaBolt />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-slate-800">
                High Performance
              </h3>
              <p className="text-sm md:text-base">
                Built for speed with sub-100ms response times even at enterprise
                scale with millions of users.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-slate-50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 text-xl md:text-2xl text-green-600">
                <FaTools />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-slate-800">
                Developer-First
              </h3>
              <p className="text-sm md:text-base">
                Designed by developers for developers with excellent
                documentation, SDKs, and support.
              </p>
            </div>
          </aside>
        </article>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-slate-800 text-white py-16 text-center">
        <div className="container mx-auto w-11/12 max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Secure Your Application?
          </h2>
          <p className="max-w-3xl mx-auto mb-8 opacity-90">
            Join thousands of developers who trust Scrubbe to protect their
            applications and users from sophisticated threats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4">
            <a
              href="#"
              className="btn inline-block bg-blue-600 text-white py-3 px-7 rounded transition-all duration-300 font-semibold hover:bg-blue-700 hover:-translate-y-0.5"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="btn btn-secondary inline-block bg-transparent border-2 border-white text-white py-3 px-7 rounded transition-all duration-300 font-semibold hover:bg-white hover:bg-opacity-10 hover:-translate-y-0.5"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developers;
