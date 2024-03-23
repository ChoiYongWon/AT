import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { InvalidATIDError } from "../../error/user/InvalidATID.error";
import { useAuth } from "@/app/util/useAuth";
import { InternalServerError } from "../../error/server/InternalServer.error";
import { UnavailableATIDError } from "../../error/user/UnavailableATID.error";
import { DuplicatedATIDError } from "../../error/user/DuplicatedATID.error";
import { ROUTES } from "@/app/util/constant";

type Query = {
  at_id: string;
};

export async function GET(request: NextRequest) {
  try {
    const session = useAuth();
    const query = Object.fromEntries(request.nextUrl.searchParams) as Query;
    const regexp = /^[a-z0-9_\.]{3,30}$/g;
    const decoded_at_id = decodeURIComponent(query.at_id);

    // AT_ID 규칙 검증
    if (!regexp.test(decoded_at_id)) return InvalidATIDError();

    // route랑 id랑 겹치는지 확인
    if (ROUTES.includes(decoded_at_id)) return UnavailableATIDError();

    // AT_ID 중복성 검증
    const prisma = new PrismaClient();
    const isUserExist = await prisma.user.findUnique({ where: { ...query } });
    if (isUserExist) return DuplicatedATIDError();

    // 통과
    return new NextResponse(
      JSON.stringify({ data: true, message: "해당 이름은 사용해도 좋습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    return InternalServerError(e);
  }
}
