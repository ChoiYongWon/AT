import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";
import { PostBody } from "@/app/api/ban/route";

export const URL = "/ban";

const SERVER_ERROR = {
  data: false,
  message: "서버 에러"
}

export const fetcher = (body: PostBody) =>{

  return atAxios.post(`${URL}`, body, {
  }).then(({ data }) => data)
}

export const useBan = () =>
  useMutation({
    mutationFn: (body: PostBody) => fetcher(body),
  });

export type useBanATDTO = {
  data: any;
  message: string;
};
