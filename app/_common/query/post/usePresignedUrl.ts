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

export const fetcher = (data: GetPresignedUrlDTO) =>
  atAxios.post(`${URL}`, { ...data }).then(({ data }) => data)

export const usePresignedUrl = () =>
  useMutation({
    mutationFn: (data: any) => fetcher(data),
  });

export type usePresignedUrlDTO = {
  data: any;
  message: string;
};
