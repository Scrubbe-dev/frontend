"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import FooterEzra from "./FooterEzra";

export default function FooterWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/auth") || pathname.startsWith("/data-sources")) {
    return null;
  }

  if (pathname.startsWith("/ezra")) {
    return <FooterEzra />;
  }

  return <Footer />;
}
