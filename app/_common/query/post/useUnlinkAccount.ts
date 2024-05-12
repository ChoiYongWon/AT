import { PostBody } from "@/app/api/map/route";
import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atAxios } from "../../axios/atAxios";

export const URL = "/auth/unlink";

export type UnlinkAccountDTO = {
  data: any;
  message: string;
};


const SERVER_ERROR = {
    data: false,
    message: "서버 에러"
}

export const fetcher = () =>
  atAxios.post(`${URL}`).then(({ data }) => data)

export const useUnlinkAccount = () =>
  useMutation({
    mutationFn: () => fetcher(),
  });

