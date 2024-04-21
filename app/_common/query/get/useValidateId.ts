import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const URL = "/user/validate";

export const fetcher = (id: string) =>
  axios.get(`${URL}`, {
    params: {
      at_id: id
    }
  }).then(({ data }) => data);

export const useValidId = (id: string, options: UseQueryOptions | any): any => {
  return useQuery({
    ...options,
    queryKey: [URL, id],
    queryFn: () => fetcher(id),
    retry: false,
  });
};

export type useValidIdDTO = {
  data: any;
  message: string;
};
