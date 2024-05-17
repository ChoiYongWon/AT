import { NextResponse } from "next/server";

export type BanDataType = {
    reason: string
    expire_at: Date
    day: number
}

export const BannedError = (data: BanDataType) => {
  return new NextResponse(
    JSON.stringify({
      status: 'E10003',
      message: "사용이 제한된 사용자입니다.",
      data
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
