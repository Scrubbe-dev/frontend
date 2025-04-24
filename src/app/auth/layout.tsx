// app/auth/layout.tsx
import { ReactNode } from "react";
import AnalyticsSidebar from "@/components/auth/AnalyticsSidebar";
import AuthTabs from "@/components/auth/AuthTabs";
import MainLayout from "@/components/main-layout";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <div className="flex flex-col-reverse md:flex-row h-auto w-full">
        {/* Sidebar takes full width on mobile, 1/3 on desktop */}
        <div className="w-full md:w-1/3">
          <AnalyticsSidebar />
        </div>

        {/* Auth content takes full width on mobile, 2/3 on desktop */}
        <div className="w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-start items-center">
          <div className="bg-white rounded-lg shadow-md w-full max-w-2xl overflow-hidden">
            <AuthTabs />
            {children}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
