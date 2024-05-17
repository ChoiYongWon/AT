import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atAxios } from "../../axios/atAxios";
import { PostBody } from "@/app/api/report/route";

export const URL = "/report";

const SERVER_ERROR = {
  data: false,
  message: "서버 에러"
}

export const fetcher = (body: PostBody) =>{

  return atAxios.post(`${URL}`, body, {
  }).then(({ data }) => data)
}

export const useReportAT = () =>
  useMutation({
    mutationFn: (body: PostBody) => fetcher(body),
  });

export type useReportATDTO = {
  data: any;
  message: string;
};
