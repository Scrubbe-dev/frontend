import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Gitlab from "next-auth/providers/gitlab";

interface Token {
  sub?: string;
  firstName?: string;
  lastName?: string;
  isVerified?: boolean;
  accessToken?: string;
  refreshToken?: string;
  email?: string;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Github({
      authorization: {
        params: {
          scope: "read_user",
        },
      },
      async profile(profile) {
        console.log({ profile });
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email || `${profile.login}`,
          image: profile.avatar_url,
          firstName: profile.name?.split(" ")[0] || profile.login,
          lastName: profile.name?.split(" ").slice(1).join(" ") || "",
          isVerified: true,
        };
      },
    }),
    Google({
      async profile(profile) {
        return { ...profile };
      },
    }),
    Gitlab({
      async profile(profile) {
        console.log({ gitlabProfile: profile });
        return {
          id: profile.id.toString(),
          name: profile.name || profile.username,
          email: profile.email,
          image: profile.avatar_url,
          firstName: profile.name?.split(" ")[0] || profile.username,
          lastName: profile.name?.split(" ").slice(1).join(" ") || "",
          isVerified: true,
        };
      },
    }),
    // Cognito({
    //   clientId: process.env.COGNITO_CLIENT_ID!,
    //   clientSecret: process.env.COGNITO_CLIENT_SECRET!,
    //   issuer: process.env.COGNITO_ISSUER!,
    // }),
    // AzureAD({
    //   clientId: process.env.AZURE_AD_CLIENT_ID!,
    //   clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
    // }),
  ],
  callbacks: {
    // authorized: async ({ auth }) => {
    //   return !!auth;
    // },
    async jwt({ token, user }) {
      if (user) {
        console.log({ user });
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.isVerified = user.isVerified;
      }
      return token;
    },
    async session({ session, token }) {
      const typedToken = token as Token;
      console.log({ token });
      session.user.id = typedToken.sub || "";
      session.user.firstName = typedToken.firstName;
      session.user.lastName = typedToken.lastName;
      session.user.isVerified = typedToken.isVerified;
      session.accessToken = typedToken.accessToken;
      session.refreshToken = typedToken.refreshToken;
      session.user.email = typedToken.email || "";
      return session;
    },
  },
  pages: {
    signIn: "/auth/business-signup",
    signOut: "/auth/signin",
  },
});

declare module "next-auth" {
  interface User {
    firstName?: string;
    lastName?: string;
    isVerified?: boolean;
    accessToken?: string;
    refreshToken?: string;
    email?: string;
  }

  interface Session {
    user: UserSession;
    accessToken?: string;
    refreshToken?: string;
  }
}

export interface UserSession {
  id: string;
  firstName?: string;
  lastName?: string;
  isVerified?: boolean;
  email?: string;
  image?: string;
}
