import { NextResponse } from "next/server";
import { auth } from "./auth";
import { getToken } from "next-auth/jwt";

export default auth(async (req) => {
  const session = await getToken({
    req,
    secret: process.env.AUTH_SECRET as any,
    salt: process.env.AUTH_SALT as any,
  });
  console.log(process.env.AUTH_SALT, req, session, process.env.AUTH_SECRET);

  if (!session) return NextResponse.redirect(new URL("/login", req.url));
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/profile"],
};
