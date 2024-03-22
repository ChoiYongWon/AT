import Kakao from "next-auth/providers/kakao";
// import Naver from "next-auth/providers/naver";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import type { NextAuthConfig } from "next-auth";

const prisma = new PrismaClient().$extends(withAccelerate());

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
    async jwt({ token, account, profile, trigger, session }) {
      // 회원가입
      if (trigger == "signUp") {
        token.at_id = null;
      }
      // 로그인
      else if (trigger == "signIn") {
        const user = await prisma.user.findUnique({
          where: {
            email: token.email as string,
          },
        });
        token.at_id = user?.at_id;
      }
      // AT_ID 업데이트 (온보딩 과정)
      else if (trigger == "update" && session?.at_id) {
        token.at_id = session.at_id;
      }
      return token;
    },

    async session({ session, trigger, newSession, token }) {
      // Note, that `rest.session` can be any arbitrary object, remember to validate it!
      session.user.at_id = token?.at_id as string;

      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
