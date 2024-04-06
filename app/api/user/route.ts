import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { InvalidATIDError } from "../error/user/InvalidATID.error";
import { useAuth } from "@/app/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";
import { UnavailableATIDError } from "../error/user/UnavailableATID.error";
import { DuplicatedATIDError } from "../error/user/DuplicatedATID.error";
import { ROUTES } from "@/app/util/constant";

type Query = {
  at_id: string;
};

const prisma = new PrismaClient();


//at_id 변경 목적
export async function PUT(request: NextRequest) {
  try {
    const session = await useAuth();
    const regexp = /^[a-z0-9_\.]{3,30}$/g;
    const body = (await request.json()) as Query;

    // body 검증
    if (!body.at_id) return InvalidATIDError();

    // route랑 id랑 겹치는지 확인
    if (ROUTES.includes(body.at_id)) return UnavailableATIDError();

    // AT_ID 규칙 검증
    if (!regexp.test(body.at_id)) return InvalidATIDError();

    // AT_ID 중복성 검증
    const isUserExist = await prisma.user.findUnique({ where: { ...body } });
    if (isUserExist) return DuplicatedATIDError();

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email as string },
      data: {
        ...body,
      },
    });
    return new NextResponse(
      JSON.stringify({ data: updatedUser, message: "정보가 수정되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    return InternalServerError(e);
  }
}
