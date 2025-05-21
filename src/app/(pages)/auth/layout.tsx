import { ReactNode } from "react";
import AnalyticsSidebar from "@/components/auth/AnalyticsSidebar";
import AuthTabs from "@/components/auth/AuthTabs";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-auto bg-white">
      <section className="flex flex-col-reverse lg:grid lg:[grid-template-columns:71fr_73fr] h-full w-full max-w-[1440px] xl:min-w-[1440px] mx-auto overflow-hidden">
        {/* Sidebar - first column in grid (71fr) */}
        <div className="w-full">
          <AnalyticsSidebar />
        </div>

        {/* Auth content - second column in grid (73fr) */}
        <div className="w-full p-4 lg:p-8 flex flex-col justify-start items-center">
          <div className="bg-white rounded-lg shadow-md w-full max-w-2xl overflow-hidden">
            <AuthTabs />
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
