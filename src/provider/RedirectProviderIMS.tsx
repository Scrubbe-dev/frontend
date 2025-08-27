// context/RedirectContext.tsx
"use client";
import { COOKIE_KEYS } from "@/lib/constant";
import { getCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface RedirectContextType {
  shouldRedirect: boolean;
  triggerRedirect: (status: number) => void;
}

const RedirectContext = createContext<RedirectContextType | undefined>(
  undefined
);

export const RedirectProviderIMS = ({ children }: { children: ReactNode }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const router = useRouter();

  const triggerRedirect = (status: number) => {
    if (status === 401) {
      // Clear any authentication tokens from storage
      deleteCookie(COOKIE_KEYS.TOKEN);
      deleteCookie(COOKIE_KEYS.REFRESH_TOKEN);
      // Set the state to trigger the redirect
      setShouldRedirect(true);
    }
  };

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = getCookie(COOKIE_KEYS.TOKEN);
    const newToken = urlParams.get("token");

    if (!token || !newToken) {
      // const timeout = setTimeout(() => {
      router.push("/auth/signin");
      if (typeof window !== "undefined") {
        window.location.href =
          (process.env.NEXT_PUBLIC_SCRUBBE ?? "https://scrubbe.com") +
          "/auth/signin";
      }
      return;
      // }, 1000);
      // return () => clearTimeout(timeout);
    }
    if (shouldRedirect) {
      // Redirect to the login page
      if (typeof window !== "undefined") {
        window.location.href = window.location.href =
          (process.env.NEXT_PUBLIC_SCRUBBE ?? "https://scrubbe.com") +
          "/auth/signin";
      }
      return;
    }
  }, [shouldRedirect, router]);

  return (
    <RedirectContext.Provider value={{ shouldRedirect, triggerRedirect }}>
      {children}
    </RedirectContext.Provider>
  );
};

export const useRedirect = () => {
  const context = useContext(RedirectContext);
  if (context === undefined) {
    throw new Error("useRedirect must be used within a RedirectProvider");
  }
  return context;
};
