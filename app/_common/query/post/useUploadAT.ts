import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PostBody } from "../../../api/at/route";
import { atAxios } from "../../axios/atAxios";

export const URL = "/at";

export const fetcher = (body: PostBody) =>{

  return atAxios.post(`${URL}`, body, {
  }).then(({ data }) => data);
}

export const useUploadAT = () =>
  useMutation({
    mutationFn: (body: PostBody) => fetcher(body),
  });

export type usePresignedUrlDTO = {
  data: any;
  message: string;
};
