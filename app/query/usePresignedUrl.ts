import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PresignedUrlBody } from "../api/presignedurl/route";

export const URL = "/api/presignedurl/";
export const QUERY_KEY = `${URL}/[post]`;

export const fetcher = (data: PresignedUrlBody) =>
  axios.post(`${URL}`, { ...data }).then(({ data }) => data);

export const usePresignedUrl = () =>
  useMutation({
    mutationFn: (data: any) => fetcher(data),
  });

export type usePresignedUrlDTO = {
  data: any;
  message: string;
};
