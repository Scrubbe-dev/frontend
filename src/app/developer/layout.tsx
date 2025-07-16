import DashboardWrapper from "@/components/developer/DashboardWrapper";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardWrapper>{children}</DashboardWrapper>;
};

export default DashboardLayout;
