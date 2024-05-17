import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/_common/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { AlreadyReportedError } from "../error/report/AlreadyReported.error";


type ReportType = "BAD_WORD" | "COMMERCIAL_USE" | "SEXUAL" | "UNRELATED"

export type PostBody = {
  at_id: string
  type: ReportType
  etc?: string
}

const prisma = new PrismaClient()


export async function POST(request: NextRequest) {
  try {

    const session = await useAuth();
    const body: PostBody = await request.json()

    const exist = await prisma.report.findFirst({
        where: {
            userId: session.user.id,
            spotId: body.at_id,
        }
    })

    if(exist) return AlreadyReportedError()

    const result = await prisma.report.create({
        data: {
            userId: session.user.id as string,
            spotId: body.at_id,
            type: body.type,
            etc: body.etc
        }
    })
    
    return new NextResponse(
      JSON.stringify({ data: result, message: "신고 완료." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    console.log(e)
    return InternalServerError(e);
  }
}

