"use client";
import React, { useState } from "react";
import {
  FiInfo,
  FiCheckCircle,
  FiMonitor,
  FiLock,
  FiCloud,
  FiGlobe,
  FiKey,
  FiSmartphone,
  FiPieChart,
  FiSearch,
} from "react-icons/fi";

// Types
type Step = 1 | 2 | 3 | 4 | 5;

interface DataSource {
  id: string;
  icon: React.ReactNode;
  title: string;
  selected: boolean;
}

interface AlertRule {
  id: string;
  label: string;
  hint: string;
  enabled: boolean;
}

const SetupConfiguration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const totalSteps = 5;

  // Form state
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    companySize: "",
    primaryContact: "",
    contactEmail: "",
    deploymentType: "",
    dataRetention: "",
    apiKey: "scb_ZXY123456789abcdefghijklmno",
  });

  // Data sources
  const [dataSources, setDataSources] = useState<DataSource[]>([
    {
      id: "endpoint",
      icon: <FiMonitor className="text-2xl" />,
      title: "Endpoint Logs",
      selected: false,
    },
    {
      id: "firewall",
      icon: <FiLock className="text-2xl" />,
      title: "Firewall Logs",
      selected: false,
    },
    {
      id: "cloud",
      icon: <FiCloud className="text-2xl" />,
      title: "Cloud Logs",
      selected: false,
    },
    {
      id: "dns",
      icon: <FiGlobe className="text-2xl" />,
      title: "DNS Logs",
      selected: false,
    },
    {
      id: "auth",
      icon: <FiKey className="text-2xl" />,
      title: "Authentication Logs",
      selected: false,
    },
    {
      id: "mobile",
      icon: <FiSmartphone className="text-2xl" />,
      title: "Mobile Device Logs",
      selected: false,
    },
    {
      id: "application",
      icon: <FiPieChart className="text-2xl" />,
      title: "Application Logs",
      selected: false,
    },
    {
      id: "ids",
      icon: <FiSearch className="text-2xl" />,
      title: "IDS/IPS Logs",
      selected: false,
    },
  ]);

  // Alert rules
  const [alertRules, setAlertRules] = useState<AlertRule[]>([
    {
      id: "rule1",
      label: "Brute Force Detection",
      hint: "Detect multiple failed login attempts",
      enabled: true,
    },
    {
      id: "rule2",
      label: "Malware Detection",
      hint: "Alert on potential malware activities",
      enabled: true,
    },
    {
      id: "rule3",
      label: "Privilege Escalation",
      hint: "Detect unauthorized privilege changes",
      enabled: true,
    },
    {
      id: "rule4",
      label: "Data Exfiltration",
      hint: "Alert on unusual data transfers",
      enabled: true,
    },
    {
      id: "rule5",
      label: "Unauthorized Access Attempts",
      hint: "Detect access to restricted resources",
      enabled: false,
    },
    {
      id: "rule6",
      label: "Configuration Changes",
      hint: "Alert on critical system configuration changes",
      enabled: false,
    },
  ]);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Toggle data source selection
  const toggleDataSource = (id: string) => {
    setDataSources((prev) =>
      prev.map((source) =>
        source.id === id ? { ...source, selected: !source.selected } : source
      )
    );
  };

  // Toggle alert rule enabled state
  const toggleAlertRule = (id: string) => {
    setAlertRules((prev) =>
      prev.map((rule) =>
        rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
      )
    );
  };

  // Navigation functions
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  // Calculate progress percentage for progress bar
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <section className="h-auto bg-slate-50 text-slate-800 container mx-auto px-4 py-8 w-full">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to Scrubbe
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Complete the following steps to set up your SIEM & SOAR environment
          and start protecting your infrastructure.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative max-w-3xl mx-auto mb-12">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`relative z-10 flex flex-col items-center`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                  step < currentStep
                    ? "bg-green-500 text-white border-2 border-green-500"
                    : step === currentStep
                    ? "bg-blue-600 text-white border-2 border-blue-600"
                    : "bg-white border-2 border-slate-200 text-slate-400"
                }`}
              >
                {step < currentStep ? "✓" : step}
              </div>
              <div
                className={`text-xs font-medium mt-2 transition-colors ${
                  step < currentStep
                    ? "text-green-500"
                    : step === currentStep
                    ? "text-blue-600"
                    : "text-slate-400"
                }`}
              >
                {step === 1 && "Account Setup"}
                {step === 2 && "Data Sources"}
                {step === 3 && "Integration"}
                {step === 4 && "Alert Rules"}
                {step === 5 && "Confirmation"}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Line */}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>
        <div
          className="absolute top-4 left-0 h-0.5 bg-blue-600 -z-0 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Form Container */}
      <article className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
        {/* Step 1: Account Setup */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-slate-200">
              Account Setup
            </h2>

            <div className="mb-6">
              <label htmlFor="companyName" className="block mb-2 font-medium">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="industry" className="block mb-2 font-medium">
                Industry
              </label>
              <select
                id="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                required
              >
                <option value="" disabled>
                  Select your industry
                </option>
                <option value="finance">Finance & Banking</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail</option>
                <option value="technology">Technology</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="government">Government</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="companySize" className="block mb-2 font-medium">
                Company Size
              </label>
              <select
                id="companySize"
                value={formData.companySize}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                required
              >
                <option value="" disabled>
                  Select company size
                </option>
                <option value="1-50">1-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501-1000">501-1000 employees</option>
                <option value="1001-5000">1001-5000 employees</option>
                <option value="5000+">5000+ employees</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="primaryContact"
                className="block mb-2 font-medium"
              >
                Primary Security Contact
              </label>
              <input
                type="text"
                id="primaryContact"
                placeholder="Full name"
                value={formData.primaryContact}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="contactEmail" className="block mb-2 font-medium">
                Contact Email
              </label>
              <input
                type="email"
                id="contactEmail"
                placeholder="email@company.com"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                required
              />
            </div>

            <div className="flex justify-between mt-8">
              <button
                className="px-6 py-3 border border-slate-300 rounded-md text-slate-500 font-medium bg-white transition-colors opacity-50 cursor-not-allowed"
                disabled
              >
                Previous
              </button>
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                onClick={nextStep}
              >
                Next: Data Sources
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Data Sources */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-slate-200">
              Data Sources
            </h2>

            <p className="mb-4">
              Select the data sources you want to integrate with Scrubbe:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
              {dataSources.map((source) => (
                <div
                  key={source.id}
                  onClick={() => toggleDataSource(source.id)}
                  className={`border rounded-md p-4 flex flex-col items-center cursor-pointer transition-all hover:border-blue-600 hover:shadow-sm ${
                    source.selected
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200"
                  }`}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    {source.icon}
                  </div>
                  <div className="text-center font-medium text-sm">
                    {source.title}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start p-4 bg-slate-50 border-l-4 border-blue-600 rounded mb-6">
              <FiInfo className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-sm">
                You can add more data sources later in the platform settings.
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                className="px-6 py-3 border border-slate-300 rounded-md text-slate-500 font-medium bg-white transition-colors hover:bg-slate-50"
                onClick={previousStep}
              >
                Previous
              </button>
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                onClick={nextStep}
              >
                Next: Integration
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Integration */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-slate-200">
              Integration Setup
            </h2>

            <div className="mb-6">
              <label
                htmlFor="deploymentType"
                className="block mb-2 font-medium"
              >
                Deployment Type
              </label>
              <select
                id="deploymentType"
                value={formData.deploymentType}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                required
              >
                <option value="" disabled>
                  Select deployment type
                </option>
                <option value="cloud">Cloud-based (SaaS)</option>
                <option value="on-premise">On-premise</option>
                <option value="hybrid">Hybrid</option>
              </select>
              <span className="text-xs text-slate-500 mt-1 block">
                Choose how you want to deploy the Scrubbe platform
              </span>
            </div>

            <div className="mb-6">
              <label htmlFor="dataRetention" className="block mb-2 font-medium">
                Data Retention Period
              </label>
              <select
                id="dataRetention"
                value={formData.dataRetention}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                required
              >
                <option value="" disabled>
                  Select retention period
                </option>
                <option value="30days">30 days</option>
                <option value="90days">90 days</option>
                <option value="180days">180 days</option>
                <option value="1year">1 year</option>
                <option value="custom">Custom period</option>
              </select>
              <span className="text-xs text-slate-500 mt-1 block">
                How long you want to keep your security data
              </span>
            </div>

            <div className="mb-6">
              <label htmlFor="apiKey" className="block mb-2 font-medium">
                API Key (Generated)
              </label>
              <input
                type="text"
                id="apiKey"
                value={formData.apiKey}
                readOnly
                className="w-full px-3 py-3 border border-slate-300 rounded-md bg-slate-50 focus:outline-none"
              />
              <span className="text-xs text-slate-500 mt-1 block">
                Use this API key to authenticate your data collectors
              </span>
            </div>

            <div className="flex items-start p-4 bg-slate-50 border-l-4 border-blue-600 rounded mb-6">
              <FiInfo className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-sm">
                After completing onboarding, you&lsquo;ll receive detailed
                integration instructions for your selected data sources.
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                className="px-6 py-3 border border-slate-300 rounded-md text-slate-500 font-medium bg-white transition-colors hover:bg-slate-50"
                onClick={previousStep}
              >
                Previous
              </button>
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                onClick={nextStep}
              >
                Next: Alert Rules
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Alert Rules */}
        {currentStep === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-slate-200">
              Alert Rules Configuration
            </h2>

            <p className="mb-4">
              Select the initial set of alert rules you want to enable:
            </p>

            {alertRules.map((rule) => (
              <div key={rule.id} className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={rule.id}
                    checked={rule.enabled}
                    onChange={() => toggleAlertRule(rule.id)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 mr-2"
                  />
                  <label htmlFor={rule.id} className="font-medium">
                    {rule.label}
                  </label>
                </div>
                <span className="text-xs text-slate-500 ml-6 block">
                  {rule.hint}
                </span>
              </div>
            ))}

            <div className="flex items-start p-4 bg-slate-50 border-l-4 border-blue-600 rounded mb-6 mt-6">
              <FiInfo className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-sm">
                You can customize these rules and create new ones in the
                platform after onboarding.
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                className="px-6 py-3 border border-slate-300 rounded-md text-slate-500 font-medium bg-white transition-colors hover:bg-slate-50"
                onClick={previousStep}
              >
                Previous
              </button>
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                onClick={nextStep}
              >
                Complete Setup
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {currentStep === 5 && (
          <div className="text-center py-4">
            <div className="mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <FiCheckCircle size={32} />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Setup Complete!</h2>
              <p className="text-slate-600">
                Your Scrubbe SIEM & SOAR platform is now being configured.
              </p>
              <p className="text-slate-600 mt-4">
                Our integration team will contact you within 24 hours to
                complete the final setup steps and provide training.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-slate-600 mb-4">
                Meanwhile, you can explore the platform and familiarize yourself
                with its features.
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
                Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default SetupConfiguration;
