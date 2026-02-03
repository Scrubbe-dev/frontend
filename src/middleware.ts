import { auth } from "./auth";
import { NextResponse } from "next/server";
import type { UserRole } from "./auth";

// Define public routes that don't require authentication
const PUBLIC_ROUTES = [
  "/",
  "/auth/signin",
  "/auth/business-signup",
  "/auth/developer-signup",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify-email",
  "/auth/error",
  "/auth/demo-page",
  "/auth/invite",
  "/about",
  "/pricing",
  "/features",
  "/contact",
  "/api/auth",
  "/api-docs",
];

// Define auth routes that should redirect to dashboard if already logged in
const AUTH_ROUTES = [
  "/auth/signin",
  "/auth/business-signup",
  "/auth/developer-signup",
];

// Define protected routes that require authentication
const PROTECTED_ROUTE_PREFIXES = [
  "/dashboard",
  "/incident",
  "/ezra/dashboard",
  "/profile",
  "/settings",
  "/auth/account-setup",
  "/auth/developer-setup",
];

// Define role-based protected routes
const ROLE_PROTECTED_ROUTES: { [key: string]: UserRole[] } = {
  "/admin": ["ADMIN", "SUPER_ADMIN"],
  "/admin/users": ["SUPER_ADMIN"],
  "/admin/settings": ["SUPER_ADMIN"],
  "/admin/business": ["ADMIN", "SUPER_ADMIN"],
  "/api/admin": ["ADMIN", "SUPER_ADMIN"],
};

// Helper function to check if user has required role
function hasRequiredRole(userRoles: UserRole[] | undefined, requiredRoles: UserRole[]): boolean {
  if (!userRoles || userRoles.length === 0) return false;
  return requiredRoles.some(role => userRoles.includes(role));
}

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const pathname = nextUrl.pathname;
  const userRoles = req.auth?.user?.roles as UserRole[] | undefined;

  // Check if route is public
  const isPublicRoute = PUBLIC_ROUTES.some(route => 
    pathname === route || pathname.startsWith(route + "/")
  );

  // Check if route is protected
  const isProtectedRoute = PROTECTED_ROUTE_PREFIXES.some(prefix =>
    pathname.startsWith(prefix)
  );

  // Check if route is auth route
  const isAuthRoute = AUTH_ROUTES.some(route =>
    pathname === route || pathname.startsWith(route + "/")
  );

  // Check for role-based route protection
  const roleProtectedEntry = Object.entries(ROLE_PROTECTED_ROUTES).find(([route]) =>
    pathname === route || pathname.startsWith(route + "/")
  );

  // Allow public routes
  if (isPublicRoute) {
    // If logged in and trying to access auth routes, redirect to dashboard
    if (isAuthRoute && isLoggedIn) {
      return NextResponse.redirect(new URL("/dashboard", nextUrl));
    }
    return NextResponse.next();
  }

  // Handle role-based protection
  if (roleProtectedEntry) {
    const [route, requiredRoles] = roleProtectedEntry;
    
    // Not logged in - redirect to login
    if (!isLoggedIn) {
      const signInUrl = new URL("/auth/signin", nextUrl);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }
    
    // Logged in but doesn't have required role - redirect to unauthorized
    if (!hasRequiredRole(userRoles, requiredRoles)) {
      return NextResponse.redirect(new URL("/auth/error?error=AccessDenied", nextUrl));
    }
    
    // Has required role - allow access
    return NextResponse.next();
  }

  // If not logged in, don't allow access to protected pages
  if (isProtectedRoute && !isLoggedIn) {
    const signInUrl = new URL("/auth/signin", nextUrl);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Allow all other routes
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$).*)",
  ],
};

// Export helper functions for use in components
export { hasRequiredRole };
