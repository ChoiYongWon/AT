import { NextResponse } from "next/server";
import { auth } from "./auth";
// import { PrismaClient } from "@prisma/client/edge";
// import { withAccelerate } from "@prisma/extension-accelerate";

export default auth(async (req) => {
  const session = await auth();
  // const prisma = new PrismaClient().$extends(withAccelerate());
  // const prisma = new PrismaClient();

  if (req.nextUrl.pathname.startsWith("/profile")) {
    if (!session) return NextResponse.redirect(new URL("/login", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/add")) {
    if (!session) return NextResponse.redirect(new URL("/login", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/onboard")) {
    if (!session) return NextResponse.redirect(new URL("/login", req.url));
    else if (session.user?.at_id)
      return NextResponse.redirect(new URL("/", req.url));
  } else {
    // at_id가 없으면 온보딩
    if (session) {
      if (!session.user?.at_id)
        return NextResponse.redirect(new URL("/onboard", req.url));
    }
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/profile", "/", "/onboard", "/add"],
};
