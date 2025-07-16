import CButton from "@/components/ui/Cbutton";
import React from "react";

const ComplianceStandard = () => {
  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
      <div className="text-center mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          Supported Compliance Standards
        </h2>
        <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
      </div>

      <div className=" grid md:grid-cols-2  gap-8">
        <div className="bg-gray-50 p-6 space-y-3 rounded-lg border border-gray-200">
          <p className="text-gray-800 font-bold text-2xl">SOC 2</p>
          <p className="font-medium">
            Service Organization Control 2 (SOC 2) is an auditing procedure
            developed by the American Institute of CPAs (AICPA) that ensures
            your service providers securely manage your data to protect your
            organization&apos;s interests and the privacy of its clients.
            Scrubbe helps you prepare for SOC 2 Type I and Type II audits by
            implementing controls across the Trust Services Criteria
          </p>
          <ul className="list-disc list-inside font-light space-y-1">
            <li>Security</li>
            <li>Availability</li>
            <li>Processing Integrity</li>
            <li>Confidentiality</li>
            <li>Privacy</li>
          </ul>
          <CButton className=" w-fit">Download SOC 2 Guide</CButton>
        </div>
        <div className="bg-gray-50 p-6 space-y-3 rounded-lg border border-gray-200">
          <p className="text-gray-800 font-bold text-2xl">ISO 27001</p>
          <p className=" font-medium">
            ISO 27001 is an international standard for information security
            management systems (ISMS). It provides a systematic approach to
            managing sensitive company information.Scrubbe simplifies ISO 27001
            implementation by:
          </p>
          <ul className="list-disc list-inside font-light space-y-1">
            <li>Streamlining risk assessment processes</li>
            <li>
              Managing the implementation of 114 controls across 14 domains
            </li>
            <li>Facilitating internal audits</li>
            <li>Supporting management review</li>
            <li>Preparing for certification audits</li>
          </ul>
          <p className="font-light">
            Device fingerprinting helps identify account sharing, credential
            stuffing attacks, and sophisticated fraud attempts using stolen
            credentials.
          </p>
          <CButton className=" w-fit">Download ISO 27001 roadmap</CButton>
        </div>{" "}
      </div>
    </div>
  );
};

export default ComplianceStandard;
