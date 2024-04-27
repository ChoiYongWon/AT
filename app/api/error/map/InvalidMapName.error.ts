import { NextResponse } from "next/server";

export const InvalidMapNameError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E20000',
      message: "한글, 숫자, 영어 6자 내로 구성해주세요.",
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
