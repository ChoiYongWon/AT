import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/_common/util/useAuth";
import { InternalServerError } from "../../error/server/InternalServer.error";
import { UnlinkUnavailableError } from "../../error/auth/unlink/UnlinkUnavailable.error";


const prisma = new PrismaClient()

//카카오 탈퇴
export async function POST(request: NextRequest) {
  try {

    const session = await useAuth()

    const account = await prisma.account.findFirst({
        where: {
            userId: session.user.id,
            provider: 'kakao'
        }
    })


    const res = await fetch('https://kapi.kakao.com/v1/user/unlink',{
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${account?.access_token}`,
        'Content-Type': 'application/json'
      }
    })

    if(!res.ok) return UnlinkUnavailableError()

    return new NextResponse(
      JSON.stringify({ data: res, message: "AT이 등록되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    console.log(e)
    return InternalServerError(e);
  }
}

