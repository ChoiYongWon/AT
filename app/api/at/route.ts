import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/_common/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { SpotDuplicatedError } from "../error/at/SpotDuplicated.error";
import { InvalidDataError } from "../error/at/InvalidData.error";

export type PostBody = {
  mapId: string;
  imagesUrl: string[];
  category: string[];
  name: string;
  address: string;
  detail: string;
}

const prisma = new PrismaClient()

//at 등록
export async function POST(request: NextRequest) {
  try {

    const session = await useAuth();
    const body: PostBody = await request.json()

    // 데이터 검증 로직
    if(body.imagesUrl.length == 0 || body.category.length == 0 || body.name.length == 0 || body.address.length == 0 || body.detail.length == 0) return InvalidDataError()

    // 카테고리 검증
    if(body.category.filter((c=>{
      const regexp = /^[가-힣a-z0-9]{1,10}$/g
      return regexp.test(c)
    })).length != body.category.length ) return InvalidDataError()

    // 중복 방지 로직
    const spot = await prisma.spot.findFirst({
      where: {
        mapId: body.mapId,
        address: body.address
      }
    })

    if(spot !== null) return SpotDuplicatedError()

    const result = await prisma.spot.create({
      data: {
        user: {
          connect: {
            id: session.user.id
          }
        },
        map: {
          connect: {
            id: body.mapId
          }
          // connectOrCreate: {
          //   where: {
          //     id: body.mapId
          //   },
          //   create: {
          //     name: body.mapName,
          //     user: {
          //       connect: {
          //         id: session.user.id
          //       }
          //     }
          //   },
          // }
        },
        images: {
          createMany: {
            data: body.imagesUrl.map((url, i)=>({
              url, 
              sequence: i+1,
              userId: session.user.id as string,
            }))
          }
        },
        categories: {
          createMany: {
            data: [...body.category.map(item=>({
              name: item,
              userId: session.user.id as string
            }))]
          }
        },
        title : body.name,
        address: body.address,
        primary_address: body.address.split(" ")[0],
        secondary_address: body.address.split(" ")[1],
        body: body.detail,
      }
    })
    

    return new NextResponse(
      JSON.stringify({ data: result, message: "AT이 등록되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    console.log(e)
    return InternalServerError(e);
  }
}

type Query = {
  id: string;
};

export async function GET(request: NextRequest) {
  try {
    // const session = await useAuth();
    const {id} = Object.fromEntries(request.nextUrl.searchParams) as Query;
    
    const result = await prisma.spot.findUnique({
      select: {
        title: true,
        address: true,
        categories: {
          select: {
            name: true
          }
        },
        map: {
          select: {
            name: true
          }
        },
        user: {
          select: {
            at_id: true
          }
        },
        images: {
          select: {
            url: true,
            sequence: true
          }
        },
        body: true,
        created_at: true,
        view_count: true,
      },
      where: {
        id
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