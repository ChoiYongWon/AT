import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export const URL = "/map"

export type GetAllMapDTO = {
  userId: string
}

export type GetAllMapData = {
  id: string
  name: string
}

export type GetAllMapResponseDTO = {
  data: GetAllMapData[];
  message: string;
};


export const fetcher = ({
  userId
}: GetAllMapDTO) =>
  atAxios.get(`${URL}`,{
    params: {
      userId
    }
  }).then(({ data }) => data)

export const useGetAllMap = (data: GetAllMapDTO, options?: UseQueryOptions | any): any => {
  return useQuery<GetAllMapResponseDTO>({
    ...options,
    queryKey: [URL, data?.userId],
    queryFn: () => fetcher(data),
    retry: false,
    staleTime: Infinity,
    gcTime: Infinity
  });
};

