export const dynamic = 'force-dynamic'

import { NextResponse } from "next/server";
import { InternalServerError } from "../error/server/InternalServer.error";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET() {
  try {
    // supabase warming용
    await fetch(`https://${process.env.VERCEL_URL}`)
    // await fetch(`https://${process.env.VERCEL_URL}/api/count`)
    await prisma.spot.count()

    return new NextResponse(
        JSON.stringify({ data: true, message: "Cron Successfully Prewarming." }),
        { status: 200, headers: { "content-type": "application/json" } }
    )

  } catch (e) {
    return InternalServerError(e);
  }
}
