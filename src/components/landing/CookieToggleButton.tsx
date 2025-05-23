"use client";
import React, { useState } from "react";
import { useAppStore } from "@/store/StoreProvider";
import { RxCookie } from "react-icons/rx";

const CookieToggleButton: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("cookie-preferences");

  // Get cookie-related state and actions from Zustand
  const {
    cookiePreferences,
    acceptAllCookies,
    acceptEssentialOnly,
    setCookiePreferences,
    updateCookiePreference,
  } = useAppStore((state) => state);

  // Handle different button clicks
  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsDialogOpen(false);
  };

  const handleEssentialOnly = () => {
    acceptEssentialOnly();
    setIsDialogOpen(false);
  };

  const handleSavePreferences = () => {
    setCookiePreferences(cookiePreferences);
    setIsDialogOpen(false);
  };

  const handleToggleChange = (category: keyof typeof cookiePreferences) => {
    // Don't toggle essential cookies
    if (category === "essential") return;
    updateCookiePreference(category, !cookiePreferences[category]);
  };

  return (
    <>
      {/* Cookie toggle button */}
      <button
        onClick={() => setIsDialogOpen(true)}
        className="fixed bottom-3 left-3 z-50 w-12 h-12 rounded-full text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none"
        aria-label="Cookie Settings"
      >
        <RxCookie className="w-6 h-6 fill-white" />
      </button>

      {/* Backdrop overlay */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md bg-black/40 transition-opacity duration-300"
          onClick={() => setIsDialogOpen(false)}
        />
      )}

      {/* Cookie dialog box - Improved for mobile responsiveness */}
      <div
        className={`fixed inset-x-4 mx-auto top-4 md:top-10 z-50 w-auto max-w-xl bg-white rounded-lg shadow-xl transition-all duration-300 ${
          isDialogOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {/* Cookie dialog header */}
        <div className="bg-blue-600 text-white p-2 sm:p-3 flex justify-between items-center rounded-t-lg">
          <div className="font-semibold flex items-center gap-1 text-sm sm:text-base">
            <RxCookie className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
            Cookie Settings
          </div>
          <button
            onClick={() => setIsDialogOpen(false)}
            className="text-white text-2xl p-1"
            aria-label="Close cookie settings"
          >
            ×
          </button>
        </div>

        {/* Simple Banner */}
        <div className="flex flex-col p-3 sm:p-4 md:p-6 border-b">
          <div className="mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
              Cookie & Privacy Settings
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Scrubbe uses cookies and similar technologies to enhance your
              experience, analyze traffic, and enable personalized content.
              Choose your preferences below.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              onClick={handleAcceptAll}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg transition hover:bg-blue-700"
            >
              Accept All
            </button>
            <button
              onClick={handleEssentialOnly}
              className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-400 text-gray-600 text-sm sm:text-base font-medium rounded-lg transition hover:bg-gray-100"
            >
              Essential Only
            </button>
          </div>
        </div>

        {/* Tab Navigation - Mobile Responsive */}
        <div className="flex flex-wrap border-b bg-gray-100">
          {["cookie-preferences", "privacy-policy", "cookie-policy"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold border-b-2 transition ${
                  activeTab === tab
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-blue-800 hover:bg-gray-200"
                }`}
              >
                {tab
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            )
          )}
        </div>

        {/* Tab Content */}
        <div className="p-3 sm:p-4 md:p-6 max-h-60 sm:max-h-72 md:max-h-96 overflow-y-auto">
          {/* Cookie Preferences Tab */}
          {activeTab === "cookie-preferences" && (
            <div>
              {/* Essential Cookies */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    Essential Cookies
                  </h3>
                  <div className="relative w-10 sm:w-12 h-5 sm:h-6">
                    <input
                      type="checkbox"
                      className="opacity-0 w-0 h-0"
                      checked={cookiePreferences.essential}
                      disabled
                    />
                    <span
                      className={`absolute inset-0 rounded-full transition ${
                        cookiePreferences.essential
                          ? "bg-green-500"
                          : "bg-gray-300"
                      } opacity-50 cursor-not-allowed`}
                    >
                      <span
                        className={`absolute h-4 sm:h-5 w-4 sm:w-5 bg-white rounded-full transform transition top-0.5 left-0.5 ${
                          cookiePreferences.essential
                            ? "translate-x-5 sm:translate-x-6"
                            : ""
                        }`}
                      />
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">
                  These cookies are necessary for the website to function
                  properly. They cannot be disabled.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    Analytics Cookies
                  </h3>
                  <div className="relative w-10 sm:w-12 h-5 sm:h-6">
                    <input
                      type="checkbox"
                      className="opacity-0 w-0 h-0"
                      checked={cookiePreferences.analytics}
                      onChange={() => handleToggleChange("analytics")}
                    />
                    <span
                      onClick={() => handleToggleChange("analytics")}
                      className={`absolute inset-0 rounded-full transition cursor-pointer ${
                        cookiePreferences.analytics
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute h-4 sm:h-5 w-4 sm:w-5 bg-white rounded-full transform transition top-0.5 left-0.5 ${
                          cookiePreferences.analytics
                            ? "translate-x-5 sm:translate-x-6"
                            : ""
                        }`}
                      />
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">
                  These cookies help us understand how visitors interact with
                  the website, helping us improve our services.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    Functional Cookies
                  </h3>
                  <div className="relative w-10 sm:w-12 h-5 sm:h-6">
                    <input
                      type="checkbox"
                      className="opacity-0 w-0 h-0"
                      checked={cookiePreferences.functional}
                      onChange={() => handleToggleChange("functional")}
                    />
                    <span
                      onClick={() => handleToggleChange("functional")}
                      className={`absolute inset-0 rounded-full transition cursor-pointer ${
                        cookiePreferences.functional
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute h-4 sm:h-5 w-4 sm:w-5 bg-white rounded-full transform transition top-0.5 left-0.5 ${
                          cookiePreferences.functional
                            ? "translate-x-5 sm:translate-x-6"
                            : ""
                        }`}
                      />
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">
                  These cookies enable personalized features and notifications
                  to enhance your experience.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    Marketing Cookies
                  </h3>
                  <div className="relative w-10 sm:w-12 h-5 sm:h-6">
                    <input
                      type="checkbox"
                      className="opacity-0 w-0 h-0"
                      checked={cookiePreferences.marketing}
                      onChange={() => handleToggleChange("marketing")}
                    />
                    <span
                      onClick={() => handleToggleChange("marketing")}
                      className={`absolute inset-0 rounded-full transition cursor-pointer ${
                        cookiePreferences.marketing
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute h-4 sm:h-5 w-4 sm:w-5 bg-white rounded-full transform transition top-0.5 left-0.5 ${
                          cookiePreferences.marketing
                            ? "translate-x-5 sm:translate-x-6"
                            : ""
                        }`}
                      />
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">
                  These cookies are used to track visitors across websites to
                  display relevant advertisements.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-2 sm:gap-3 mt-4 sm:mt-6">
                <button
                  onClick={handleSavePreferences}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-lg transition hover:bg-blue-700"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-400 text-gray-600 text-xs sm:text-sm font-medium rounded-lg transition hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Privacy Policy Tab - Improved for mobile */}
          {activeTab === "privacy-policy" && (
            <div className="text-xs sm:text-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                Privacy Policy for Scrubbe
              </h3>
              <p className="mb-3 sm:mb-4">Effective Date: March 31, 2025</p>

              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mt-3 sm:mt-4 mb-1 sm:mb-2">
                1. Introduction
              </h3>
              <p className="mb-3 sm:mb-4">
                Welcome to Scrubbe. We respect your privacy and are committed to
                protecting your personal data. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when
                you use our SIEM and SOAR platform.
              </p>

              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mt-3 sm:mt-4 mb-1 sm:mb-2">
                2. Data We Collect
              </h3>
              <p className="mb-1 sm:mb-2">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4">
                <li className="mb-1">
                  <span className="font-semibold">Personal Information:</span>{" "}
                  Name, email address, phone number, job title, and company
                  name.
                </li>
                <li className="mb-1">
                  <span className="font-semibold">Log Data:</span> IP addresses,
                  device information, browser type, pages visited, and time
                  spent on pages.
                </li>
                <li className="mb-1">
                  <span className="font-semibold">Security Event Data:</span>{" "}
                  System logs, network traffic data, and security alerts
                  processed by our platform.
                </li>
                <li className="mb-1">
                  <span className="font-semibold">
                    Cookies and Similar Technologies:
                  </span>{" "}
                  Information collected through cookies, web beacons, and
                  similar technologies.
                </li>
              </ul>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 text-xs sm:text-sm text-gray-500">
                <p className="mb-1 sm:mb-2">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p>
                  Scrubbe, Inc.
                  <br />
                  Email: privacy@scrubbe.com
                  <br />
                  Address: 43 Thames Street, London United Kingdom GB
                </p>
              </div>
            </div>
          )}

          {/* Cookie Policy Tab - Improved for mobile */}
          {activeTab === "cookie-policy" && (
            <div className="text-xs sm:text-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                Cookie Policy for Scrubbe
              </h3>
              <p className="mb-3 sm:mb-4">Effective Date: March 31, 2025</p>

              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mt-3 sm:mt-4 mb-1 sm:mb-2">
                1. What Are Cookies
              </h3>
              <p className="mb-3 sm:mb-4">
                Cookies are small text files that are placed on your device when
                you visit a website. They are widely used to make websites work
                more efficiently and provide information to the website owners.
              </p>

              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mt-3 sm:mt-4 mb-1 sm:mb-2">
                2. Types of Cookies We Use
              </h3>

              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mt-2 sm:mt-3 mb-1 sm:mb-2">
                Essential Cookies
              </h3>
              <p className="mb-1 sm:mb-2">
                These cookies are necessary for the website to function
                properly. They enable core functionality such as security,
                network management, and account access. You cannot opt out of
                these cookies.
              </p>
              <p className="mb-1 sm:mb-2">Examples include:</p>
              <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4">
                <li className="mb-1">
                  <span className="font-semibold">session_id:</span> Maintains
                  your session while you use our platform
                </li>
                <li className="mb-1">
                  <span className="font-semibold">csrf_token:</span> Helps
                  prevent cross-site request forgery attacks
                </li>
                <li className="mb-1">
                  <span className="font-semibold">auth_token:</span> Remembers
                  your login status
                </li>
              </ul>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 text-xs sm:text-sm text-gray-500">
                <p className="mb-1 sm:mb-2">
                  If you have any questions about our use of cookies, please
                  contact us at:
                </p>
                <p>
                  Scrubbe, Inc.
                  <br />
                  Email: cookies@scrubbe.com
                  <br />
                  Address: 43 Thames Street, London United Kingdom GB
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieToggleButton;
