import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const URL = "/address";

export const fetcher = (query: string) =>
  axios.get(`${URL}`,{
    params: {
      query
    }
  }).then(({ data }) => data);

export const useSearchAddress = (query: string, options: UseQueryOptions | any): any => {
  return useQuery({
    ...options,
    queryKey: [URL, query],
    queryFn: () => fetcher(query),
    retry: false,
  });
};

export type useSearchAddressDTO = {
  data: any;
  message: string;
};
