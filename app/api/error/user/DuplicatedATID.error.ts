import { NextResponse } from "next/server";

export const DuplicatedATIDError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E30000',
      message: "해당 이름은 다른 유저가 사용하고있습니다.",
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
