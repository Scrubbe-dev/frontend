// PricingAndAddons.tsx
import React from "react";
import { FiCheck, FiX } from "react-icons/fi"; // Assumes react-icons

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EzraPlans: any[] = [
  {
    plan: "Ezra Lite",
    price: "$99/ Month",
    features: [
      "Alert Summaries",
      "Timestamp",
      "Rule Generation",
      "SOC Co-Pilot",
      "Data Privacy",
      "Language Support",
    ],
    featureDetails: {
      "Alert Summaries": "✅",
      "Rule Generation": "❌",
      "SOC Co-Pilot": "❌",
      "Data Privacy": "N/A",
      "Language Support": "English Only",
    },
    action: "Add Ezra Lite",
  },
  {
    plan: "Ezra Pro",
    price: "$399/ Month",
    features: [
      "Alert Summaries",
      "Rule Generation",
      "SOC Co-Pilot",
      "Data Privacy",
      "Language Support",
    ],
    featureDetails: {
      "Alert Summaries": "✅",
      "Rule Generation": "✅ Drafting Assistance",
      "SOC Co-Pilot": "✅ AI-assisted alert triage",
      "Data Privacy": "✅ AI in private context",
      "Language Support": "English (Spanish, French) Coming soon",
    },
    action: "Add Ezra Pro",
  },
  {
    plan: "Ezra Enterprise",
    price: "Custom Pricing",
    features: [
      "Alert Summaries",
      "Rule Generation",
      "SOC Co-Pilot",
      "Data Privacy",
      "Language Support",
    ],
    featureDetails: {
      "Alert Summaries": "✅ Threat Severity Modeling",
      "Rule Generation": "✅ Prompt Guardrails & Templates",
      "SOC Co-Pilot": "✅ Auto-mitigations + Escalation",
      "Data Privacy": "✅ On-Prem Model Option",
      "Language Support": "5+ Languages Coming soon",
    },
    action: "Add Ezra Enterprise",
  },
];

const Optionals = [
  {
    feature: "Additional Fingerprint Requests",
    price: "$49 per 10,000 requests",
    action: "Add Feature",
  },
  {
    feature: "Extended Log Retention",
    price: "Starting at $250/mo (up to 1 year)",
    action: "Add Feature",
  },
  {
    feature: "SIEM Forwarders (AWS/GCP/Azure)",
    price: "Included in Growth+",
    action: "Add Feature",
  },
  {
    feature: "Audit Trail Exports (JSON/CSV)",
    price: "Included in Growth+",
    action: "Add Feature",
  },
  {
    feature: "Audit Trail Exports (JSON/CSV)",
    price: "$100/mo or included in Enterprise",
    action: "Add Feature",
  },
  {
    feature: "SSO / SCIM",
    price: "Included in Enterprise only",
    action: "Add Feature",
  },
];

const PricingAndAddons = () => {
  return (
    <div className="bg-white">
      <div className=" max-w-[1440px] mx-auto p-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ezra AI Add-On (Optional)</h2>
          <p className="text-gray-600 max-w-2xl mb-8">
            Ezra can be enabled on any plan to add LLM-powered rule writing,
            incident response, and alert summarization.
          </p>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 divide-x divide-gray-200">
              <div className="px-6 py-4 text-sm font-medium text-gray-500 uppercase">
                Ezra Plan
              </div>
              {EzraPlans.map((plan, index) => (
                <div
                  key={index}
                  className="px-6 py-4 text-sm font-medium text-gray-500 uppercase"
                >
                  {plan.plan}
                </div>
              ))}
            </div>
            <div className="divide-y divide-gray-200">
              {Object.keys(EzraPlans[0].featureDetails).map(
                (feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="grid grid-cols-4 divide-x divide-gray-200"
                  >
                    <div className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {feature}
                    </div>
                    {EzraPlans.map((plan, planIndex) => (
                      <div
                        key={planIndex}
                        className="px-6 py-4 text-sm text-gray-500"
                      >
                        {plan?.featureDetails[feature] === "✅" && (
                          <FiCheck className="text-green-500" />
                        )}
                        {plan.featureDetails[feature] === "❌" && (
                          <FiX className="text-red-500" />
                        )}
                        {plan.featureDetails[feature] !== "✅" &&
                          plan.featureDetails[feature] !== "❌" &&
                          plan.featureDetails[feature]}
                      </div>
                    ))}
                  </div>
                )
              )}
              <div className="grid grid-cols-4 divide-x divide-gray-200 bg-gray-50">
                <div className="px-6 py-4 text-sm font-medium text-gray-500 uppercase">
                  Action
                </div>
                {EzraPlans.map((plan, index) => (
                  <div key={index} className="">
                    <button className="w-full h-full text-white bg-blue-600 hover:bg-blue-700 font-medium  text-sm px-4 py-2">
                      {plan.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Optionals</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 divide-x divide-gray-200">
              <div className="px-6 py-4 text-sm font-medium text-gray-500 uppercase">
                Feature
              </div>
              <div className="px-6 py-4 text-sm font-medium text-gray-500 uppercase">
                Add-on Price / Notes
              </div>
              <div className="px-6 py-4 text-sm font-medium text-gray-500 uppercase">
                Action
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {Optionals.map((optional, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 divide-x divide-gray-200"
                >
                  <div className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {optional.feature}
                  </div>
                  <div className="px-6 py-4 text-sm text-gray-500">
                    {optional.price}
                  </div>
                  <div className="">
                    <button className="w-full h-full text-white bg-blue-600 hover:bg-blue-700 font-medium text-sm px-4 py-2">
                      {optional.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAndAddons;
