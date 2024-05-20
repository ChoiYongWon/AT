import { NextRequest, NextResponse } from "next/server";
import { UnauthorizedError } from "../../error/auth/Unauthorized.error";
import { PrismaClient } from "@prisma/client";
import { InternalServerError } from "../../error/server/InternalServer.error";
import { auth } from "@/auth";

const prisma = new PrismaClient()


export async function GET(request: NextRequest) {
  
    try {
      const session = await auth();
      if (!session) return UnauthorizedError();

      let result = {

      }
    
      const mapWithCount = await prisma.map.findMany({

        select: {
          id: true,
          name: true,
          _count: {
            select: {
                spots: true
            }
          },
          user: {
            select: {
              at_id: true
            }
          }
        },
        where: {
          userId: session.user.id
        }
    })

    const mapWithView = (await prisma.spot.groupBy({
        by: ["mapId"],
        where: {
            userId: session.user.id
        },
        _sum: {
            view_count: true
        },
    })).reduce((acc: any, cur)=>{
        
        const mapId: string = cur.mapId
        const mapSum = cur._sum.view_count

        acc[mapId] = mapSum

        return acc
    }, {})

    result = mapWithCount.map((map)=>{
        const newMap = {...map, view: 0}
        newMap.view = mapWithView[map.id] || 0
        return newMap
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
  