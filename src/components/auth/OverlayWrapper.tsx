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
    <section
      className={`${
        shouldShowOverlay
          ? "bg-neutral-100 items-center"
          : " bg-neutral-100 md:bg-white"
      } flex flex-col-reverse justify-center  md:flex-row min-h-screen h-full  w-full overflow-hidden`}
    >
      {/* Sidebar - first column in grid (71fr) */}
      <article
        className={`w-full transition-all duration-300 ${
          shouldShowOverlay ? "relative hidden" : " md:flex hidden "
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
        <div className={` max-w-2xl w-full bg-white rounded-t-3xl `}>
          {children}
        </div>
      </article>
    </section>
  );
}
