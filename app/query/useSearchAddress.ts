import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const QUERY_KEY = "/api/address";

export const fetcher = (query: string) =>
  axios.get(`${QUERY_KEY}?query=${query}`).then(({ data }) => data);

export const useSearchAddress = (query: string, options: UseQueryOptions | any): any => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEY, query],
    queryFn: () => fetcher(query),
    retry: false,
  });
};

export type useSearchAddressDTO = {
  data: any;
  message: string;
};
