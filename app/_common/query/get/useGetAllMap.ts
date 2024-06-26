import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export const URL = "/map"

export type GetAllMapData = {
  id: string
  name: string,
}

export type GetAllMapResponseDTO = {
  data: GetAllMapData[];
  message: string;
};


export const fetcher = () =>
  atAxios.get(`${URL}`).then(({ data }) => data)

export const useGetAllMap = (options?: UseQueryOptions | any): any => {
  return useQuery<GetAllMapResponseDTO>({
    ...options,
    queryKey: [URL],
    queryFn: () => fetcher(),
    retry: false,
    staleTime: Infinity,
    gcTime: Infinity
  });
};

