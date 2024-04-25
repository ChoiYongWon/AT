import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atAxios } from "../../axios/atAxios";

export type GetATDTO = {
  query?: string | null;
  name?: string | null;
  at_id?: string | null;
}

export type GetATData = {
  _count: {
    primary_address: number
  }
  primary_address: string
}

export type GetATResponseDTO = {
  data: GetATData[];
  message: string;
};


export const URL = "/at/count"

export const fetcher = ({query, name, at_id}: GetATDTO) =>{
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
}: GetATDTO, options?: UseQueryOptions | any): any => {
  return useQuery<GetATResponseDTO>({
    ...options,
    queryKey: [URL, query, name, at_id],
    queryFn: () => fetcher({query, name, at_id}),
    retry: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5
  });
};

