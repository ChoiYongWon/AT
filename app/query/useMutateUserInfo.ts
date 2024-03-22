import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const URL = "/api/user/";
export const QUERY_KEY = `${URL}/[pu]`;

export const fetcher = (data: any) =>
  axios.put(`${URL}`, { ...data }).then(({ data }) => data);

export const useMutateUserInfo = () =>
  useMutation({
    mutationFn: (data: any) => fetcher(data),
  });

export type useMutateUserInfoDTO = {
  data: any;
  message: string;
};
