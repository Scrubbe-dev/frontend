"use client";
import React from "react";
import { Card, CardHeader } from "@heroui/react";
import { Button } from "@heroui/react";

// Define types for the fingerprint data
type FingerprintItem = {
  label: string;
  value: string;
};

type DeviceFingerprint = {
  vpnStatus: string;
  deviceType: string;
  timestamp: string;
  osModel: string;
  ipAddress: string;
  regionCity: string;
  browserInfo: string;
};

function SecurityIntelligence() {
  // Sample data - in a real app, this would come from an API or context
  const fingerprintData: DeviceFingerprint = {
    vpnStatus: "Not Detected",
    deviceType: "Desktop",
    timestamp: new Date().toLocaleString(),
    osModel: "Win32",
    ipAddress: "192.168.x.x (masked)",
    regionCity: "Unknown",
    browserInfo: "Mozilla/5.0 (Windows NT 10.0; Win64; x64...",
  };

  // Convert the data to a format easier to map through in the UI
  const fingerprintItems: FingerprintItem[] = [
    { label: "VPN Status", value: fingerprintData.vpnStatus },
    { label: "Device Type", value: fingerprintData.deviceType },
    { label: "Timestamp", value: fingerprintData.timestamp },
    { label: "OS Model", value: fingerprintData.osModel },
    { label: "IP Address", value: fingerprintData.ipAddress },
    { label: "Region/City", value: fingerprintData.regionCity },
    { label: "Browser Information", value: fingerprintData.browserInfo },
  ];

  return (
    <section className="w-full h-auto py-12">
      <div className="h-auto w-full flex items-center flex-col py-2">
        <div className="container w-full h-full">
          {/* Header */}
          <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
            <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl xl:text-4xl font-semibold px-4 text-center">
              Security Intelligence In Action
            </div>
            <div className="bg-emerald-500 h-1 w-16 rounded-full"></div>
          </div>

          {/* Subheading */}
          <div className="w-full h-full flex items-center justify-center py-4">
            <span className="h-fit xl:w-3/6 text-wrap text-center text-[1rem] md:text-[1.3rem]  text-muted-foreground px-2 xl:px-0 font-Raleway font-medium">
              Experience how Scrubbe collects and analyzes device and network
              data to enhance security monitoring.
            </span>
          </div>

          {/* Main Content */}
          <div className="w-full flex items-center justify-center mt-6">
            <div className="w-11/12 h-fit">
              <Card className="w-full">
                <CardHeader>
                  <div className="w-full p-4">
                    <div className="w-full h-fit space-y-2">
                      <div className="w-fit h-fit font-Poppins text-slate-800 font-bold text-lg">
                        Your Device Fingerprint
                      </div>
                      <div className="text-sm font-Poppins font-normal text-muted-foreground">
                        Below is a sample of the type of data Scrubbe can
                        collect and analyze to identify potential security
                        threats:
                      </div>
                    </div>

                    {/* 2-Column Layout for Data - Now dynamic */}
                    <aside className="w-full mt-8 border border-blue-500 rounded-lg overflow-hidden">
                      <table className="w-full border-collapse">
                        <tbody>
                          {fingerprintItems.map((item, index) => (
                            <tr
                              key={item.label}
                              className="group hover:bg-slate-50 transition-colors"
                            >
                              <td className="py-4 px-6 border-b border-blue-500 border-r font-Poppins text-sm font-semibold text-slate-700 bg-slate-50 w-1/3">
                                {item.label}
                              </td>
                              <td
                                className={`py-4 px-6 font-Poppins text-md font-normal ${
                                  index < fingerprintItems.length - 1
                                    ? "border-b border-blue-500"
                                    : ""
                                }`}
                              >
                                {item.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </aside>
                  </div>
                </CardHeader>
              </Card>
              <div className="w-full flex justify-center mt-4">
                <Button
                  className="bg-red-600 hover:bg-red-800 text-white font-semibold font-Inter text-md rounded-sm"
                  size="lg"
                >
                  Start free trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecurityIntelligence;
