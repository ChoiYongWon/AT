import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/_common/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { MapDuplicatedError } from "../error/map/MapDuplicated.error";

export type PostBody = {
  name: string
}

const prisma = new PrismaClient()

//at 등록
export async function POST(request: NextRequest) {
  try {

    const session = await useAuth();
    const body: PostBody = await request.json()

    const map = await prisma.map.findFirst({
        where:{
            name: body.name,
            userId: session.user.id
        }
    })

    if(map !== null) return MapDuplicatedError()

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
