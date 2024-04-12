import { PostBody } from "@/app/api/map/route";
import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const URL = "/api/map";

const SERVER_ERROR = {
    data: false,
    message: "서버 에러"
}

export const fetcher = (data: PostBody) =>
  axios.post(`${URL}`, { ...data }).then(({ data }) => data).catch((e:any)=>{
    if(e?.response?.data) throw e.response.data
    throw SERVER_ERROR
  });

export const useCreateMap = () =>
  useMutation({
    mutationFn: (data: PostBody) => fetcher(data),
  });

export type useCreateMapResponse = {
  data: any;
  message: string;
};
