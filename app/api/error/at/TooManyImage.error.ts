import { NextResponse } from "next/server";

export const TooManyImageError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E10002',
      message: "이미지는 최대 10개(각 최대 20mb)만 등록할 수 있습니다.",
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
