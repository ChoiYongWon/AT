import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { InvalidATIDError } from "../../error/user/InvalidATIDError";
import { DuplicatedATIDError } from "../../error/user/DuplicatedATIDError";
import { auth } from "@/auth";
import { useAuth } from "@/app/util/useAuth";

type Query = {
  at_id: string;
};

export async function GET(request: NextRequest) {
  try {
    const session = useAuth();
    const query = Object.fromEntries(request.nextUrl.searchParams) as Query;
    const regexp = /^[a-zA-Z0-9_\.]{3,30}$/g;
    const decoded_at_id = decodeURIComponent(query.at_id);

    // AT_ID 규칙 검증
    if (!regexp.test(decoded_at_id)) throw InvalidATIDError();

    // AT_ID 중복성 검증
    const prisma = new PrismaClient();
    const isUserExist = await prisma.user.findUnique({ where: { ...query } });
    if (isUserExist) throw DuplicatedATIDError();

    // 통과
    return new NextResponse(
      JSON.stringify({ data: true, message: "해당 이름은 사용해도 좋습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    return e;
  }
}
