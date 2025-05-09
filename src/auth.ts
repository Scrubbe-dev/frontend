import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import api from "@/lib/axios";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

interface Token {
  sub?: string;
  firstName?: string;
  lastName?: string;
  isVerified?: boolean;
  accessToken?: string;
  refreshToken?: string;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          
          const response = await api.post("/login", {
            email,
            password,
          });

          
          return {
            id: response.data.user.id,
            email: response.data.user.email,
            name: `${response.data.user.firstName} ${response.data.user.lastName}`,
            firstName: response.data.user.firstName,
            lastName: response.data.user.lastName,
            isVerified: response.data.user.isVerified,
            accessToken: response.data.tokens.accessToken,
            refreshToken: response.data.tokens.refreshToken,
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
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.isVerified = user.isVerified;
      }
      return token;
    },
    async session({ session, token }) {
      const typedToken = token as Token;

      session.user.id = typedToken.sub || "";
      session.user.firstName = typedToken.firstName;
      session.user.lastName = typedToken.lastName;
      session.user.isVerified = typedToken.isVerified;
      session.accessToken = typedToken.accessToken;
      session.refreshToken = typedToken.refreshToken;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", 
  },
});


declare module "next-auth" {
  interface User {
    firstName?: string;
    lastName?: string;
    isVerified?: boolean;
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session {
    user: {
      id: string;
      firstName?: string;
      lastName?: string;
      isVerified?: boolean;
    };
    accessToken?: string;
    refreshToken?: string;
  }
}
