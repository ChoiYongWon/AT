import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PostBody } from "../../../api/at/route";
import { atAxios } from "../../axios/atAxios";

export const URL = "/at";

const SERVER_ERROR = {
  data: false,
  message: "서버 에러"
}

export const fetcher = (body: PostBody) =>{

  return atAxios.post(`${URL}`, body, {
  }).then(({ data }) => data).catch((e:any)=>{
    if(e?.data) throw e.data
    throw SERVER_ERROR
  });;
}

export const useUploadAT = () =>
  useMutation({
    mutationFn: (body: PostBody) => fetcher(body),
  });

export type usePresignedUrlDTO = {
  data: any;
  message: string;
};
