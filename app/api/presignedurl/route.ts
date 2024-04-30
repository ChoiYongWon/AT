import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/_common/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";

export type ImageMetaData = {
  filename: string;
  filesize: number
}

export type PresignedUrlBody = {
  images: ImageMetaData[];
};

const client = new S3Client({
  region: 'ap-northeast-2',
  credentials: fromEnv(),
  // endpoint: "https://s3.a-spot-thur.app/",
  // bucketEndpoint: true
});

export async function POST(req: Request) {
  try {

    const session = await useAuth();
    const body: PresignedUrlBody = await req.json()
    const result: any = {}

    const Conditions: any = [
      ["eq", "$acl", "public-read"], 
      ["eq", "$bucket", process.env.AWS_S3_BUCKET as string], // 버킷
      ["starts-with", "$Content-Type", "image/"], // 이미지 타입만
      ["starts-with", "$key", `user/${session.user.id}/`], // 사용자 폴더에만
    ];
    const Fields = {
      acl: "public-read",
    };
    for(let i=0;i<body.images.length;i++){
      const Key = `user/${session.user.id}/${body.images[i].filename}`
      const { url, fields } = await createPresignedPost(client, {
        Bucket: process.env.AWS_S3_BUCKET as string,
        Key,
        Conditions,
        Fields,
        Expires: 60 * 5, // 각 만료 5분
      });

      result[body.images[i].filename] = {
        url, fields
      }
    }

    return new NextResponse(
        JSON.stringify({ data: result, message: "presigned url이 성공적으로 생성되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    )

  } catch (e) {
    console.log(e)
    return InternalServerError(e);
  }
}
