import { PostBody } from "@/app/api/map/route";
import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atAxios } from "../../axios/atAxios";

export const URL = "/map";

export type CreateMapDTO = {
  name: string
}

export type CreateMapResponseDTO = {
  data: any;
  message: string;
};


const SERVER_ERROR = {
    data: false,
    message: "서버 에러"
}

export const fetcher = (data: CreateMapDTO) =>
  atAxios.post(`${URL}`, { ...data }).then(({ data }) => data).catch((e:any)=>{
    if(e?.data) throw e.data
    throw SERVER_ERROR
  });

export const useCreateMap = () =>
  useMutation({
    mutationFn: (data: CreateMapDTO) => fetcher(data),
  });

