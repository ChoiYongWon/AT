import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PresignedUrlBody } from "../../../api/presignedurl/route";
import { atAxios } from "../../axios/atAxios";

export const URL = "/presignedurl";

export const fetcher = (data: PresignedUrlBody) =>
  atAxios.post(`${URL}`, { ...data }).then(({ data }) => data);

export const usePresignedUrl = () =>
  useMutation({
    mutationFn: (data: any) => fetcher(data),
  });

export type usePresignedUrlDTO = {
  data: any;
  message: string;
};
