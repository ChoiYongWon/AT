import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";

//at 등록
export async function POST(request: NextRequest) {
  try {

    // TODO AT등록 API

    return new NextResponse(
      JSON.stringify({ data: "구현중", message: "AT이 등록되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    return InternalServerError(e);
  }
}
