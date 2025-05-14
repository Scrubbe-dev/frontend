"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";

function CompromiseChecker() {
  const [isChecking, setIsChecking] = useState(false);
  const [checkComplete, setCheckComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  const handleCheck = () => {
    if (!email) return;

    setIsChecking(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      setIsChecking(false);
      setCheckComplete(true);
    }, 1500);
  };

  return (
    <div className="w-full h-auto bg-slate-100">
      <section className="w-full max-w-[1440px] mx-auto bg-slate-100 rounded-lg shadow-md overflow-hidden px-4 md:px-6 py-12 flex flex-col">
        {/* Header */}
        <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
          <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl xl:text-4xl font-semibold px-4 text-center">
            Built on Scrubbe’s Secure Intelligence Engine
          </div>
          <div className="bg-emerald-500 h-1 w-16 rounded-full"></div>
        </div>

        {/* Subheading */}
        <div className="w-full h-full flex items-center justify-center py-4">
          <span className="h-fit xl:w-3/6 text-wrap text-center text-[1rem] md:text-[1.3rem]  text-muted-foreground px-2 xl:px-0 font-Raleway font-medium">
            Scrubbe is your first line of defense instantly
          </span>
        </div>

        <aside className="flex flex-col md:flex-row flex-grow">
          {/* Left column with title and form */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-slate-800 to-blue-900 p-6 md:p-8 rounded-lg">
            <div className="flex flex-col h-full justify-center space-y-6">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Scrubbe Compromise Checker
                </h1>
                <p className="text-slate-300 text-sm md:text-base max-w-md mx-auto">
                  Check if your email or IP address has been compromised in a
                  data breach. Our system scans across multiple breach databases
                  to identify potential security risks.
                </p>
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    className="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="ip"
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    IP Address (optional)
                  </label>
                  <input
                    id="ip"
                    className="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your IP address (e.g., 192.168.1.1)"
                    type="text"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                  />
                </div>

                <button
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded transition-colors duration-200 flex items-center justify-center"
                  onClick={handleCheck}
                  disabled={isChecking || !email}
                >
                  {isChecking ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Checking...
                    </>
                  ) : (
                    "CHECK FOR BREACHES"
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right column for results */}
          <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg md:ml-4 mt-4 md:mt-0">
            {checkComplete ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-center"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Security Check Complete
                  </h2>
                  <p className="text-gray-600">
                    We&apos;ve analyzed your information across our databases.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Email Check Results
                  </h3>
                  <p className="text-gray-600 mb-1">Email: {email}</p>
                  <div className="flex items-center text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>No breaches found</span>
                  </div>
                </div>

                {ipAddress && (
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 mb-2">
                      IP Check Results
                    </h3>
                    <p className="text-gray-600 mb-1">IP: {ipAddress}</p>
                    <div className="flex items-center text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>No breaches found</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setCheckComplete(false)}
                  className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                  Check another address
                </button>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-medium text-gray-700 mb-2">
                  Results will appear here
                </h2>
                <p className="text-gray-500 max-w-xs">
                  Enter your email address and click the check button to scan
                  for potential security breaches.
                </p>
              </div>
            )}
          </div>
        </aside>

        {/* Single trial button centered at bottom of entire component */}
        <div className="mt-8 px-4 md:px-8 mb-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-800 text-white 
                     font-Inter font-semibold text-md rounded-sm mx-auto block"
          >
            Start free trial
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CompromiseChecker;
