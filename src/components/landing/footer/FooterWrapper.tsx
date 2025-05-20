"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  // Don't render footer for auth routes
  if (pathname.startsWith("/auth")) {
    return null;
  }

  return <Footer />;
}
