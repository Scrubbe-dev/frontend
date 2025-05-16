"use client";
import React, { useEffect, useState } from "react";
import api from "@/lib/axios";
import SkeletonSecurityIntelligence from "@/components/landing/skeletons/SkeletonSecurityIntelligence";

// Define types for the fingerprint data
type FingerprintItem = {
  label: string;
  value: string;
};

type ApiResponse = {
  ip: string;
  location: {
    capital?: string;
    native_name?: string;
    flag?: string;
    top_level_domains?: string[];
    calling_codes?: string[];
  };
  network: {
    isProxy: boolean;
  };
  device: {
    os: string;
    browser: string;
  };
  usersDetails: {
    ip: string;
    region_name: string;
    city: string;
    connection: {
      asn: number;
      isp: string;
    };
    country_name: string;
  };
};

function SecurityIntelligence() {
  const [fingerprintItems, setFingerprintItems] = useState<FingerprintItem[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deviceType, setDeviceType] = useState<string>("Desktop");

  useEffect(() => {
    // Function to determine device type based on window width
    const determineDeviceType = () => {
      const width = window.innerWidth;
      if (width < 576) return "Mobile Phone";
      if (width >= 576 && width < 992) return "Tablet";
      return "Desktop";
    };

    // Set initial device type
    setDeviceType(determineDeviceType());

    // Update device type on window resize
    const handleResize = () => {
      setDeviceType(determineDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchSystemInfo = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await api.get("/system-info");
        const data: ApiResponse = response.data.data;

        // Calculate a simple device trust score based on available data
        const calculateTrustScore = (): string => {
          let score = 70; // Base score
          if (data.network.isProxy) score -= 20; // Deduct for proxy
          if (data.device.os.includes("Windows")) score += 5; // Common OS
          if (data.usersDetails.country_name === "Nigeria") score += 5; // Local traffic
          return `${Math.min(Math.max(score, 0), 100)}%`; // Ensure score is between 0-100
        };

        const formattedItems: FingerprintItem[] = [
          {
            label: "VPN/Proxy Status",
            value: data.network.isProxy ? "Detected" : "Not Detected",
          },
          {
            label: "Device Type",
            value: deviceType,
          },
          {
            label: "Timestamp",
            value: new Date().toLocaleString(),
          },
          {
            label: "OS Model",
            value: data.device.os || "Unknown",
          },
          {
            label: "IP Address",
            value: data.ip || data.usersDetails.ip || "Unknown",
          },
          {
            label: "Country",
            value: data.usersDetails.country_name || "Unknown",
          },
          {
            label: "Region/City",
            value:
              data.usersDetails.region_name && data.usersDetails.city
                ? `${data.usersDetails.region_name}/${data.usersDetails.city}`
                : "Unknown",
          },
          {
            label: "Browser Information",
            value: data.device.browser || "Unknown",
          },
          {
            label: "ISP",
            value: data.usersDetails.connection.isp || "Unknown",
          },
          {
            label: "Device Trust Score",
            value: calculateTrustScore(),
          },
        ];

        setFingerprintItems(formattedItems);
      } catch (err) {
        console.error("Failed to fetch system info:", err);
        setError(
          "Failed to load security information. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchSystemInfo();
  }, [deviceType]);

  // Loading and error states remain the same
  if (isLoading) {
    return <SkeletonSecurityIntelligence />;
  }

  if (error) {
    return (
      <div className="w-full h-auto bg-[#EFF6FF]">
        <section className="w-full max-w-[1440px] min-h-[300px] mx-auto py-12 px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-2">
              Security Intelligence in Action
            </h2>
            <div className="flex justify-center items-center mb-6">
              <div className="w-28 h-1 bg-emerald-400 mx-auto"></div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 text-center text-red-500">
            <p>{error}</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full h-auto bg-[#EFF6FF]">
      <section className="w-full max-w-[1440px] mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-2">
            Security Intelligence in Action
          </h2>
          <div className="flex justify-center items-center mb-6">
            <div className="w-28 h-1 bg-emerald-400 mx-auto"></div>
          </div>
        </div>

        {/* Subheading */}
        <div className="text-center mb-12">
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
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
                    {fingerprintItems.map((item, index) => (
                      <tr
                        key={item.label}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="py-4 px-6 border-b border-blue-100 border-r font-medium text-sm text-slate-700 bg-slate-50 w-1/3">
                          {item.label}
                        </td>
                        <td
                          className={`py-4 px-6 text-md ${
                            index < fingerprintItems.length - 1
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
