import { ReactNode } from "react";
import AnalyticsSidebar from "@/components/auth/AnalyticsSidebar";
import AuthTabs from "@/components/auth/AuthTabs";
//xl:min-w-[1440px]
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-auto bg-white">
      <section className="flex flex-col-reverse lg:grid lg:[grid-template-columns:71fr_73fr] h-full max-w-[1440px] w-screen mx-auto overflow-hidden">
        {/* Sidebar - first column in grid (71fr) */}
        <article className="w-full">
          <AnalyticsSidebar />
        </article>

        {/* Auth content - second column in grid (73fr) */}
        <article className="w-full p-4 lg:p-8 flex flex-col justify-start items-center">
          <AuthTabs />
          {children}
        </article>
      </section>
    </div>
  );
}
