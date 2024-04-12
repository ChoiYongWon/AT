import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const URL = "api/map"
export const GETALLMAP_QUERY_KEY = `${URL}[GET]`;

export const fetcher = (query: string) =>
  axios.get(`${URL}?userId=${query}`).then(({ data }) => data);

export const useGetAllMap = (query: string, options?: UseQueryOptions | any): any => {
  return useQuery({
    ...options,
    queryKey: [GETALLMAP_QUERY_KEY, query],
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
