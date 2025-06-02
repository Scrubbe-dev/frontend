"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import NavbarDataS from "./NavbarDataS";

export default function NavbarWrapper() {
  const pathname = usePathname();

  return pathname.startsWith("/data-sources") ? <NavbarDataS /> : <Navbar />;
}
