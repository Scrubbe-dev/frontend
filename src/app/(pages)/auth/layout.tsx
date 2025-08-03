import NewNavbar from "@/components/landing/header/NewNavbar";
import React, { Suspense } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NewNavbar />
      <Suspense fallback={<div>Loading...</div>}>
      {children}
      </Suspense>
    </div>
  );
};

export default AuthLayout;
