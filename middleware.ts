import { NextResponse } from "next/server";
import { auth } from "./auth";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";


export default auth(async (req) => {

  // const prisma = new PrismaClient().$extends(withAccelerate());

  const session = await auth();
  if (req.nextUrl.pathname.startsWith("/login")) {
    if (session) return NextResponse.redirect(new URL("/", req.url));
  }
  else if (req.nextUrl.pathname.startsWith("/profile")) {
    if (!session) return NextResponse.redirect(new URL("/login", req.url));
    else {
      if (!session.user?.at_id)
        return NextResponse.redirect(new URL("/onboard", req.url));
    }
  }
  else if (req.nextUrl.pathname.startsWith("/add")) {
    if (!session) return NextResponse.redirect(new URL("/login", req.url));
    else {
      if (!session.user?.at_id)
        return NextResponse.redirect(new URL("/onboard", req.url));
    }
  }
  // if (req.nextUrl.pathname.startsWith("/edit")) {
  //   if (!session) return NextResponse.redirect(new URL("/", req.url));
  //   const spotId = req.nextUrl.pathname.split("/").at(-1)
  //   const owner = await prisma.spot.findUnique({
  //     where: {
  //       id: spotId
  //     },
  //     select: {
  //       userId: true
  //     }
  //   })
  //   if (owner?.userId != session.user.id) return NextResponse.redirect(new URL("/error/403", req.url));
  // }
  // if (req.nextUrl.pathname.startsWith("/at")) {
  //   const spotId = req.nextUrl.pathname.split("/").at(-1)
  //   const exists = await prisma.spot.findUnique({
  //     where: {
  //       id: spotId
  //     }
  //   })
  //   if (!exists) return NextResponse.redirect(new URL("/error/404", req.url));
  // }
  else if (req.nextUrl.pathname.startsWith("/onboard")) {
    if (!session) return NextResponse.redirect(new URL("/login", req.url));
    // else if (session.user?.at_id)
      // return NextResponse.redirect(new URL("/", req.url));
  }
  else {
    // at_id가 없으면 온보딩
    if (session) {
      if (!session.user?.at_id)
        return NextResponse.redirect(new URL("/onboard", req.url));
    }
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/profile", "/", "/onboard", "/add", "/login"],
};
