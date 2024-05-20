import { NextRequest, NextResponse } from "next/server";
import { InternalServerError } from "../error/server/InternalServer.error";

type Query = {
  latitude: string
  longitude: string
};

export async function GET(request: NextRequest) {
  const {latitude, longitude} = Object.fromEntries(request.nextUrl.searchParams) as Query;

  try {
    // const decoded_query = decodeURIComponent(query.query);
    var api_url = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${longitude},${latitude}&output=json`
    const res = await fetch(`${api_url}`, {
        headers: {
        'Content-Type': 'application/json',
        'X-NCP-APIGW-API-KEY-ID':process.env.NAVER_MAP_ID, 
        'X-NCP-APIGW-API-KEY': process.env.NAVER_MAP_SECRET

        } as any,
    })

    if(res.ok) {
        const data = await res.json()
        // const selectedData = [...data.items].map(item=>{
        //     // 특수 문자 및 태그 제거
        //     const taglessTitle = item.title.replace(/<[^>]*>?/g, "").replace(/&[^;]+;/g, "")
        //     return {
        //         name : taglessTitle,
        //         address: item.address,
        //         category: item.category
        //     }
        // })
        const selected_area = data?.results[0]?.region.area3?.name

        return new NextResponse(
            JSON.stringify({ data: selected_area, message: "데이터 조회가 성공적으로 수행되었습니다." }),
          { status: 200, headers: { "content-type": "application/json" } }
        )
    }else throw {data : await res.json()}

  } catch (e) {
    return InternalServerError(e);
  }
}
