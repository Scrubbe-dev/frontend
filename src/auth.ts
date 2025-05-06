// src/auth.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/lib/axios";

// Type declarations
declare module "next-auth" {
  interface User {
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session {
    accessToken?: string;
    refreshToken?: string;
  }

  interface JWT {
    accessToken?: string;
    refreshToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Change this to login endpoint when you implement it
          const response = await api.post("/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          const { user, tokens } = response.data;

          return {
            id: user.id,
            email: user.email,
            name:
              user.firstName && user.lastName
                ? `${user.firstName} ${user.lastName}`
                : user.email,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken as string;
        token.refreshToken = user.refreshToken as string;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
