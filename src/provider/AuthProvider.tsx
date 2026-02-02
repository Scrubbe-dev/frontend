"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import useAuthStore from "@/lib/stores/auth.store";

interface AuthProviderProps {
  children: ReactNode;
}

// Inner component to sync session with Zustand store
function SessionSync({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      setUser(session.user);
    } else if (status === "unauthenticated") {
      setUser(null);
    }
  }, [session, status, setUser]);

  return <>{children}</>;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  return (
    <SessionProvider 
      refetchInterval={5 * 60} // Refetch session every 5 minutes
      refetchOnWindowFocus={true}
    >
      <SessionSync>
        {children}
      </SessionSync>
    </SessionProvider>
  );
}
