import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/_common/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { MapDuplicatedError } from "../error/map/MapDuplicated.error";
import { InvalidMapNameError } from "../error/map/InvalidMapName.error";
import { fromEnv } from "@aws-sdk/credential-providers";
import { S3Client, DeleteObjectsCommand, DeleteObjectsRequest } from "@aws-sdk/client-s3";
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

// type DeleteBody = {
//   id: string
// }

// const client = new S3Client({
//   region: 'ap-northeast-2',
//   credentials: fromEnv(),
//   // endpoint: "https://s3.a-spot-thur.app/",
//   // bucketEndpoint: true
// });

// export async function DELETE(request: NextRequest) {
//   try {
//     const session = await useAuth();
//     const body: DeleteBody = await request.json()

//     const owner = await prisma.spot.findUnique({
//       where: {id: body.id},
//       select: {userId: true}
//     })

//     if(owner?.userId != session.user.id) return UnauthorizedError()

//     const result =  await prisma.$transaction(async (tx) => {

//       const deleteResponse = await tx.spot.delete({
//         where: {
//           id: body.id
//         },
//         select: {
//           images: {
//             select: {
//               url: true
//             }
//           }
//         }
//       })

//       const imageUrls = deleteResponse.images.map(image=>{
//         const Key = `user/${image.url.split("/").at(-2)}/${image.url.split("/").at(-1)}`
//         return {
//           Key
//         }
//       })

//       const input: DeleteObjectsRequest = { // DeleteObjectsRequest
//         Bucket: "a-spot-thur", // required
//         Delete: { // Delete
//           Objects: [ // ObjectIdentifierList // required
//             ...imageUrls
//           ],
//         },
//       };
//       const command = new DeleteObjectsCommand(input);
//       const response = await client.send(command);

//       return response
//     })

//     return new NextResponse(
//       JSON.stringify({ data: true, message: "데이터가 성공적으로 삭제되었습니다." }),
//     { status: 200, headers: { "content-type": "application/json" } }
//   )

//   } catch (e) {
//     return InternalServerError(e);
//   }
// }