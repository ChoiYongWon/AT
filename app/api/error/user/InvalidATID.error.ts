import { NextResponse } from "next/server";

export const InvalidATIDError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E30001',
      message:
        "닉네임은 영소문자, 숫자 , 특수문자 _  . 으로 3-20자 이내로 구성되어야합니다.",
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
