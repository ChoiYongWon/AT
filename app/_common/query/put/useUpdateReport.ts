import { useMutation } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export const URL = "/report";

export type PutDTO = {
    spot_id: string;
    resolved: boolean
}

export const fetcher = (data: PutDTO) =>
  atAxios.put(`${URL}`, { ...data }).then(({ data }) => data)

export const useUpdateReport = () =>
  useMutation({
    mutationFn: (data: any) => fetcher(data),
  });

export type useUpdateReportResponseDTO = {
  data: any;
  message: string;
};
