import { NextResponse } from "next/server";

export const DuplicatedATIDError = () => {
  return new NextResponse(
    JSON.stringify({
      data: false,
      message: "해당 이름은 다른 유저가 사용하고있습니다.",
    }),
    { status: 400, headers: { "content-type": "application/json" } }
  );
};
