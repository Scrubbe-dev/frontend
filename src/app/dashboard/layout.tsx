import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardWrapper>{children}</DashboardWrapper>;
};

export default layout;
