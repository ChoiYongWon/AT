import { NextResponse } from "next/server";

export const UnauthorizedError = () => {
  return new NextResponse(
    JSON.stringify({
      data: 40002,
      message: "권한이 없습니다.",
    }),
    { status: 401, headers: { "content-type": "application/json" } }
  );
};
