"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import type { UserRole } from "@/auth";

interface RoleGuardProps {
  children: ReactNode;
  allowedRoles: UserRole[];
  fallback?: ReactNode;
}

/**
 * RoleGuard Component
 * 
 * A wrapper component that conditionally renders children based on user roles.
 * 
 * @example
 * ```tsx
 * <RoleGuard allowedRoles={["ADMIN", "SUPER_ADMIN"]}>
 *   <AdminDashboard />
 * </RoleGuard>
 * 
 * <RoleGuard 
 *   allowedRoles={["SUPER_ADMIN"]} 
 *   fallback={<div>Super Admin only</div>}
 * >
 *   <SuperAdminPanel />
 * </RoleGuard>
 * ```
 */
export function RoleGuard({ children, allowedRoles, fallback = null }: RoleGuardProps) {
  const { data: session, status } = useSession();

  // While loading, show nothing or a loading state
  if (status === "loading") {
    return null;
  }

  // Not authenticated
  if (!session?.user?.roles) {
    return <>{fallback}</>;
  }

  // Check if user has any of the required roles
  const hasRequiredRole = allowedRoles.some(role => 
    session.user.roles?.includes(role)
  );

  if (!hasRequiredRole) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

/**
 * AdminGuard Component
 * 
 * Shortcut for ADMIN and SUPER_ADMIN roles
 */
export function AdminGuard({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) {
  return (
    <RoleGuard allowedRoles={["ADMIN", "SUPER_ADMIN"]} fallback={fallback}>
      {children}
    </RoleGuard>
  );
}

/**
 * SuperAdminGuard Component
 * 
 * Shortcut for SUPER_ADMIN role only
 */
export function SuperAdminGuard({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) {
  return (
    <RoleGuard allowedRoles={["SUPER_ADMIN"]} fallback={fallback}>
      {children}
    </RoleGuard>
  );
}

/**
 * Hook to check user roles
 */
export function useRoleCheck() {
  const { data: session } = useSession();

  const hasRole = (roles: UserRole[]): boolean => {
    if (!session?.user?.roles) return false;
    return roles.some(role => session.user.roles?.includes(role));
  };

  const isAdmin = (): boolean => hasRole(["ADMIN", "SUPER_ADMIN"]);
  const isSuperAdmin = (): boolean => hasRole(["SUPER_ADMIN"]);
  const isUser = (): boolean => hasRole(["USER"]);

  return {
    hasRole,
    isAdmin,
    isSuperAdmin,
    isUser,
    roles: session?.user?.roles || [],
  };
}
