"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface OverlayWrapperProps {
  children: ReactNode;
  sidebarContent: ReactNode;
}

export default function OverlayWrapper({
  children,
  sidebarContent,
}: OverlayWrapperProps) {
  const pathname = usePathname();

  // Routes that should have overlay effect
  const overlayRoutes = [
    "/auth/signin",
    "/auth/forgot-password",
    "/auth/demo-page",
  ];

  const shouldShowOverlay = overlayRoutes.includes(pathname);

  return (
    <section className="flex flex-col-reverse lg:grid lg:[grid-template-columns:71fr_73fr] h-full max-w-[1440px] w-screen mx-auto overflow-hidden">
      {/* Sidebar - first column in grid (71fr) */}
      <article
        className={`w-full transition-all duration-300 ${
          shouldShowOverlay ? "relative" : ""
        }`}
      >
        {sidebarContent}
        {/* Overlay for sidebar */}
        {shouldShowOverlay && (
          <div className="absolute inset-0 bg-black/90 z-10 transition-opacity duration-300" />
        )}
      </article>

      {/* Auth content - second column in grid (73fr) */}
      <article
        className={`w-full p-4 lg:p-8 flex flex-col justify-start items-center transition-all duration-300 ${
          shouldShowOverlay ? "relative z-20" : ""
        }`}
      >
        {children}
      </article>
    </section>
  );
}
