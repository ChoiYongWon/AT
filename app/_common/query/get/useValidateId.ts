import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atAxios } from "../../axios/atAxios";

type GetValidIdDTO = {
  at_id: string
}

export type GetValidIData = boolean

export type GetValidIdResponseDTO = {
  data: GetValidIData;
  message: string;
};

export const URL = "/user/validate";

export const fetcher = ({ at_id }: GetValidIdDTO) =>
  atAxios.get(`${URL}`, {
    params: {
      at_id
    }
  }).then(({ data }) => data);

export const useValidId = (data: GetValidIdDTO, options: UseQueryOptions | any): any => {
  return useQuery<GetValidIdResponseDTO>({
    ...options,
    queryKey: [URL, data?.at_id],
    queryFn: () => fetcher(data),
    retry: false,
  });
};

export type useValidIdDTO = {
  data: any;
  message: string;
};
