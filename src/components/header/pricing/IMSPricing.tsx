/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";

const pricingData = {
  features: [
    "Price",
    "Description",
    "Users",
    "Incidents",
    "Integration",
    "Dashboards & Reporting",
    "SLA Tracking",
    "MSP Clients",
    "Access Control",
    "Support",
    "Action",
  ],
  Monthly: [
    {
      name: "Starter",
      values: {
        Description:
          "For small teams getting started with incident management.",
        Price: "$0/month",
        Users: "Up to 10 users",
        Incidents: "Unlimited incidents with postmortems",
        Integration: "Basic GitHub and GitLab",
        "Dashboards & Reporting": "Basic",
        "SLA Tracking": "❌",
        "MSP Clients": "1 single tenant",
        "Access Control": "❌",
        Support: "Community",
        Action: "Get started for free",
      },
      isPopular: false,
    },
    {
      name: "Growth",
      values: {
        Description: "For scaling startups and SMBs that need structure.",
        Price: "$9/user/month",
        Users: "Up to 50 users",
        Incidents: "Unlimited incidents with postmortems",
        Integration: "Full: Slack, GitHub, GitLab, Zoom, Google Meet",
        "Dashboards & Reporting": "Basic",
        "SLA Tracking": "MTTR and MTTA",
        "MSP Clients": "Up to 5",
        "Access Control": "❌",
        Support: "Email (24-hour response)",
        Action: "Start 14 days free trial",
      },
      isPopular: false,
    },
    {
      name: "Pro",
      values: {
        Description: "For MSPs and mission-critical businesses.",
        Price: "$19/user/month",
        Users: "Unlimited users",
        Incidents: "Unlimited incidents with postmortems",
        Integration:
          "Full: Slack, GitHub, GitLab, Zoom, Google Meet, Custom API/Webhooks",
        "Dashboards & Reporting": "Advanced with fraud and incidents", // Corrected from "Advanced with fraud reports"
        "SLA Tracking": "Enforcement with auto escalations, 99.9% uptime",
        "MSP Clients": "Unlimited",
        "Access Control": "Role-based",
        Support: "Priority email and chat",
        Action: "Start 14 days free trial",
      },
      isPopular: true,
    },
    {
      name: "Enterprise",
      values: {
        Description:
          "For banks, telcos, governments, and large organizations with compliance needs.",
        Price: "Custom from $9/user/month",
        Users: "Unlimited users",
        Incidents: "Unlimited incidents with postmortems",
        Integration:
          "Full: Slack, GitHub, GitLab, Zoom, Google Meet, Custom API/Webhooks, SSO (Azure AD, Okta, AWS Cognito)",
        "Dashboards & Reporting": "Advanced with compliance (PCI, ISO, SOC2)",
        "SLA Tracking": "Enforcement with auto escalations, 99.9% uptime",
        "MSP Clients": "Unlimited",
        "Access Control": "Role-based",
        Support: "24/7 phone, dedicated manager",
        Action: "Start 14 days free trial",
      },
      isPopular: false,
    },
  ],
  Yearly: [
    {
      name: "Starter",
      values: {
        Description:
          "For small teams getting started with incident management.",
        Price: "$0/month",
        Users: "Up to 10 users",
        Incidents: "Unlimited incidents with postmortems",
        Integration: "Basic GitHub and GitLab",
        "Dashboards & Reporting": "Basic",
        "SLA Tracking": "❌",
        "MSP Clients": "1 single tenant",
        "Access Control": "❌",
        Support: "Community",
        Action: "Get started for free",
      },
      isPopular: false,
    },
    {
      name: "Growth",
      values: {
        Description: "For scaling startups and SMBs that need structure.",
        Price: "$90/user/month",
        Users: "Up to 50 users",
        Incidents: "Unlimited incidents with postmortems",
        Integration: "Full: Slack, GitHub, GitLab, Zoom, Google Meet",
        "Dashboards & Reporting": "Basic",
        "SLA Tracking": "MTTR and MTTA",
        "MSP Clients": "Up to 5",
        "Access Control": "❌",
        Support: "Email (24-hour response)",
        Action: "Start 14 days free trial",
      },
      isPopular: false,
    },
    {
      name: "Pro",
      values: {
        Description: "For MSPs and mission-critical businesses.",
        Price: "$190/user/month",
        Users: "Unlimited users",
        Incidents: "Unlimited incidents with postmortems",
        Integration:
          "Full: Slack, GitHub, GitLab, Zoom, Google Meet, Custom API/Webhooks",
        "Dashboards & Reporting": "Advanced with fraud and incidents", // Corrected from "Advanced with fraud reports"
        "SLA Tracking": "Enforcement with auto escalations, 99.9% uptime",
        "MSP Clients": "Unlimited",
        "Access Control": "Role-based",
        Support: "Priority email and chat",
        Action: "Start 14 days free trial",
      },
      isPopular: true,
    },
    {
      name: "Enterprise",
      values: {
        Description:
          "For banks, telcos, governments, and large organizations with compliance needs.",
        Price: "Custom from $9/user/month",
        Users: "Unlimited users",
        Incidents: "Unlimited incidents with postmortems",
        Integration:
          "Full: Slack, GitHub, GitLab, Zoom, Google Meet, Custom API/Webhooks, SSO (Azure AD, Okta, AWS Cognito)",
        "Dashboards & Reporting": "Advanced with compliance (PCI, ISO, SOC2)",
        "SLA Tracking": "Enforcement with auto escalations, 99.9% uptime",
        "MSP Clients": "Unlimited",
        "Access Control": "Role-based",
        Support: "24/7 phone, dedicated manager",
        Action: "Start 14 days free trial",
      },
      isPopular: false,
    },
  ],
};

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly"); // State for Monthly/Yearly toggle

  return (
    <div className="bg-IMSGreen min-h-screen p-8 pt-[10rem] font-sans">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Scrubbe IMS Pricing
          </h1>
          <div className="inline-flex rounded-full bg-[#3D665E] p-1">
            <button
              onClick={() => setBillingCycle("Monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 text-white ${
                billingCycle === "Monthly" ? "bg-[#194042] " : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("Yearly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 text-white ${
                billingCycle === "Yearly" ? "bg-[#194042] " : ""
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Table Grid */}
        <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr] bg-[#F5FFF6] rounded-lg overflow-hidden shadow-xl">
          {/* Table Headers */}
          <div className="p-4 border-b border-r border-IMSLightGreen font-semibold  text-left">
            Features
          </div>
          {(pricingData as any)[billingCycle].map(
            (plan: any, index: number) => (
              <div
                key={plan.name}
                className={`relative flex gap-3 items-center p-4 border-b ${
                  index < (pricingData as any)[billingCycle].length - 1
                    ? "border-r "
                    : ""
                } border-IMSLightGreen font-semibold transition-colors duration-200 bg-[#49754E] text-white `}
              >
                <h3 className="text-lg uppercase">{plan.name}</h3>
                {plan.isPopular && (
                  <span className=" px-3 py-1 bg-[#FF6B6B]  text-xs rounded-full whitespace-nowrap">
                    Most popular
                  </span>
                )}
              </div>
            )
          )}

          {/* Table Body - Features and Values */}
          {pricingData.features.map((feature, featureIndex) => (
            <React.Fragment key={feature}>
              {/* Feature Name Column */}
              <div
                className={`p-4 border-r border-IMSLightGreen text-sm text-left font-bold ${
                  feature === "Description" ? "" : ""
                } ${
                  featureIndex === pricingData.features.length - 1
                    ? "border-b-0 " // No bottom border for the last row
                    : "border-b border-IMSLightGreen bg-[#F5FFF6] "
                }`}
              >
                {feature}
              </div>

              {/* Values for each plan */}
              {(pricingData as any)[billingCycle].map(
                (plan: any, planIndex: number) => (
                  <div
                    key={plan.name + feature}
                    className={`p-4 text-sm  ${
                      planIndex < (pricingData as any)[billingCycle].length - 1
                        ? "border-r"
                        : ""
                    } ${
                      featureIndex === pricingData.features.length - 1
                        ? "border-b-0"
                        : "border-b border-IMSLightGreen"
                    }`}
                  >
                    {feature === "Action" ? (
                      <button className="bg-IMSLightGreen hover:bg-IMSDarkGreen text-white  font-semibold py-2 px-4 rounded transition-colors duration-200 w-full text-nowrap">
                        {plan.values[feature]}
                      </button>
                    ) : (
                      <span
                        className={
                          feature === "Description"
                            ? " text-black"
                            : "text-black"
                        }
                      >
                        {(plan as any).values[feature]}
                      </span>
                    )}
                  </div>
                )
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
