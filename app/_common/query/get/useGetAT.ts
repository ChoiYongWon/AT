import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export type GetATDTO = {
  id: string;
}

export type GetATData = {
    id: string,
    title: string;
    address: string;
    categories: {
        name: string;
    }[],
    map: {
        id: string;
        name: string;
    },
    user: {
        at_id: string;
        id: string;
    },
    images: {
        originUrl: string;
        compressUrl: string;
        sequence: number;
    }[],
    body: string;
    created_at: string;
    view_count: number;
}

export type GetATResponseDTO = {
  data: GetATData[];
  message: string;
};


export const URL = "/at"

export const fetcher = ({id}: GetATDTO) =>{
  return atAxios.get(`${URL}`, {
    params: {
        id
    }
  }).then(({ data }) => data);
}



export const useGetAT = ({
  id
}: GetATDTO, options?: UseQueryOptions | any): any => {
  return useQuery<GetATResponseDTO>({
    ...options,
    queryKey: [URL, id],
    queryFn: () => fetcher({id}),
    retry: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5
  });
};

