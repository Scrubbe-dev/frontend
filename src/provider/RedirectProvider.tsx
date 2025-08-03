// context/RedirectContext.tsx
"use client";
import { COOKIE_KEYS } from "@/lib/constant";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface RedirectContextType {
  shouldRedirect: boolean;
  triggerRedirect: (status: number) => void;
}

const RedirectContext = createContext<RedirectContextType | undefined>(
  undefined
);

export const RedirectProvider = ({ children }: { children: ReactNode }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const router = useRouter();

  const triggerRedirect = (status: number) => {
    if (status === 401) {
      // Clear any authentication tokens from storage
      localStorage.removeItem("authToken");
      // Set the state to trigger the redirect
      setShouldRedirect(true);
    }
  };

  React.useEffect(() => {
    const token = getCookie(COOKIE_KEYS.TOKEN);
    const refreshToken = getCookie(COOKIE_KEYS.REFRESH_TOKEN);

    if (!token && !refreshToken) {
      return router.push("/auth/signin");
    }
    if (shouldRedirect) {
      // Redirect to the login page
      return router.push("/auth/signin");
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
