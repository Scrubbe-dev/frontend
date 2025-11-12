"use client";
import CreateIncident from "@/components/IncidentTicket/CreateIncident";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold dark:text-white text-black">
          Create and Manage new critical Incidents
        </div>
      </div>

      <CreateIncident isOpen={false} isModal={false} onClose={() => {}} />
    </div>
  );
};

export default Page;
