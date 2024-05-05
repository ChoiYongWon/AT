import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export const URL = "/map/aggregate"

export type GetAggregatedMapData = {
  id: string
  name: string
  _count: {
    spots: number
  }
  view: number
}

export type GetAggregatedMapDTO = {
  data: GetAggregatedMapData[];
  message: string;
};


export const fetcher = () =>
  atAxios.get(`${URL}`).then(({ data }) => data)

export const useGetAggregatedMap = (options?: UseQueryOptions | any): any => {
  return useQuery<GetAggregatedMapDTO>({
    ...options,
    queryKey: [URL],
    queryFn: () => fetcher(),
    retry: false,
    staleTime: Infinity,
    gcTime: Infinity
  });
};

