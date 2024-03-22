import { NextResponse } from "next/server";

export const InvalidATIDError = () => {
  return new NextResponse(
    JSON.stringify({
      data: false,
      message:
        "닉네임은 영문자, 숫자 , _(언더스코어)로만 3-30자 이내로 구성되어야합니다.",
    }),
    { status: 400, headers: { "content-type": "application/json" } }
  );
};
