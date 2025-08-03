import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Gitlab from "next-auth/providers/gitlab";
// import Cognito from "next-auth/providers/cognito";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";

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
          oAuthProvider: "GITHUB",
          githubUsername: profile.login,
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
        console.log({ profile });
        return {
          id: profile.sub,
          oAuthProvider: "GOOGLE",
          email: profile.email,
          image: profile?.avatar_url || "",
          firstName: profile.name?.split(" ")[0] || profile.username,
          lastName: profile.name?.split(" ")[1] || "",
          isVerified: profile,
        };
      },
    }),
    Gitlab({
      async profile(profile) {
        console.log({ gitlabProfile: profile });
        return {
          id: profile.id.toString(),
          oAuthProvider: "GITLAB",
          email: profile.email,
          image: profile.avatar_url,
          firstName: profile.name?.split(" ")[0] || profile.username,
          lastName: profile.name?.split(" ").slice(1).join(" ") || "",
          isVerified: true,
        };
      },
    }),
    // Cognito({
    //   async profile(profile) {
    //     return {
    //       id: profile.id.toString(),
    //       name: profile.name || profile.username,
    //       email: profile.email,
    //       image: profile.avatar_url,
    //       firstName: profile.name?.split(" ")[0] || profile.username,
    //       lastName: profile.name?.split(" ").slice(1).join(" ") || "",
    //       isVerified: true,
    //     };
    //   },
    // }),
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
      async profile(profile) {
        console.log({ profile });
        return {
          id: profile.oid,
          oAuthProvider: "AZURE",
          email: profile.email,
          firstName: profile.name?.split(" ")[0] || profile.username,
          lastName: profile.name?.split(" ").slice(1).join(" ") || "",
          isVerified: true,
        };
      },
    }),
  ],
  callbacks: {
    // authorized: async ({ auth }) => {
    //   return !!auth;
    // },
    async jwt({ token, user }) {
      // console.log({ token });
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.isVerified = user.isVerified;
        token.oAuthProvider = user.oAuthProvider;
        token.githubUsername = user.githubUsername;
      }
      return token;
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const typedToken = token as any;
      session.user.id = typedToken.sub || "";
      session.user.firstName = typedToken.firstName;
      session.user.lastName = typedToken.lastName;
      session.user.isVerified = typedToken.isVerified;
      session.accessToken = typedToken.accessToken;
      session.refreshToken = typedToken.refreshToken;
      session.user.email = typedToken.email || "";
      session.user.oAuthProvider = typedToken.oAuthProvider;
      session.user.githubUsername = typedToken.githubUsername;
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
    oAuthProvider: string;
    githubUsername?: string;
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
  oAuthProvider: string;
  githubUsername?: string;
}
