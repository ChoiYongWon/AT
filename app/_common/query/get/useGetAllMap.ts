import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atAxios } from "../../axios/atAxios";

export const URL = "/map"

export const fetcher = (query: string) =>
  atAxios.get(`${URL}`,{
    params: {
      userId: query
    }
  }).then(({ data }) => data);

export const useGetAllMap = (query: string, options?: UseQueryOptions | any): any => {
  return useQuery({
    ...options,
    queryKey: [URL, query],
    queryFn: () => fetcher(query),
    retry: false,
    staleTime: Infinity,
    gcTime: Infinity
  });
};

export type useSearchAddressDTO = {
  data: any;
  message: string;
};
