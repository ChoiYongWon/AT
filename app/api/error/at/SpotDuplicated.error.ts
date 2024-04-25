import { NextResponse } from "next/server";

export const SpotDuplicatedError = () => {
  return new NextResponse(
    JSON.stringify({
      data: 40001,
      message: "이미 존재합니다.",
    }),
    { status: 400, headers: { "content-type": "application/json" } }
  );
};
