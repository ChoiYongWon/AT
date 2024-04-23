import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { InternalServerError } from "../../error/server/InternalServer.error";
import { ATQueryBuilder } from "@/app/_common/builder/ATQueryBuilder";

type Query = {
    query?: string;
    at_id?: string;
    name?: string;
  };
  
const prisma = new PrismaClient()
const atQueryBuilder = new ATQueryBuilder()
  
  export async function GET(request: NextRequest) {
    try {
      // const session = await useAuth();
      const {query, at_id, name} = Object.fromEntries(request.nextUrl.searchParams) as Query;
      let sqlQuery = atQueryBuilder.init()
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

      sqlQuery = sqlQuery.build()
  
      const result = await prisma.spot.groupBy(sqlQuery as any)
  
      return new NextResponse(
        JSON.stringify({ data: result, message: "데이터 조회가 성공적으로 수행되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    )
  
    } catch (e) {
      return InternalServerError(e);
    }
  }
  