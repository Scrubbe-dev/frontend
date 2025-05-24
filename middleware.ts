import { auth } from "@/lib/auth/config";
//import NextAuth from "next-auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isAuthRoute = nextUrl.pathname.startsWith("/auth");
  const isProtectedRoute = nextUrl.pathname.startsWith("/protected");

   // Redirect /auth or /auth/ to /auth/signin
  if (nextUrl.pathname.replace(/\/$/, "") === "/auth") {
    return Response.redirect(new URL("/auth/signin", nextUrl));
  }

  // If logged in, don't allow access to /auth pages (like login/signup)
  if (isAuthRoute && isLoggedIn) {
    return Response.redirect(new URL("/protected/dashboard", nextUrl));
  }

  // If not logged in, don't allow access to protected pages
  if (isProtectedRoute && !isLoggedIn) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};