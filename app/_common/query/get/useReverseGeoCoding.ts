import { DefinedUseQueryResult, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";
import { useState } from "react";

export const URL = "/location";

export type GetReverseGeoCodingDTO = {
  longitude: string
  latitude: string
}

export type GetReverseGeoCodingData = string

export type GetReverseGeoCodingResponseDTO = {
  data: GetReverseGeoCodingData;
  message: string;
};

export const fetcher = (longitude: string, latitude: string) =>
  atAxios.get(`${URL}`,{
    params: {
      longitude, latitude
    }
  }).then(({ data }) => data)

// const useReverseGeoCoding = ({ longitude, latitude }: GetReverseGeoCodingDTO, options?: UseQueryOptions | any): DefinedUseQueryResult<GetReverseGeoCodingResponseDTO> => {
//   return useQuery<GetReverseGeoCodingResponseDTO>({
//     ...options,
//     queryKey: [URL, longitude, latitude],
//     queryFn: () => {
//       console.log(longitude, latitude)
//       return fetcher(longitude, latitude)
//     },
//     retry: false,
//     // enabled: false,
//     refetchOnMount: false,
    
//   });
// };

export const useReverseGeoCoding = ({ longitude, latitude }: GetReverseGeoCodingDTO, options?: UseQueryOptions | any): any => {
  const [enabled, setEnabled] = useState(false)
  return [() => setEnabled(true), useQuery<GetReverseGeoCodingResponseDTO>({
    ...options,
    queryKey: [URL, longitude, latitude],
    queryFn: () => {
      console.log(longitude, latitude)
      return fetcher(longitude, latitude)
    },
    retry: false,
    enabled,
    refetchOnMount: false,
    
  })]
}

export type useSearchAddressDTO = {
  data: any;
  message: string;
};
