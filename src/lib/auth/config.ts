import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "../validations/auth.schema";
import { apiClient } from "../api/client";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const validatedCredentials = loginSchema.parse(credentials);
          
          const { data } = await apiClient.post("/login", validatedCredentials);
          console.log(data,credentials, 'my data from credentials')
          if (!data?.user) {
            return null;
          }
          
          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.name,
            role: data.user.role,
            accessToken: data.accessToken,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.accessToken = token.accessToken as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth",
  },
  session: {
    strategy: "jwt",
  },
  secret: "7a81152ba38fb54450f31532c6960265dd4f3211361faf382be67c8a02d10382b4622e945aaa05c69184248158dd04e1c7a8309fc72346bac4f2b2f57f93a1fe5d45963ec05c35d255492c86e2cca955a698e9b04200671fc77b407f24091bc57d426ad2eb2c15e56e3555b69ac753992a14abf2494d41f2b1f5f2a81cafaa60446876206dbc03269e589ddf97ce5cf769bc2719c0dbbb2b1eb40dc70dc5046cb5e9dd64f1522ca6ea1ef4be0052adf99e8a5d31328fd404774e5689cba8dfdd3e0b9b6e9376de4b4ddda56588401e31c70ed9e55c23211d97655f41be6b11ced49ad7f631af89698ccdf4abb71a2c59752923d573dd2cff7a25caa94f988598be19888928034c18a3d2597bf8c528c1d3b07245bfc3236c017d718a2ed9aaad17e8ccc81f447359494638a69bde05d9009c910b8f7e940c6a7e73585315633bdfbb3c67d0fd8135052021924a8f8559e1595d8b6f3274f0f8b086ff825ac4c794c56120f8275a5ee74fd95b9f07c2d5507aee39ba681b4586b23e3b82c8d6c6820f843ded3b4a1ef703d2854162c8c22dab5aac5ce7418140ef4200831810d935b2ac37dedd9b7680e10cce748c3a9e2a43f454ba9fcae63c08245b657d5c49579f55cb77695c9a19fe4427c9bb83f36006cceaf931681f87d8e368b0397a3d6418a9de4ed4a7476e70a04f53eb239eb606061718e14c4f9c76e04b40120720",
})
