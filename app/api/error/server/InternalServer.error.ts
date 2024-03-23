import { NextResponse } from "next/server";

export const InternalServerError = (e: any) => {
  return new NextResponse(
    JSON.stringify({
      data: e,
      message: "서버에 알수없는 오류가 발생했습니다",
    }),
    { status: 401, headers: { "content-type": "application/json" } }
  );
};
