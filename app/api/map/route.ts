export const maxDuration = 60;

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/_common/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { MapDuplicatedError } from "../error/map/MapDuplicated.error";
import { InvalidMapNameError } from "../error/map/InvalidMapName.error";
import { fromEnv } from "@aws-sdk/credential-providers";
import { S3Client, DeleteObjectsCommand, DeleteObjectsRequest } from "@aws-sdk/client-s3";
import { UnauthorizedError } from "../error/auth/Unauthorized.error";
import { MapLimitError } from "../error/map/MapLimit.error";


export type PostBody = {
  name: string
}

const prisma = new PrismaClient()


export async function POST(request: NextRequest) {
  try {

    const session = await useAuth();
    const body: PostBody = await request.json()
    const regexp = /^[가-힣a-zA-Z0-9]{1,6}$/g

    const curMap = await prisma.map.findFirst({
        where:{
            name: body.name,
            userId: session.user.id
        }
    })

    // 지도명 중복
    if(curMap !== null) return MapDuplicatedError()

    const ownedMap = await prisma.map.findMany({
        where:{
            userId: session.user.id
        }
    })

    // 지도 갯수
    // TODO 멤버십 조건
    if(ownedMap.length == 4) return MapLimitError()
    

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
  // const searchParams = request.nextUrl.searchParams

  try {
    const session = await useAuth();
    // const userId = searchParams.get('userId')

    // if(session.user.id != userId) return UnauthorizedError()

    const result = await prisma.map.findMany({
      select: {
        id: true,
        name: true
      },
      where: {
        userId: session.user.id
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

type DeleteBody = {
  id: string
}

const client = new S3Client({
  region: 'ap-northeast-2',
  credentials: fromEnv(),
  // endpoint: "https://s3.a-spot-thur.app/",
  // bucketEndpoint: true
});

export async function DELETE(request: NextRequest) {
  try {
    const session = await useAuth();
    const body: DeleteBody = await request.json()

    const owner = await prisma.map.findUnique({
      where: {id: body.id, userId: session.user.id},
      select: {userId: true}
    })

    if(!owner) return UnauthorizedError()

    await prisma.$transaction(async (tx) => {

      const deleteResponse = await tx.map.delete({
        where: {
          id: body.id
        },
        select: {
          spots: {
            select: {
              images: {
                select: {
                  key: true
                }
              }
            }
          }
        }
      })

      const promises = []
      const imageUrls = deleteResponse.spots.reduce((acc: any, spot)=>{
        const urls = spot.images.map(image=>({Key: image.key}))
        return [...acc, ...urls]
      }, [])

      for(let i=0;i<Math.ceil(imageUrls.length / 1000);i++){
        const start = 1000 * i
        const end = 1000 * (i+1)
        const currentObjects = imageUrls.slice(start, end)

        const input: DeleteObjectsRequest = { // DeleteObjectsRequest
          Bucket: "a-spot-thur", // required
          Delete: { // Delete
            Objects: [ // ObjectIdentifierList // required
              ...currentObjects

            ],
          },
        };
              
        const command = new DeleteObjectsCommand(input);
        const response = client.send(command);
        promises.push(response)
      
      }

      await Promise.all(promises)
    })

    return new NextResponse(
      JSON.stringify({ data: true, message: "데이터가 성공적으로 삭제되었습니다." }),
    { status: 200, headers: { "content-type": "application/json" } }
  )

  } catch (e) {
    return InternalServerError(e);
  }
}