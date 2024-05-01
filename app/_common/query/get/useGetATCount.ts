import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export type GetATCountDTO = {
  query?: string | null;
  name?: string | null;
  at_id?: string | null;
}

export type GetATCountData = {
  _count: {
    primary_address: number
  }
  primary_address: string
}

export type GetATCountResponseDTO = {
  data: GetATCountData[];
  message: string;
};


export const URL = "/at/count"

export const fetcher = ({query, name, at_id}: GetATCountDTO) =>{
  return atAxios.get(`${URL}`, {
    params: {
      query,
      name,
      at_id
    }
  }).then(({ data }) => data);
}


export const useGetATCount = ({
  query, name, at_id
}: GetATCountDTO, options?: UseQueryOptions | any): any => {
  return useQuery<GetATCountResponseDTO>({
    ...options,
    queryKey: [URL, query, name, at_id],
    queryFn: () => fetcher({query, name, at_id}),
    retry: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5
  });
};

