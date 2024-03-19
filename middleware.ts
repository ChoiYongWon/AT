import { NextResponse } from "next/server";
import { auth } from "./auth";
import { getToken } from "next-auth/jwt";

export default auth(async (req) => {
  // console.log("DECODE", decoded);
  const session = await getToken({
    req,
    secret: process.env.AUTH_SECRET as any,
    salt: process.env.AUTH_SALT as any,
  });
  // console.log(session);
  if (!session) return NextResponse.redirect(new URL("/login", req.url));
  // if (!req.auth?.user) return NextResponse.redirect(new URL("/login", req.url));
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/profile"],
};
