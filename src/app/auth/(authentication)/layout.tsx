import { ReactNode, Suspense } from "react";
import AnalyticsSidebar from "@/components/auth/AnalyticsSidebar";
import AuthTabs from "@/components/auth/AuthTabs";
import OverlayWrapper from "@/components/auth/OverlayWrapper"; // Adjust path as needed
import ImsSidebar from "@/components/auth/ImsSidebar";

const IS_STANDALONE = process.env.NEXT_PUBLIC_IS_STANDALONE === "true";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-auto relative">
      <Suspense fallback={<div>Loading...</div>}>
        <OverlayWrapper
          sidebarContent={IS_STANDALONE ? <ImsSidebar /> : <AnalyticsSidebar />}
        >
          {IS_STANDALONE ? null : <AuthTabs />}
          {children}
        </OverlayWrapper>
      </Suspense>
    </div>
  );
}
