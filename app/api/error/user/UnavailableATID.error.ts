import { NextResponse } from "next/server";

export const UnavailableATIDError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E10002',
      message: "해당 닉네임은 사용할 수 없습니다.",
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
