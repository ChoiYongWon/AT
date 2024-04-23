import { QueryClient, useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";
import { useEffect } from "react";

type Param = {
  query?: string | null;
  name?: string | null;
  at_id?: string | null;
  area: string;
  limit: number;
  offset?: number;
}

export const URL = "/at/list"

export const fetcher = ({query, name, at_id, area, limit, offset}: Param) =>{
  return atAxios.get(`${URL}`, {
    params: {
      query,
      name,
      at_id,
      limit,
      offset,
      area
    }
  }).then(({ data }) => data);
}

export const useInfiniteATLists = ({query, name, at_id, area, limit}: Param) => {

  return useInfiniteQuery({
      queryKey: [URL, query, name, at_id, area],
      queryFn: ({pageParam}) => fetcher({query, name, at_id, area, limit, offset: Number(pageParam) * Number(limit)}),
      getNextPageParam:(lastPage, pages)=>{
            const nextPage = pages.length;
            return lastPage.data[1].length < limit ? null : nextPage; // 마지막 페이지 데이터가 limit 보다 적으면 이제 그만 불러옴
      },
      initialPageParam: 0,
      staleTime: Infinity,
      gcTime: Infinity
  })
}


export type useGetATDTO = {
data: any;
message: string;
};
