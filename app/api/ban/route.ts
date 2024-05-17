import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { InternalServerError } from "../error/server/InternalServer.error";
import dayjs from 'dayjs';
import { AlreadyBannedError } from "../error/ban/AlreadyBanned.error";


export type PostBody = {
  email: string
  day: number
  reason: string
}

const prisma = new PrismaClient()


export async function POST(request: NextRequest) {
  try {
    const body: PostBody = await request.json()

    const exist = await prisma.ban.findFirst({
        where: {
            email: body.email,
        },
        orderBy: {
          expire_at: 'desc' // 밴 만료일이 가장 큰거
        }
    })
    if(exist && exist.expire_at.getTime() > Date.now()) return AlreadyBannedError()
    
    const expire_at = dayjs().add(Number(body.day), 'day').format()

    const result = await prisma.ban.create({
        data: {
            email: body.email,
            reason: body.reason,
            expire_at,
            day: Number(body.day)
        }
    })
    
    return new NextResponse(
      JSON.stringify({ data: result, message: "벤 완료." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    console.log(e)
    return InternalServerError(e);
  }
}