"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import NavbarDataS from "./NavbarDataS";
import NavbarEzra from "./NavbarEzra";

export default function NavbarWrapper() {
  const pathname = usePathname();

  return pathname.startsWith("/data-sources") ? (
    <NavbarDataS />
  ) : pathname.startsWith("/ezra") ? (
    <NavbarEzra />
  ) : (
    <Navbar />
  );
}
