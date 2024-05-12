import { NextResponse } from "next/server";

export const UnlinkUnavailableError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E00001',
      message: "탈퇴 에러. 문의해주세요.",
    }),
    { status: 500, headers: { "content-type": "application/json" } }
  );
};
