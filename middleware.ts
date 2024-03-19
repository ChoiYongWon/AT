import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth(async (req) => {
  const session = await auth();

  if (!session) return NextResponse.redirect(new URL("/login", req.url));
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/profile"],
};
