import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Define route patterns
const PUBLIC_ROUTES = [
  "/",
  "/auth/signin",
  "/auth/signup",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify-email",
  "/auth/error",
  "/about",
  "/pricing",
  "/features",
  "/contact",
  "/api/auth",
];

const PROTECTED_ROUTE_PREFIXES = [
  "/dashboard",
  "/protected",
  "/profile",
  "/settings",
  "/admin",
];

const AUTH_ROUTE_PREFIXES = [
  "/auth",
];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const pathname = nextUrl.pathname;

  // Check if route is public
  const isPublicRoute = PUBLIC_ROUTES.some(route => 
    pathname === route || pathname.startsWith(route + "/")
  );

  // Check if route is protected
  const isProtectedRoute = PROTECTED_ROUTE_PREFIXES.some(prefix =>
    pathname.startsWith(prefix)
  );

  // Check if route is auth route
  const isAuthRoute = AUTH_ROUTE_PREFIXES.some(prefix =>
    pathname.startsWith(prefix)
  );

  // Allow public routes
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect /auth or /auth/ to /auth/signin
  if (pathname.replace(/\/$/, "") === "/auth") {
    return NextResponse.redirect(new URL("/auth/signin", nextUrl));
  }

  // If logged in, don't allow access to auth pages (redirect to dashboard)
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
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
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)",
  ],
};
