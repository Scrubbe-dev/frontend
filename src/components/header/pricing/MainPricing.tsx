"use client";
import CButton from "@/components/ui/Cbutton";
import Switch from "@/components/ui/Switch";
import { motion } from "framer-motion";
import React, { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
console.log(itemVariants);

const businessPricing = [
  {
    title: "Starter",
    price: 149,
    duration: "monthly",
    trial: "10-days",
    subTitle: "Early stage teams",
    features: [
      "Monthly logs : Up to 5 million events",
      "Admin Users : 5 seats (admins/analysts only)",
      "Log retention : 7 days",
      "Basic Dashboards",
      "Role-Based Access : Standard ( owner, Analyst)",
      "Multi-Tenant Mode",
      "Fingerprint API : 2,000 requests /mo",
      "Alerting Channels : Email, Slack , Webhooks ",
      "NLRI ( Basic Logic)",
      "Compliance Toolkit : Basic Templates",
      "Audit Logging",
      "Support : Community Access",
      "Onboarding : Quickstart Docs",
    ],
  },
  {
    title: "Growth",
    price: 499,
    duration: "monthly",
    trial: "20-days",
    subTitle: "Scaling Saas / Fintech",
    features: [
      "Monthly logs :  25 million events",
      "Admin Users: 15 seats (admins/analysts only)",
      "Log retention:  30 days",
      "Full Customizable Dashboards",
      "Role-Based Access : Advanced  ( Granular Roles )",
      "Multi-Tenant Mode",
      "Fingerprint API : 50, 000 requests /mo",
      "Alerting Channels : Email, Slack , Webhooks , Whatssap , pagerduty",
      "NLRI ( Templates + Preview)",
      "Compliance Toolkit : SOC 2, ISO 27001",
      "Audit Logging + Export",
      "Support : Priority Email Support",
      "Onboarding : Guided Setup",
    ],
  },
  {
    title: "Enterprise",
    price: 0,
    isCustom: true,
    duration: "monthly",
    trial: "30-days",
    subTitle: "Regulated or high-scale enterprises",
    features: [
      "Monthly Logs : 100+ million events",
      "Admin Users : Unlimited",
      "Log Retention: 90+ days",
      "Multi-Team Views Dashboards",
      "Role-Based Access : Full RBAC + SCIM/SSO",
      "Multi-Tenant Mode",
      "Fingerprint API : Unlimited",
      "Alerting Channels : + MS Teams, SIEM connectors",
      "NLRI (Versioning & Approval Flow)",
      "Compliance Toolkit : SOC 2, ISO, NIST, GDPR, CCPA",
      "Immutable Audit Logging + Full Event Replay",
      "Support : Dedicated Security Engineer",
      "Onboarding : White-Glove Integration",
    ],
  },
  {
    title: "Starter",
    price: 1668,
    duration: "yearly",
    trial: "10-days",
    subTitle: "Early stage teams",
    features: [
      "Monthly logs : Up to 5 million events",
      "Admin Users : 5 seats (admins/analysts only)",
      "Log retention : 7 days",
      "Basic Dashboards",
      "Role-Based Access : Standard ( owner, Analyst)",
      "Multi-Tenant Mode",
      "Fingerprint API : 2,000 requests /mo",
      "Alerting Channels : Email, Slack , Webhooks ",
      "NLRI ( Basic Logic)",
      "Compliance Toolkit : Basic Templates",
      "Audit Logging",
      "Support : Community Access",
      "Onboarding : Quickstart Docs",
    ],
  },
  {
    title: "Growth",
    price: 4788,
    duration: "yearly",
    trial: "20-days",
    subTitle: "Scaling Saas / Fintech",
    features: [
      "Monthly logs: 25 million events",
      "Admin Users: 15 seats (admins/analysts only)",
      "Log retention:  30 days",
      "Full Customizable Dashboards",
      "Role-Based Access : Advanced  ( Granular Roles )",
      "Multi-Tenant Mode",
      "Fingerprint API : 50, 000 requests /mo",
      "Alerting Channels : Email, Slack , Webhooks , Whatssap , pagerduty",
      "NLRI ( Templates + Preview)",
      "Compliance Toolkit : SOC 2, ISO 27001",
      "Audit Logging + Export",
      "Support : Priority Email Support",
      "Onboarding : Guided Setup",
    ],
  },
  {
    title: "Enterprise",
    price: 0,
    isCustom: true,
    duration: "yearly",
    trial: "30-days",
    subTitle: "Regulated or high-scale enterprises",
    features: [
      "Monthly Logs : 100+ million events",
      "Admin Users : Unlimited",
      "Log Retention: 90+ days",
      "Multi-Team Views Dashboards",
      "Role-Based Access : Full RBAC + SCIM/SSO",
      "Multi-Tenant Mode",
      "Fingerprint API : Unlimited",
      "Alerting Channels : + MS Teams, SIEM connectors",
      "NLRI (Versioning & Approval Flow)",
      "Compliance Toolkit : SOC 2, ISO, NIST, GDPR, CCPA",
      "Immutable Audit Logging + Full Event Replay",
      "Support : Dedicated Security Engineer",
      "Onboarding : White-Glove Integration",
    ],
  },
];

const MainPricing = () => {
  const [type, setType] = useState("business");
  const [duration, setDuration] = useState("monthly");
  return (
    <div className=" bg-white px-4 md:px-6 lg:px-20 xl:px-20 py-20 min-h-screen">
      <motion.div
        className=" max-w-[1440px] mx-auto space-y-8 "
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className=" text-colorScBlue text-3xl md:text-5xl font-bold text-center">
          Pricing
        </p>
        <p className="text-center font-medium">
          Security automation you can scale wit from startup to enterprise.
        </p>
        <div className="flex mx-auto border w-fit rounded-lg p-2">
          <div
            onClick={() => setType("business")}
            className={`${
              type == "business"
                ? "bg-colorScBlue text-white"
                : "bg-transparent text-gray-600"
            } rounded-md p-1  w-[150px] text-center cursor-pointer`}
          >
            Business
          </div>
          <div
            onClick={() => setType("developer")}
            className={`${
              type == "developer"
                ? "bg-colorScBlue text-white"
                : "bg-transparent text-gray-600"
            } rounded-md p-1  w-[150px] text-center cursor-pointer`}
          >
            Developer
          </div>
        </div>

        <div className="mx-auto w-fit flex items-center gap-3">
          <p
            className={`${
              duration === "monthly"
                ? "text-colorScBlue font-semibold"
                : "text-gray-700"
            }`}
          >
            Monthly
          </p>
          <Switch
            onChange={(value) =>
              setDuration(() => (value == false ? "monthly" : "yearly"))
            }
            checked={duration == "monthly" ? false : true}
          />
          <p
            className={`${
              duration === "yearly"
                ? "text-colorScBlue font-semibold"
                : "text-gray-700"
            }`}
          >
            Yearly
          </p>
        </div>

        <div className=" grid grid-cols-3 gap-6">
          {type === "business" ? (
            <>
              {businessPricing
                .filter((value) => value.duration === duration)
                .map((pricing, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border flex flex-col justify-between ${
                      index === 1 ? "bg-colorScIndigo text-white" : "bg-white"
                    }`}
                  >
                    <div className="space-y-1">
                      <p className=" font-bold">{pricing.title}</p>
                      <p>
                        <span
                          className={` text-2xl font-extrabold ${
                            index === 1 ? "text-white" : "text-colorScBlue"
                          }`}
                        >
                          {pricing?.isCustom
                            ? "Custom"
                            : `$${pricing.price.toLocaleString()}/${
                                pricing.duration == "monthly" ? "month" : "year"
                              }`}
                        </span>
                        <span> +{pricing.trial} free trial</span>
                      </p>
                      <p className="text-sm">{pricing.subTitle}</p>
                      <p className=" pt-4">Features Include</p>
                      <ul className=" space-y-2 list-disc pl-4">
                        {pricing.features.map((feature) => (
                          <li key={feature}>
                            <b>{`${feature.split(":")[0]}`}</b>
                            {": " + feature.split(":")[1]}
                          </li>
                        ))}
                      </ul>
                      <br />
                      <br />
                    </div>
                    <CButton className="">
                      Start {pricing.trial} Free trial
                    </CButton>
                  </div>
                ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MainPricing;
