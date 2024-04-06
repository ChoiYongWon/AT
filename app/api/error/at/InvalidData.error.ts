import { NextResponse } from "next/server";

export const InvalidDataError = () => {
  return new NextResponse(
    JSON.stringify({
      data: 100,
      message: "데이터가 잘못되었습니다.",
    }),
    { status: 400, headers: { "content-type": "application/json" } }
  );
};
