import { NextResponse } from "next/server";

export const InvalidMapNameError = () => {
  return new NextResponse(
    JSON.stringify({
      data: false,
      message: "한글, 숫자, 영어 6자 내로 구성해주세요.",
    }),
    { status: 400, headers: { "content-type": "application/json" } }
  );
};
