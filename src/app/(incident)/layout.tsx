import Navbar from "@/components/dashboard/Navbar";
import { RedirectProviderIMS } from "@/provider/RedirectProviderIMS";
import StandaloneTokenCollectorProvider from "@/provider/StandaloneTokenCollectorProvider";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const IS_STANDALONE = process.env.NEXT_PUBLIC_IS_STANDALONE === "true";
const IncidentDashboard = ({ children }: { children: ReactNode }) => {
  if (!IS_STANDALONE) {
    // If we're in standalone mode, redirect any dashboard page to the incident page.
    redirect("/");
  }
  return (
    <StandaloneTokenCollectorProvider>
      <RedirectProviderIMS>
        <div className="dark:bg-[#111827] bg-white min-h-screen">
          <Navbar />
          {children}
        </div>
      </RedirectProviderIMS>
    </StandaloneTokenCollectorProvider>
  );
};

export default IncidentDashboard;
