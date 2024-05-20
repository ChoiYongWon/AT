import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { InternalServerError } from "../../error/server/InternalServer.error";
import { UnlinkUnavailableError } from "../../error/auth/unlink/UnlinkUnavailable.error";
import { getToken } from "next-auth/jwt"
import { auth } from "@/auth";
import { UnauthorizedError } from "../../error/auth/Unauthorized.error";


const prisma = new PrismaClient()

//카카오 탈퇴
export async function POST(request: NextRequest) {
  try {

    const session = await auth();
    if (!session) return UnauthorizedError();
    const token = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET!,
      secureCookie: process.env.NODE_ENV === "production",
      salt: process.env.NODE_ENV === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token",
    })

    const account = await prisma.account.findFirst({
        where: {
            userId: session.user.id,
            provider: 'kakao'
        }
    })


    const res = await fetch('https://kapi.kakao.com/v1/user/unlink',{
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token?.access_token}`,
        'Content-Type': 'application/json'
      }
    })

    if(!res.ok) return UnlinkUnavailableError()

    return new NextResponse(
      JSON.stringify({ data: true, message: "AT 탈퇴가 완료되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (e) {
    console.log(e)
    return InternalServerError(e);
  }
}

