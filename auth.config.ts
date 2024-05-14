import Kakao from "next-auth/providers/kakao";
// import Naver from "next-auth/providers/naver";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import type { NextAuthConfig } from "next-auth";

async function refreshToken(token: any){
  try {
    const response = await fetch("https://kauth.kakao.com/oauth/token", {
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
      body: new URLSearchParams({
        client_id: process.env.AUTH_KAKAO_ID!,
        client_secret: process.env.AUTH_KAKAO_SECRET!,
        grant_type: "refresh_token",
        refresh_token: token.refresh_token,
      }),
      method: "POST",
    })
    const refreshedTokens = await response.json()

    if (!response.ok) throw refreshedTokens

    // refresh 성공

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      access_token_expires_at: Date.now() + refreshedTokens.expires_in * 1000, // 현재 시간 + 유효 시간 (밀리초) + 1000
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken // 한달 이내로 남으면 refresh
    }

  } catch (error) { // refresh에 실패하면 그냥 삭제해버림
      console.error("Error refreshing access token", error)

      return {
        ...token,
        error: "RefreshAccessTokenError"
      }
  }
}


const prisma = new PrismaClient().$extends(withAccelerate());
// const prisma = new PrismaClient();
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
      if (trigger == "signUp" && account) {

        return {
          ...token,
          at_id: null,
          id: null,
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          access_token_expires_at: Date.now() + (account.expires_in || 0) * 1000
        }
      }
      // 로그인
      else if (trigger == "signIn" && account) {
        const user = await prisma.user.findUnique({
          where: {
            email: token.email as string,
          },
        });
        return {
          ...token,
          at_id: user?.at_id,
          id: user?.id,
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          access_token_expires_at: Date.now() + (account.expires_in || 0) * 1000
        }

      }

      // AT_ID 업데이트 (온보딩 과정)
      else if (trigger == "update" && session?.at_id) {
        return {
          ...token,
          at_id: session.at_id,
          id: session.id,
        }
      }
      if(token.refresh_token){ // default
        //@ts-ignore
        if (Date.now() < token.access_token_expires_at) {
          return token
        }
        return refreshToken(token)
      }
      return token      
    },

    async session({ session, trigger, newSession, token }) {
      // Note, that `rest.session` can be any arbitrary object, remember to validate it!
      session.user.at_id = token?.at_id as string;
      session.user.id = token?.id as string;
      session.error = token?.error
      // 세션에는 jwt 안념겨줌

      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
