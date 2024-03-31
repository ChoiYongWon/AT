import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/app/util/useAuth";
import { InternalServerError } from "../error/server/InternalServer.error";

type Query = {
  query: string;
};

export async function GET(request: NextRequest) {
  try {
    const session = useAuth();
    const query = Object.fromEntries(request.nextUrl.searchParams) as Query;
    // const decoded_query = decodeURIComponent(query.query);
    var api_url = 'https://openapi.naver.com/v1/search/local.json?display=5&query=' + query.query;
    const res = await fetch(`${api_url}`, {
        headers: {
        'Content-Type': 'application/json',
        'X-Naver-Client-Id':process.env.NAVER_SEARCH_ID, 'X-Naver-Client-Secret': process.env.NAVER_SEARCH_SECRET
        } as any,
    })

    if(res.ok) {
        const data = await res.json()
        const selectedData = [...data.items].map(item=>{
            // 특수 문자 및 태그 제거
            const taglessTitle = item.title.replace(/<[^>]*>?/g, "").replace(/&[^;]+;/g, "")
            return {
                name : taglessTitle,
                address: item.address,
                category: item.category
            }
        })

        return new NextResponse(
            JSON.stringify({ data: selectedData, message: "데이터 조회가 성공적으로 수행되었습니다." }),
          { status: 200, headers: { "content-type": "application/json" } }
        )
    }else throw {data : await res.json()}

  } catch (e) {
    return InternalServerError(e);
  }
}
