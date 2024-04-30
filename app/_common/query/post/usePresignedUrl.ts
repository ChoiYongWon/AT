import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PresignedUrlBody } from "../../../api/presignedurl/route";
import { atAxios } from "../../axios/atAxios";

export const URL = "/presignedurl";

export type ImageMetaData = {
  filename: string;
  filesize: number
}

export type GetPresignedUrlDTO = {
  images: ImageMetaData[];
};

const SERVER_ERROR = {
  data: false,
  message: "서버 에러"
}

export const fetcher = (data: GetPresignedUrlDTO) =>
  atAxios.post(`${URL}`, { ...data }).then(({ data }) => data).catch((e:any)=>{
    if(e?.data) throw e.data
    throw SERVER_ERROR
  });;

export const usePresignedUrl = () =>
  useMutation({
    mutationFn: (data: any) => fetcher(data),
  });

export type usePresignedUrlDTO = {
  data: any;
  message: string;
};
