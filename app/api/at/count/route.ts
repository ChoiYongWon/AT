import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { InternalServerError } from "../../error/server/InternalServer.error";

type Query = {
    query?: string;
    at_id?: string;
    name?: string;
  };
  
const prisma = new PrismaClient()
  
  export async function GET(request: NextRequest) {
    try {
      // const session = await useAuth();
      const {query, at_id, name} = Object.fromEntries(request.nextUrl.searchParams) as Query;
      // TODO 서비스 레이어 코드정리
      let orm: any = {
        by: ['primary_address'],
        _count:{
          primary_address: true
        },
        where: {

        }
      }
      if(query){
        const decoded_query = decodeURIComponent(query).split(",");
        orm = {
            ...orm,
            where: {
                categories: {
                    some: {
                        name: {
                            in: decoded_query
                        }
                    }
                }
            },
        }
      }
      if(name){
        const decoded_name = decodeURIComponent(name)
        orm = {
            ...orm,
            where: {
                ...orm.where,
                map: {
                    name: decoded_name
                }
            }
        }
      }
      if(at_id){
        orm = {
            ...orm,
            where: {
                ...orm.where,
                user: {
                    at_id
                },
            }
        }
      }
  
      const result = await prisma.spot.groupBy(orm)
  
      return new NextResponse(
        JSON.stringify({ data: result, message: "데이터 조회가 성공적으로 수행되었습니다." }),
      { status: 200, headers: { "content-type": "application/json" } }
    )
  
    } catch (e) {
      return InternalServerError(e);
    }
  }
  