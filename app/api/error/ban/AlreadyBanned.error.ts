import { NextResponse } from "next/server";

export const AlreadyBannedError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E50000',
      message: "이미 밴되었습니다.",
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
