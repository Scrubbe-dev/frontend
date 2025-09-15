"use client";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TABS = [
  "Basic Details",
  "Root Cause Analysis",
  "Resolution Details",
  "Knowledge base draft",
  "Follow up actions",
];
const Page = () => {
  const [tab, setTab] = useState(1);
  const { back } = useRouter();
  return (
    <div className="p-4 space-y-4">
      <div className="text-xl font-bold dark:text-white text-black">
        Postmortems
      </div>
      <div className=" p-4 bg-white rounded-lg space-y-4">
        <div onClick={() => back()} className="flex items-center gap-1 text-sm">
          <ChevronLeft size={18} />
          Back
        </div>
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          {TABS.map((t, i) => (
            <button
              key={t}
              className={`py-2 px-2 text-sm font-medium border-b-2 transition-colors ${
                tab === i + 1
                  ? "border-green text-green"
                  : "border-transparent  dark:text-gray-400 hover:text-green"
              }`}
              onClick={() => setTab(i + 1)}
            >
              {t}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          key={tab}
        >
          {tab === 1 && (
            <div className="space-y-6">
              {/* Incident ID */}
              <div>
                <h2 className="text-lg font-medium  mb-1">Incident ID :</h2>
                <p className=" text-base font-light">INC-1045</p>
              </div>

              {/* Date Resolved */}
              <div>
                <h2 className="text-lg font-medium  mb-1">Date Resolved :</h2>
                <p className=" text-base font-light">2025-08-21</p>
              </div>

              {/* Incident Title */}
              <div>
                <h2 className="text-lg font-medium  mb-1">Incident Title</h2>
                <p className=" text-base font-light">
                  API Outage – Database Latency
                </p>
              </div>

              {/* Incident Description */}
              <div>
                <h2 className="text-lg font-medium  mb-1">
                  Incident Description
                </h2>
                <p className=" text-base font-light">
                  The API experienced a 30-minute outage due to database latency
                  issues.
                </p>
              </div>

              {/* Priority */}
              <div>
                <h2 className="text-lg font-medium  mb-1">Priority :</h2>
                <p className=" text-base font-light">P1- High</p>
              </div>

              {/* Assigned to */}
              <div>
                <h2 className="text-lg font-medium  mb-1">Assigned to :</h2>
                <p className=" text-base font-light">Sarah</p>
              </div>
            </div>
          )}
          {tab === 2 && (
            <div className="space-y-6">
              {/* Cause Category */}
              <div>
                <h2 className=" text-base font-bold text-gray-700">
                  Cause Category :
                </h2>
                <p className="text-gray-900 mt-1">Software Bug</p>
              </div>

              {/* Root cause */}
              <div>
                <h2 className=" text-base font-bold text-gray-700">
                  Root cause :
                </h2>
                <p className="text-gray-900 mt-1">Someone hacked the system</p>
              </div>

              {/* 5 Whys Section */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  5 Whys:
                </h2>

                {/* Why 1 */}
                <div className="mb-4">
                  <h3 className=" text-base font-bold text-gray-900">
                    Why 1: Was the email phishing incident reported?
                  </h3>
                  <p className="text-gray-700 mt-1">
                    The recipient noticed a suspicious link asking for login
                    credentials
                  </p>
                </div>

                {/* Why 2 */}
                <div className="mb-4">
                  <h3 className=" text-base font-bold text-gray-900">
                    Why 2: Why did the user feel uncertain about the
                    email&apos;s authenticity?
                  </h3>
                  <p className="text-gray-700 mt-1">
                    The sender&apos;s email domain did not match the official
                    company domain.
                  </p>
                </div>

                {/* Why 3 */}
                <div className="mb-4">
                  <h3 className=" text-base font-bold text-gray-900">
                    Why 3: Why was the email not recognized as legitimate?
                  </h3>
                  <p className="text-gray-700 mt-1">
                    It bypassed the spam filter due to lack of advanced phishing
                    detection.
                  </p>
                </div>

                {/* Why 4 */}
                <div className="mb-4">
                  <h3 className=" text-base font-bold text-gray-900">
                    Why 4: Why were there no security measures in place to
                    verify the email&apos;s source?
                  </h3>
                  <p className="text-gray-700 mt-1">
                    The mail server did not enforce strict authentication checks
                  </p>
                </div>

                {/* Why 5 */}
                <div className="mb-4">
                  <h3 className=" text-base font-bold text-gray-900">
                    Why 5: Why was the email security protocol not updated to
                    handle recent phishing tactics?
                  </h3>
                  <p className="text-gray-700 mt-1">
                    No threat intelligence feed or monitoring was in place to
                    track evolving tactics.
                  </p>
                </div>
              </div>
            </div>
          )}
          {tab === 3 && (
            <div className="space-y-6">
              {/* Temporary Fix section */}
              <div>
                <h2 className="text-lg font-bold mb-2">Temporary Fix :</h2>
                <ul className="list-none space-y-1  text-base font-light">
                  <li>Block the sender&apos;s email address/domain.</li>
                  <li>Quarantine the reported phishing email</li>
                </ul>
              </div>

              {/* Permanent Fix section */}
              <div>
                <h2 className="text-lg font-bold mb-2">Permanent Fix</h2>
                <ul className="list-none space-y-1  text-base font-light">
                  <li>
                    Upgrade to advanced email security gateway with phishing
                    detection
                  </li>
                  <li>
                    Conduct regular phishing awareness training for employees.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {tab === 4 && (
            <div className="space-y-6">
              {/* Title Section */}
              <div>
                <h2 className="text-lg font-bold mb-1">Title :</h2>
                <p className=" text-base">
                  Phishing Email Reported – Credential Harvesting Attempt
                </p>
              </div>

              {/* Summary Section */}
              <div>
                <h2 className="text-lg font-bold mb-1">Summary</h2>
                <p className=" text-base">
                  A phishing email impersonating the IT department was reported
                  by an employee. The email contained a malicious link to a fake
                  login page designed to harvest user credentials. No accounts
                  were compromised, as the incident was identified early and
                  contained.
                </p>
              </div>

              {/* Identification Steps Section */}
              <div>
                <h2 className="text-lg font-bold mb-2">
                  Identification Steps:
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Employee flagged the email due to suspicious sender domain
                    and urgent tone.
                  </li>
                  <li>
                    Security team verified headers and identified spoofed from
                    address.
                  </li>
                  <li>
                    Link analysis revealed redirect to a credential harvesting
                    site.
                  </li>
                  <li>
                    Logs were checked to confirm no other employees had clicked
                    the link.
                  </li>
                </ul>
              </div>

              {/* Resolution Steps Section */}
              <div>
                <h2 className="text-lg font-bold mb-2">Resolution Steps:</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Quarantined the phishing email from all mailboxes.</li>
                  <li>Blocked sender domain and associated IP addresses.</li>
                </ul>
              </div>

              {/* Preventive Measures Section */}
              <div>
                <h2 className="text-lg font-bold mb-2">Preventive measures</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Implemented SPF, DKIM, and DMARC enforcement for stronger
                    email authentication.
                  </li>
                  <li>
                    Conducted phishing awareness training across all
                    departments.
                  </li>
                </ul>
              </div>

              {/* Tags Section */}
              <div>
                <h2 className="text-lg font-bold mb-2">Tags</h2>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Phishing
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Email
                  </span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
