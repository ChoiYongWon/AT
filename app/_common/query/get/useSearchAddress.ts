import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export const URL = "/address";

export type GetAddressDTO = {
  query: string
}

export type GetAddressData = {
  name: string;
  address: string;
  category: string;
}

export type GetAddressResponseDTO = {
  data: GetAddressData[];
  message: string;
};

export const fetcher = (query: string) =>
  atAxios.get(`${URL}`,{
    params: {
      query
    }
  }).then(({ data }) => data)

export const useSearchAddress = ({ query }: GetAddressDTO, options: UseQueryOptions | any): any => {
  return useQuery<GetAddressResponseDTO>({
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
