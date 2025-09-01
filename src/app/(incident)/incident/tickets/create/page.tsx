"use client";
import CreateIncident from "@/components/IncidentTicket/CreateIncident";
import CButton from "@/components/ui/Cbutton";
import { Plus } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold dark:text-white text-black">
          Create and Manage new critical Incidents
        </div>
        <CButton className="w-fit  bg-IMSLightGreen text-white hover:bg-IMSGreen shadow-none">
          Create New Incident <Plus />
        </CButton>
      </div>

      <CreateIncident isOpen={false} isModal={false} onClose={() => {}} />
    </div>
  );
};

export default Page;
