import { NextResponse } from "next/server";

export const UnlinkUnavailableError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E00001',
      message: "탈퇴 에러. 재로그인 후 다시 시도해보세요!",
    }),
    { status: 500, headers: { "content-type": "application/json" } }
  );
};
