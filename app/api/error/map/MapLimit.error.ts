import { NextResponse } from "next/server";

export const MapLimitError = () => {
  return new NextResponse(
    JSON.stringify({
      status: 'E20002',
      message: "지도는 4개이상 만들 수 없습니다.",
    }),
    { status: 419, headers: { "content-type": "application/json" } }
  );
};
