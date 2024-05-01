import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/_common/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { MapDuplicatedError } from "../error/map/MapDuplicated.error";
import { InvalidMapNameError } from "../error/map/InvalidMapName.error";
import { UnauthorizedError } from "../error/auth/Unauthorized.error";

export type PostBody = {
  name: string
}

const prisma = new PrismaClient()


export async function POST(request: NextRequest) {
  try {

    const session = await useAuth();
    const body: PostBody = await request.json()
    const regexp = /^[가-힣a-zA-Z0-9]{1,6}$/g

    const map = await prisma.map.findFirst({
        where:{
            name: body.name,
            userId: session.user.id
        }
    })

    // 지도명 중복
    if(map !== null) return MapDuplicatedError()

    // 지도명 검사
    if(!regexp.test(body.name)) return InvalidMapNameError()

    const result = await prisma.map.create({
        data: {
            name: body.name,
            user: {
                connect: {
                    id: session.user.id
                }
            }
        }
    })
   
    return new NextResponse(
      JSON.stringify({ data: result, message: "MAP이 등록되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    console.log(e)
    return InternalServerError(e);
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  try {
    const session = await useAuth();
    const userId = searchParams.get('userId')

    if(session.user.id != userId) return UnauthorizedError()

    const result = await prisma.map.findMany({
      select: {
        id: true,
        name: true
      },
      where: {
        userId
      }
  })


    return new NextResponse(
      JSON.stringify({ data: result, message: "MAP 조회가 성공적으로 수행되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    console.log(e)
    return InternalServerError(e);
  }
}
