// next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    role?: string; // Add your custom property
    accessToken?: string; // Add your custom property
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: string; // Add your custom property
      accessToken?: string; // Add your custom property
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string; // Add your custom property
    accessToken?: string; // Add your custom property
  }
}