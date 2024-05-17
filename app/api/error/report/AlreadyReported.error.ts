import { NextResponse } from "next/server";

export const AlreadyReportedError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E40000',
      message: "이미 신고했습니다.",
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
