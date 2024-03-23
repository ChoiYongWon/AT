import { NextResponse } from "next/server";

export const UnavailableATIDError = () => {
  return new NextResponse(
    JSON.stringify({
      data: false,
      message: "해당 이름은 사용할 수 없습니다.",
    }),
    { status: 400, headers: { "content-type": "application/json" } }
  );
};
