import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import { apiClient } from "./lib/api/client";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export interface AuthUser {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  name?: string | null;
  isVerified: boolean;
  accountType?: string | null;
  businessId?: string | null;
  role?: string;
  accessToken: string;
  refreshToken: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<AuthUser | null> {
        try {
          const validatedCredentials = signInSchema.parse(credentials);

          const { data } = await apiClient.post("/auth/login", validatedCredentials);

          if (!data?.user || !data?.tokens) {
            console.error("Invalid response from server:", data);
            return null;
          }

          return {
            id: data.user.id,
            email: data.user.email,
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            name: data.user.firstName && data.user.lastName 
              ? `${data.user.firstName} ${data.user.lastName}` 
              : data.user.email,
            isVerified: data.user.isVerified ?? false,
            accountType: data.user.accountType,
            businessId: data.user.businessId,
            role: data.user.role,
            accessToken: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        const authUser = user as AuthUser;
        token.id = authUser.id;
        token.email = authUser.email;
        token.firstName = authUser.firstName;
        token.lastName = authUser.lastName;
        token.name = authUser.name;
        token.isVerified = authUser.isVerified;
        token.accountType = authUser.accountType;
        token.businessId = authUser.businessId;
        token.role = authUser.role;
        token.accessToken = authUser.accessToken;
        token.refreshToken = authUser.refreshToken;
      }

      // Handle session updates
      if (trigger === "update" && session) {
        token = { ...token, ...session };
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.firstName = token.firstName as string | null;
      session.user.lastName = token.lastName as string | null;
      session.user.name = token.name as string | null;
      session.user.isVerified = token.isVerified as boolean;
      session.user.accountType = token.accountType as string | null;
      session.user.businessId = token.businessId as string | null;
      session.user.role = token.role as string;
      session.user.accessToken = token.accessToken as string;
      session.user.refreshToken = token.refreshToken as string;
      
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});

declare module "next-auth" {
  interface User extends AuthUser {}

  interface Session {
    user: {
      id: string;
      email: string;
      firstName: string | null;
      lastName: string | null;
      name: string | null;
      isVerified: boolean;
      accountType: string | null;
      businessId: string | null;
      role: string;
      accessToken: string;
      refreshToken: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    email?: string;
    firstName?: string | null;
    lastName?: string | null;
    name?: string | null;
    isVerified?: boolean;
    accountType?: string | null;
    businessId?: string | null;
    role?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}
