import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    at_id?: string | null;
    id?: string | null;
  }
  interface Session {
    user: User;
    error?: "RefreshAccessTokenError"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string
    access_token_expires_at: number
    refresh_token: string
    id: string
    at_id: string
    error?: "RefreshAccessTokenError"
  }
}