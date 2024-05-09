import { useMutation } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export const URL = "/user";

export type DeleteUserResponseDTO = {
  data: any;
  message: string;
};

const SERVER_ERROR = {
    data: false,
    message: "서버 에러"
}

export const fetcher = () =>
  atAxios.delete(`${URL}`).then(({ data }) => data).catch((e:any)=>{
    if(e?.data != undefined) throw e.data
    throw SERVER_ERROR
  });

export const useDeleteUser = () =>
  useMutation({
    mutationFn: () => fetcher(),
  });

