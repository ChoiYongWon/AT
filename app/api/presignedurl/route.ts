import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";

type Query = {
  query: string;
};

export async function POST() {
  try {
    // const session = useAuth();

    // const client = new S3Client({
    //     region: 'ap-northeast-2',
    //     credentials: fromEnv(),
    // });

    // 업로드 조건
    // const Conditions = [{ acl: "bucket-owner-full-control" }, { bucket: "a-spot-thur" }, ["starts-with", "$key", "user/eric/"]];
    // const Conditions = [{ acl: "public-read" }];

    // const Bucket = "a-spot-thur";
    // const Key = "test.png";
    // const Fields = {
    //     acl: "public-read",
    // };
    // const { url, fields } = await createPresignedPost(client, {
    //     Bucket,
    //     Key,
    //     Conditions,
    //     Fields,
    //     Expires: 600, //Seconds before the presigned post expires. 3600 by default.
    // });

    // return new NextResponse(
    //     JSON.stringify({ data: {
    //         presigned_url : url,
    //         fields
    //     }, message: "presigned url이 성공적으로 생성되었습니다." }),
    //   { status: 200, headers: { "content-type": "application/json" } }
    // )
    return new NextResponse(
        JSON.stringify({ data: "테스트 중", message: "presigned url이 성공적으로 생성되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    )
  } catch (e) {
    return InternalServerError(e);
  }
}
