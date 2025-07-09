import DashboardWrapper from "@/components/ezra/DashboardWrapper";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardWrapper>{children}</DashboardWrapper>;
};

export default DashboardLayout;
