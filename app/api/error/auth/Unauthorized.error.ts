import { NextResponse } from "next/server";

export const UnauthorizedError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E00000',
      message: "데이터가 잘못되었습니다.",
    }),
    { status: 401, headers: { "content-type": "application/json" } }
  );
};
