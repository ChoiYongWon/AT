import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    at_id?: string | null;
  }
  interface Session {
    user: User;
  }
}
