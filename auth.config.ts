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

  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
