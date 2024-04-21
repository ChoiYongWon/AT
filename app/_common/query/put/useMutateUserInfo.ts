import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atAxios } from "../../axios/atAxios";

export const URL = "/user/";

export const fetcher = (data: any) =>
  atAxios.put(`${URL}`, { ...data }).then(({ data }) => data);

export const useMutateUserInfo = () =>
  useMutation({
    mutationFn: (data: any) => fetcher(data),
  });

export type useMutateUserInfoDTO = {
  data: any;
  message: string;
};
