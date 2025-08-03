import { ReactNode, Suspense } from "react";
import AnalyticsSidebar from "@/components/auth/AnalyticsSidebar";
import AuthTabs from "@/components/auth/AuthTabs";
import OverlayWrapper from "@/components/auth/OverlayWrapper"; // Adjust path as needed

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-auto relative">
      <Suspense fallback={<div>Loading...</div>}>
      <OverlayWrapper sidebarContent={<AnalyticsSidebar />}>
        <AuthTabs />
        {children}
      </OverlayWrapper>
      </Suspense>
    </div>
  );
}
