import { auth } from "@/lib/auth/config";
import NextAuth from "next-auth";


export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  
  const isAuthRoute = nextUrl.pathname.startsWith("/auth");
  const isProtectedRoute = nextUrl.pathname.startsWith("/protected");
  
  if (isAuthRoute && isLoggedIn) {
    return Response.redirect(new URL("/protected/dashboard", nextUrl));
  }
  
  if (isProtectedRoute && !isLoggedIn) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};