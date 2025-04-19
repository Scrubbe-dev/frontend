"use client";
import React from "react";
import { Card, CardHeader } from "@heroui/react";

function SecurityIntelligence() {
  return (
    <aside className="w-full h-auto">
      <div className="h-auto w-full flex items-center flex-col py-8">
        <div className="container w-full h-full">
          {/* Header */}
          <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
            <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl xl:text-4xl font-semibold">
              Security Intelligence In Action
            </div>
            <div className="bg-[#10b981] h-1 w-16 rounded-full"></div>
          </div>

          {/* Subheading */}
          <div className="w-full h-full flex items-center justify-center py-8">
            <span className="h-fit xl:w-3/6 text-wrap text-center text-md text-muted-foreground px-2 xl:px-0 font-Raleway font-[500]">
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
                      <div className="text-sm font-Poppins font-[400] text-muted-foreground">
                        Below is a sample of the type of data Scrubbe can
                        collect and analyze to identify potential security
                        threats:
                      </div>
                    </div>

                    {/* 2-Column Layout for Data */}
                    <div className="w-full mt-8 border rounded-lg overflow-hidden">
                      <table className="w-full border-collapse">
                        <tbody>
                          {/* VPN Status */}
                          <tr className="group hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-6 border-b border-r font-Poppins text-sm font-semibold text-slate-700 bg-slate-50 w-1/3">
                              VPN Status
                            </td>
                            <td className="py-4 px-6 border-b font-Poppins text-md font-normal">
                              Not Detected
                            </td>
                          </tr>

                          {/* Device Type */}
                          <tr className="group hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-6 border-b border-r font-Poppins text-sm font-semibold text-slate-700 bg-slate-50 w-1/3">
                              Device Type
                            </td>
                            <td className="py-4 px-6 border-b font-Poppins text-md font-normal">
                              Desktop
                            </td>
                          </tr>

                          {/* Timestamp */}
                          <tr className="group hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-6 border-b border-r font-Poppins text-sm font-semibold text-slate-700 bg-slate-50 w-1/3">
                              Timestamp
                            </td>
                            <td className="py-4 px-6 border-b font-Poppins text-md font-normal">
                              4/3/2025, 10:36:42 AM
                            </td>
                          </tr>

                          {/* OS Model */}
                          <tr className="group hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-6 border-b border-r font-Poppins text-sm font-semibold text-slate-700 bg-slate-50 w-1/3">
                              OS Model
                            </td>
                            <td className="py-4 px-6 border-b font-Poppins text-md font-normal">
                              Win32
                            </td>
                          </tr>

                          {/* IP Address */}
                          <tr className="group hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-6 border-b border-r font-Poppins text-sm font-semibold text-slate-700 bg-slate-50 w-1/3">
                              IP Address
                            </td>
                            <td className="py-4 px-6 border-b font-Poppins text-md font-normal">
                              192.168.x.x (masked)
                            </td>
                          </tr>

                          {/* Region/City */}
                          <tr className="group hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-6 border-b border-r font-Poppins text-sm font-semibold text-slate-700 bg-slate-50 w-1/3">
                              Region/City
                            </td>
                            <td className="py-4 px-6 border-b font-Poppins text-md font-normal">
                              Unknown (Demo)
                            </td>
                          </tr>

                          {/* Browser Information */}
                          <tr className="group hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-6 border-r font-Poppins text-sm font-semibold text-slate-700 bg-slate-50 w-1/3">
                              Browser Information
                            </td>
                            <td className="py-4 px-6 font-Poppins text-md font-normal">
                              Mozilla/5.0 (Windows NT 10.0; Win64; x64...
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SecurityIntelligence;
