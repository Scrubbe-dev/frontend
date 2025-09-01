// components/FeatureComparisonTable.tsx

import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa"; // Using Font Awesome icons for check/times

interface FeatureRow {
  feature: string;
  scrubbeIms: boolean;
  serviceNow: boolean;
  pagerDuty: boolean;
}

const featuresData: FeatureRow[] = [
  {
    feature: "GitHub/GitLab Integration",
    scrubbeIms: true,
    serviceNow: false,
    pagerDuty: false,
  },
  {
    feature: "War Room Creation",
    scrubbeIms: true,
    serviceNow: true,
    pagerDuty: true,
  },
  {
    feature: "Multi-Channel Alerts",
    scrubbeIms: true,
    serviceNow: true,
    pagerDuty: true,
  },
  {
    feature: "Email Incident Raising",
    scrubbeIms: true,
    serviceNow: true,
    pagerDuty: false,
  },
  {
    feature: "Seamless Integrations",
    scrubbeIms: true,
    serviceNow: true,
    pagerDuty: true,
  },
];

export function FeatureComparisonTable() {
  return (
    <div className="bg-white min-h-[600px] py-10 px-4">
      {/* Top green bar - matches the top bar in the image */}

      <div className=" container mx-auto z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-bold  text-center mb-12 font-bigshotOne">
          How Scrubbe IMS Outshines the Rest
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-[#2c4b4d]">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left  font-medium text-gray-50 uppercase tracking-wider whitespace-nowrap"
                >
                  Features
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left  font-medium text-gray-50 uppercase tracking-wider whitespace-nowrap"
                >
                  Scrubbe IMS
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left  font-medium text-gray-50 uppercase tracking-wider whitespace-nowrap"
                >
                  ServiceNow
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left  font-medium text-gray-50 uppercase tracking-wider whitespace-nowrap"
                >
                  PagerDuty
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {featuresData.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 whitespace-nowrap  font-medium text-gray-900">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap  text-gray-700 ">
                    {row.scrubbeIms ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaTimes className="text-red-500" />
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap  text-gray-700 ">
                    {row.serviceNow ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaTimes className="text-red-500" />
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap  text-gray-700 ">
                    {row.pagerDuty ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaTimes className="text-red-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom green bar - matches the bottom bar in the image */}
    </div>
  );
}
