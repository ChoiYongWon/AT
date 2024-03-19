import Kakao from "next-auth/providers/kakao";
import Naver from "next-auth/providers/naver";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import type { NextAuthConfig } from "next-auth";

const prisma = new PrismaClient();

export default {
  providers: [Kakao],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  session: {
    maxAge: 60 * 60 * 24 * 30, // 30일
    strategy: "jwt",
  },
  callbacks: {
    // // 로그인 할 때
    // async signIn({ user, account, profile, credentials }) {
    //   console.log("SIGNIN", user, account, profile, credentials);
    //   return true;
    // },
    // // JWT Session이 변할 때
    // async jwt({ token, user, account }) {
    //   console.log("JWT", token, user, account);
    //   return token;
    // },
    // // JWT가 변할 때 client에 넘겨주는 값
    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token and user id from a provider.
    //   console.log("SESSION", token, session, user);
    //   return session;
    // },
  },
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
