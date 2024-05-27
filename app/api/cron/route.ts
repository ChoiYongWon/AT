export const dynamic = 'force-dynamic'

import { NextResponse } from "next/server";
import { InternalServerError } from "../error/server/InternalServer.error";

export async function GET() {
  try {
    
    return new NextResponse(
        JSON.stringify({ data: true, message: "Cron Successfully Prewarming." }),
        { status: 200, headers: { "content-type": "application/json" } }
    )

  } catch (e) {
    return InternalServerError(e);
  }
}
