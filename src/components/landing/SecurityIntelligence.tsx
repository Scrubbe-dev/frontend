"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import SecurityIntelligenceSkeleton from "@/components/landing/security-intelligence/SecurityIntelligenceSkeleton";
import SecurityIntelligenceError from "@/components/landing/security-intelligence/SecurityIntelligenceError";
import { useFingerprintDisplay } from "@/lib/fingerprint/fingerprintdisplay";

function SecurityIntelligence() {
  const {
    error,
    loading,
    formattedItems,
  } = useFingerprintDisplay();

  const [deviceType, setDeviceType] = useState<string>("Desktop");

  useEffect(() => {
    const determineDeviceType = () => {
      const width = window.innerWidth;
      if (width < 576) return "Mobile Phone";
      if (width >= 576 && width < 992) return "Tablet";
      return "Desktop";
    };

    setDeviceType(determineDeviceType());

    const handleResize = () => {
      setDeviceType(determineDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <SecurityIntelligenceSkeleton />;
  }

  if (error) {
    return <SecurityIntelligenceError error={error} />;
  }

  return (
    <div className="w-full h-auto bg-[#EFF6FF]">
      <section className="w-full max-w-[1440px] mx-auto py-6 md:py-12 lg:py-16 px-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-slate-800 mb-2">
            Security Intelligence in Action
          </h2>
          <div className="flex justify-center items-center mb-6">
            <div className="w-28 h-1 bg-emerald-400 mx-auto"></div>
          </div>
        </div>

        {/* Subheading */}
        <div className="text-center mb-12">
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-slate-600 max-w-3xl mx-auto">
            Experience how Scrubbe collects and analyzes device and network data
            to enhance security monitoring.
          </p>
        </div>

        {/* Main Content - Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-800">
                  Your Device FingerPrint
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Below is a sample of the type of data Scrubbe can collect and
                  analyse to identify Potentially Security Threats
                </p>
              </div>

              {/* Data Table */}
              <div className="border border-blue-100 rounded-lg overflow-hidden">
                <table className="w-full border-collapse">
                  <tbody>
                    {formattedItems.map((item: any, index: number) => (
                      <tr
                        key={item.label}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="py-4 px-6 border-b border-blue-100 border-r font-medium text-sm text-slate-700 bg-slate-50 w-1/3">
                          {item.label}
                        </td>
                        <td
                          className={`py-4 px-6 text-md ${
                            index < formattedItems.length - 1
                              ? "border-b border-blue-100"
                              : ""
                          } ${
                            item.label === "Device Trust Score"
                              ? "font-semibold " +
                                (parseInt(item.value) > 70
                                  ? "text-green-600"
                                  : parseInt(item.value) > 40
                                  ? "text-yellow-600"
                                  : "text-red-600")
                              : ""
                          }`}
                        >
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecurityIntelligence;
