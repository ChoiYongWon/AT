export const maxDuration = 60;


import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { InvalidATIDError } from "../error/user/InvalidATID.error";
import { useAuth } from "@/app/_common/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { UnavailableATIDError } from "../error/user/UnavailableATID.error";
import { DuplicatedATIDError } from "../error/user/DuplicatedATID.error";
import { ROUTES } from "@/app/_common/util/constant";
import { fromEnv } from "@aws-sdk/credential-providers";
import { S3Client, DeleteObjectsCommand, DeleteObjectsRequest } from "@aws-sdk/client-s3";
import { UnauthorizedError } from "../error/auth/Unauthorized.error";


type Query = {
  at_id: string;
};

const prisma = new PrismaClient();


//at_id 변경 목적
export async function PUT(request: NextRequest) {
  try {
    const session = await useAuth();
    const regexp = /^[a-z0-9_\.]{3,20}$/g;
    const body = (await request.json()) as Query;

    // body 검증
    if (!body.at_id) return InvalidATIDError();

    // route랑 id랑 겹치는지 확인
    if (ROUTES.includes(body.at_id)) return UnavailableATIDError();

    // AT_ID 규칙 검증
    if (!regexp.test(body.at_id)) return InvalidATIDError();

    // AT_ID 중복성 검증
    const isUserExist = await prisma.user.findUnique({ where: { ...body } });
    if (isUserExist) return DuplicatedATIDError();

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email as string },
      data: {
        ...body,
      },
      select: {
        id: true,
        at_id: true
      }
    });
    return new NextResponse(
      JSON.stringify({ data: updatedUser, message: "정보가 수정되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    return InternalServerError(e);
  }
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

    await prisma.$transaction(async (tx) => {

      const deleteResponse = await tx.user.delete({
        where: {
          id: session.user.id
        },
        select: {
          images: {
            select: {
              key: true
            }
          }
        }
      })

      const promises = []
      const imageUrls = deleteResponse.images.map(image=>({Key: image.key}))

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