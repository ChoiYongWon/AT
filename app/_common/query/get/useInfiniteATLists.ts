import { useInfiniteQuery } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export type GetATListDTO = {
  query?: string | null;
  name?: string | null;
  at_id?: string | null;
  area: string;
  limit: number;
  offset?: number;
}

export type GetATListData = {
  count: number,
  list: {
    id: string,
    title: string,
    address: string,
    user: {
      at_id: string
    },
    map: {
      name: string
    },
    images: {
      url: string,
      sequence: number
    }[],
    categories: {
      name: string
    }[]
  }[]
}

export type getATListResponseDTO = {
  data: GetATListData;
  message: string;
};

export const URL = "/at/list"

export const fetcher = ({query, name, at_id, area, limit, offset}: GetATListDTO) =>{
  return atAxios.get(`${URL}`, {
    params: {
      query,
      name,
      at_id,
      limit,
      offset,
      area
    }
  }).then(({ data }) => data)
}

export const useInfiniteATLists = ({query, name, at_id, area, limit}: GetATListDTO) => {

  return useInfiniteQuery<getATListResponseDTO>({
      queryKey: [URL, area, query, name, at_id],
      queryFn: ({pageParam}) => fetcher({query, name, at_id, area, limit, offset: Number(pageParam) * Number(limit)}),
      getNextPageParam:(lastPage, pages)=>{
            const nextPage = pages.length;
            return lastPage.data.list.length < limit ? undefined : nextPage; // 마지막 페이지 데이터가 limit 보다 적으면 이제 그만 불러옴
      },
      initialPageParam: 0,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 5
  })
}
