import NavbarDataS from "@/components/landing/header/NavbarDataS";
import React from "react";

const DataSourcesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarDataS />
      {children}
    </div>
  );
};

export default DataSourcesLayout;
