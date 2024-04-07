import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PostBody } from "../api/at/route";

export const URL = "/api/at/";

export const fetcher = (body: PostBody) =>{

  return axios.post(`${URL}`, body, {
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
