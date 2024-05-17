import { DefinedUseQueryResult, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export const URL = "/report"

type ReportType = "BAD_WORD" | "COMMERCIAL_USE" | "SEXUAL" | "UNRELATED"

export type ReportData = {
    id: string
    user: {
      id: string
      at_id: string
      email: string
      name: string
    },
    spot: {
      user: {
        id: string
        at_id: string
        email: string
        name: string
      },
      id: string
    }
    type: ReportType,
    resolved: boolean,
    created_at: Date
  }

export type ReportResponseDTO = {
  data: ReportData[];
  message: string;
};


export const fetcher = (page: number) =>
  atAxios.get(`${URL}`, {params: { page }}).then(({ data }) => data)

export const useReport = (page: number, options?: UseQueryOptions | any): DefinedUseQueryResult<ReportResponseDTO, Error> => {
  return useQuery({
    ...options,
    queryKey: [URL, page],
    queryFn: () => fetcher(page),
    retry: false,
  });
};

