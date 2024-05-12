
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { InternalServerError } from "../../error/server/InternalServer.error";
import { ATListQueryBuilder } from "@/app/_common/builder/ATListQueryBuilder";

type Query = {
    query?: string;
    at_id?: string;
    name?: string;
    area: string;
    offset: string;
    limit: string;
  };

  const prisma = new PrismaClient()
  const atListQueryBuilder = new ATListQueryBuilder()

  // export const revalidate = 0;
  
  
  export async function GET(request: NextRequest) {
    let {query, at_id, name, area, offset, limit} = Object.fromEntries(request.nextUrl.searchParams) as Query;

    try {
        let sqlQuery = atListQueryBuilder.init()
        
        const decoded_area = decodeURIComponent(area)
        sqlQuery.addArea(decoded_area)

        // TODO 서비스 레이어 코드정리
        if(query){
        const decoded_query = decodeURIComponent(query as string).split(",");
        sqlQuery.addQuery(decoded_query)
        }
        if(name){
        const decoded_name = decodeURIComponent(name)
        sqlQuery.addMapName(decoded_name)
        }
        if(at_id){
        sqlQuery.addATID(at_id)
        }


        // 여기까지 count
        const countSql = JSON.parse(JSON.stringify(sqlQuery.build()))

        // 여기서부터 findMany
        sqlQuery.setLimit(Number(limit)).setOffset(Number(offset)).setSelect()
        
        const findManySql = JSON.parse(JSON.stringify(sqlQuery.build()))

        const [count, spots] = await prisma.$transaction([
            prisma.spot.count(countSql as any),
            prisma.spot.findMany(findManySql as any)
        ])

        const result = {
          count,
          list: spots
        }

        return new NextResponse(
        JSON.stringify({ data: result, message: "데이터 조회가 성공적으로 수행되었습니다." }),
        { status: 200, headers: { "content-type": "application/json" } }
    )
  
    } catch (e) {
        console.log(e)
      return InternalServerError(e);
    }
  }
  