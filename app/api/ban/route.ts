import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { InternalServerError } from "../error/server/InternalServer.error";
import dayjs from 'dayjs';
import { AlreadyBannedError } from "../error/ban/AlreadyBanned.error";


export type PostBody = {
  email: string
  reason: string
}

const prisma = new PrismaClient()

const banDay = [1, 3, 7, 30, 365]


export async function POST(request: NextRequest) {
  try {
    const body: PostBody = await request.json()

    const exist = await prisma.ban.findMany({
        where: {
            email: body.email,
        },
        orderBy: {
          expire_at: 'desc' // 밴 만료일이 가장 큰거
        }
    })
    if(exist.length && exist[0].expire_at.getTime() > Date.now()) return AlreadyBannedError()
    
    const day = banDay[exist.length > banDay.length-1 ? banDay.length - 1 : exist.length]
    const expire_at = dayjs().add(Number(day), 'day').format()

    const result = await prisma.ban.create({
        data: {
            email: body.email,
            reason: body.reason,
            expire_at,
            day
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