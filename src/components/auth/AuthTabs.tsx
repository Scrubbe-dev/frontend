// app/auth/AuthTabs.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap bg-white border-2 border-gray-300 rounded-t-[20px] overflow-hidden">
      <Link
        href="/auth/signin"
        className={`flex-1 py-3 md:py-4 px-2 md:px-6 text-center text-sm md:text-base ${
          pathname === "/auth/signin"
            ? "bg-[#EFF6FF] font-bold border-b-4 border-[#1F40AE]"
            : "hover:bg-gray-200"
        }`}
      >
        Sign In
      </Link>
      <Link
        href="/auth/forgot-password"
        className={`flex-1 py-3 md:py-4 px-2 md:px-6 text-center text-sm md:text-base ${
          pathname === "/auth/forgot-password"
            ? "bg-[#EFF6FF] font-bold border-b-4 border-[#1F40AE]"
            : "hover:bg-gray-200"
        }`}
      >
        Forgot Password
      </Link>
      <Link
        href="/auth/business-signup"
        className={`flex-1 py-3 md:py-4 px-2 md:px-6 text-center text-sm md:text-base ${
          pathname === "/auth/business-signup"
            ? "bg-[#EFF6FF] font-bold border-b-4 border-[#1F40AE]"
            : "hover:bg-gray-200"
        }`}
      >
        Business Signup
      </Link>
      <Link
        href="/auth/developer-signup"
        className={`flex-1 py-3 md:py-4 px-2 md:px-6 text-center text-sm md:text-base ${
          pathname === "/auth/developer-signup"
            ? "bg-[#EFF6FF] font-bold border-b-4 border-[#1F40AE]"
            : "hover:bg-gray-200"
        }`}
      >
        Developer Signup
      </Link>
    </div>
  );
}
