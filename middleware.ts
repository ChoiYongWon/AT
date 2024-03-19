import { NextResponse } from "next/server";
import { auth } from "./auth";
import { getToken } from "next-auth/jwt";
import { Session } from "next-auth";

export default auth(async (req) => {
  const session = await auth();

  if (!session) return NextResponse.redirect(new URL("/login", req.url));
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/profile"],
};
