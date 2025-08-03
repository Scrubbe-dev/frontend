import CButton from "@/components/ui/Cbutton";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import React from "react";

const ComplianceGetStarted = () => {
  return (
    <div className="bg-[url('/compliance-get-started.png')] bg-no-repeat bg-cover">
      <div className="max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
        <div className=" max-w-3xl h-full bg-white w-full rounded-3xl overflow-hidden">
          <div className="h-5 w-full bg-colorScGreen"></div>
          <div className="p-6 pb-20 space-y-4">
            <h2 className=" font-bold text-2xl md:text-4xl">
              Get Started with Scrubbe
            </h2>
            <p>
              Ready to simplify your compliance journey? Contact us today to
              learn how Scrubbe can help your organization achieve and maintain
              compliance with minimal overhead
            </p>

            <Input
              label="Full Name"
              placeholder="Enter full name"
              labelClassName="!text-black"
              className="!text-black"
            />
            <Input
              label="Email"
              placeholder="email@company.com"
              labelClassName="!text-black"
              className="!text-black"
            />
            <Input
              label="Company"
              placeholder="Enter company name"
              labelClassName="!text-black"
              className="!text-black"
            />
            <Select
              label="Interest Standard"
              labelClassName="!text-black"
              options={[]}
              className="!text-black"
            />
            <div className="space-y-2">
              <p className=" font-medium text-sm ">Message</p>
              <textarea
                rows={4}
                placeholder="Tell us about your compliance needs"
                className="w-full bg-transparent dark:text-white border border-gray-300 rounded-md p-2 text-sm "
              />
            </div>
            <CButton className="w-fit float-end">Send Message</CButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceGetStarted;
