import { NextResponse } from "next/server";

export const InvalidDataError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E10000',
      message: "데이터가 잘못되었습니다.",
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
