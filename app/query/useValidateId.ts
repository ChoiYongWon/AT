import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const QUERY_KEY = "/api/user/validate";

export const fetcher = (id: string) =>
  axios.get(`${QUERY_KEY}?at_id=${id}`).then(({ data }) => data);

export const useValidId = (id: string, options: UseQueryOptions | any) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEY, id],
    queryFn: () => fetcher(id),
    retry: false,
  });
};

export type useValidIdDTO = {
  data: any;
  message: string;
};
