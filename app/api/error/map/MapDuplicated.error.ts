import { NextResponse } from "next/server";

export const MapDuplicatedError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E20001',
      message: "이미 존재합니다.",
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
