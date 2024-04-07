import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const URL = "/api/presignedurl/";

export const fetcher = (presignedUrl: string, form: any, type: string) =>{

  return axios.post(`${presignedUrl}`, form, {
  }).then(({ data }) => data);
}

export const useUploadImageToS3 = () =>
  useMutation({
    mutationFn: ({presignedUrl, form, type}: any) => fetcher(presignedUrl, form, type),
  });

export type usePresignedUrlDTO = {
  data: any;
  message: string;
};
