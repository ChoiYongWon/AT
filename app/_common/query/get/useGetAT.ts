import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atAxios } from "../../axios/atAxios";

type Param = {
  query?: string | null;
  name?: string | null;
  at_id?: string | null;
}

export const URL = "/at/count"

export const fetcher = ({query, name, at_id}: Param) =>{
  return atAxios.get(`${URL}`, {
    params: {
      query,
      name,
      at_id
    }
  }).then(({ data }) => data);
}



export const useGetAT = ({
  query, name, at_id
}: Param, options?: UseQueryOptions | any): any => {
  return useQuery({
    ...options,
    queryKey: [URL, query, name, at_id],
    queryFn: () => fetcher({query, name, at_id}),
    retry: false,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60
  });
};

export type useGetATDTO = {
  data: any;
  message: string;
};
