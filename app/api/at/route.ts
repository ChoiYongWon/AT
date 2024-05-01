import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/_common/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { SpotDuplicatedError } from "../error/at/SpotDuplicated.error";
import { InvalidDataError } from "../error/at/InvalidData.error";
import { S3Client, DeleteObjectsCommand, DeleteObjectsRequest } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";
import { UnauthorizedError } from "../error/auth/Unauthorized.error";

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
  const {id} = Object.fromEntries(request.nextUrl.searchParams) as Query;

  try {
    // const session = await useAuth();
    
    const result = await prisma.spot.findUnique({
      select: {
        id: true,
        title: true,
        address: true,
        categories: {
          select: {
            name: true
          }
        },
        map: {
          select: {
            id: true,
            name: true
          }
        },
        user: {
          select: {
            at_id: true,
            id: true
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
    await prisma.spot.update({
      where:{
        id
      },
      data: {
        view_count: {
          increment: 1
        }
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
  id: string;
  mapId: string;
  imagesUrl: string[];
  category: string[];
  name: string;
  address: string;
  detail: string;
  deletedImage: string[];
}

//at 수정
export async function PUT(request: NextRequest) {
  try {

    const session = await useAuth();
    const body: PutBody = await request.json()

    const prevSpot = await prisma.spot.findUnique({
      where: {id: body.id},
      select: {
        userId: true, 
        address: true
      }
    })

    if(prevSpot?.userId != session.user.id) return UnauthorizedError()

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
        AND: [
          {
            address: body.address
          },
          {
            address: {
              not: prevSpot?.address
            }
          }
        ]
        
      }
    })
    // spot이 존재하는데 spot 주소가 동일하지 않을 시
    if(spot !== null) return SpotDuplicatedError()

    const result =  await prisma.$transaction(async (tx) => {

      // db내에 spotId와 관련된 모든 이미지 제거
      await tx.image.deleteMany({
        where: {
          spotId: body.id
        },
      })

      // db내에 spotId와 관련된 모든 카테고리 제거
      await tx.category.deleteMany({
        where: {
          spotId: body.id
        }
      })
      
      // 업데이트
      const updateResponse = await tx.spot.update({
        where: {
          id: body.id,
        },
        data: {
          map: {
            connect: {
              id: body.mapId
            }
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


      if(body.deletedImage.length > 0){
        // s3에 deletedImage에 저장된 이미지 모두 제거
        const imageUrls = body.deletedImage.map(image=>{
          const Key = `user/${session.user.id}/${image}`
          return {
            Key
          }
        })

        const input: DeleteObjectsRequest = { // DeleteObjectsRequest
          Bucket: "a-spot-thur", // required
          Delete: { // Delete
            Objects: [ // ObjectIdentifierList // required
              ...imageUrls
            ],
          },
        };
        const command = new DeleteObjectsCommand(input);
        await client.send(command);
      }
      return updateResponse
    })

    return new NextResponse(
      JSON.stringify({ data: result, message: "AT이 수정되었습니다." }),
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

    const owner = await prisma.spot.findUnique({
      where: {id: body.id},
      select: {userId: true}
    })

    if(owner?.userId != session.user.id) return UnauthorizedError()

    const result =  await prisma.$transaction(async (tx) => {

      const deleteResponse = await tx.spot.delete({
        where: {
          id: body.id
        },
        select: {
          images: {
            select: {
              url: true
            }
          }
        }
      })

      const imageUrls = deleteResponse.images.map(image=>{
        const Key = `user/${image.url.split("/").at(-2)}/${image.url.split("/").at(-1)}`
        return {
          Key
        }
      })

      const input: DeleteObjectsRequest = { // DeleteObjectsRequest
        Bucket: "a-spot-thur", // required
        Delete: { // Delete
          Objects: [ // ObjectIdentifierList // required
            ...imageUrls
          ],
        },
      };
      const command = new DeleteObjectsCommand(input);
      const response = await client.send(command);

      return response
    })

    return new NextResponse(
      JSON.stringify({ data: true, message: "데이터가 성공적으로 삭제되었습니다." }),
    { status: 200, headers: { "content-type": "application/json" } }
  )

  } catch (e) {
    return InternalServerError(e);
  }
}