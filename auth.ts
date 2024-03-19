import NextAuth from "next-auth";
import NextAuthConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({ ...NextAuthConfig });
