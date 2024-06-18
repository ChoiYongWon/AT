export const dynamic = 'force-dynamic'

import { NextResponse } from "next/server";
import { InternalServerError } from "../error/server/InternalServer.error";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET() {
  try {
    await fetch(`https://a-spot-thur.app`)
    await prisma.spot.count() // supabase warming용

    return new NextResponse(
        JSON.stringify({ data: true, message: "Cron Successfully Prewarming." }),
        { status: 200, headers: { "content-type": "application/json" } }
    )

  } catch (e) {
    return InternalServerError(e);
  }
}
