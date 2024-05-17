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

export type Query = {
  page: string
}

export type ReportResult = {
  id: string,
  user: {
    id: string
    at_id: string
    email: string
    name: string
  },
  spot: {
    user: {
      id: string
      at_id: string
      email: string
      name: string
    }
    id: string
  }
  type: ReportType,
  resolved: boolean,
  created_at: Date
}

export async function GET(request: NextRequest) {
  const {page} = Object.fromEntries(request.nextUrl.searchParams) as Query;

  try {
    
  const result = await prisma.report.findMany({
    where: {
      resolved: false
    },
    select: {
      id: true,
      user: {
        select: {
          id: true,
          at_id: true,
          email: true,
          name: true,
        }
      },
      spot: {
        select: {
          id: true,
          user: {
            select: {
              id: true,
              at_id: true,
              email: true,
              name: true,
            }
          }
        }
      },
      type: true,
      resolved: true,
      created_at: true,
    },
    skip: Number(page),
    take: 10,
    orderBy: {
      created_at: "desc" // 최신순
    }
  })

    return new NextResponse(
      JSON.stringify({ data: result, message: "데이터 조회가 성공적으로 수행되었습니다." }),
    { status: 200, headers: { "content-type": "application/json" } }
  )

  } catch (e) {
    return InternalServerError(e);
  }
}

export type PutBody = {
  spot_id: string
  resolved: boolean
}


export async function PUT(request: NextRequest) {
  try {

    const body: PutBody = await request.json()


    const result = await prisma.report.updateMany({
      where: {
        spotId: body.spot_id // 관련 게시물은 다 처리
      },
      data: {
          resolved: body.resolved
      }
    })
    
    return new NextResponse(
      JSON.stringify({ data: result, message: "업데이트 완료." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    console.log(e)
    return InternalServerError(e);
  }
}
