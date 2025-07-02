import NewNavbar from "@/components/landing/header/NewNavbar";
import NewFooter from "@/components/landing/footer/NewFooter";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NewNavbar />
      {children}
      <NewFooter />
    </div>
  );
};

export default HomeLayout;
