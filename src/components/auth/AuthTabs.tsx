// app/auth/AuthTabs.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap bg-gray-100">
      <Link
        href="/auth/signin"
        className={`flex-1 py-3 md:py-4 px-2 md:px-6 text-center text-sm md:text-base ${
          pathname === "/auth/signin"
            ? "bg-white font-bold border-b-2 border-indigo-900"
            : "hover:bg-gray-200"
        }`}
      >
        Sign In
      </Link>
      <Link
        href="/auth/forgot-password"
        className={`flex-1 py-3 md:py-4 px-2 md:px-6 text-center text-sm md:text-base ${
          pathname === "/auth/forgot-password"
            ? "bg-white font-bold border-b-2 border-indigo-900"
            : "hover:bg-gray-200"
        }`}
      >
        Forgot Password
      </Link>
      <Link
        href="/auth/business-signup"
        className={`flex-1 py-3 md:py-4 px-2 md:px-6 text-center text-sm md:text-base ${
          pathname === "/auth/business-signup"
            ? "bg-white font-bold border-b-2 border-indigo-900"
            : "hover:bg-gray-200"
        }`}
      >
        Business Signup
      </Link>
      <Link
        href="/auth/developer-signup"
        className={`flex-1 py-3 md:py-4 px-2 md:px-6 text-center text-sm md:text-base ${
          pathname === "/auth/developer-signup"
            ? "bg-white font-bold border-b-2 border-indigo-900"
            : "hover:bg-gray-200"
        }`}
      >
        Developer Signup
      </Link>
    </div>
  );
}
