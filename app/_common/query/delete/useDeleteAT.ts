import { useMutation } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export const URL = "/at";

export type DeleteATDTO = {
  id: string
}

export type DeleteATResponseDTO = {
  data: any;
  message: string;
};


const SERVER_ERROR = {
    data: false,
    message: "서버 에러"
}

export const fetcher = (data: DeleteATDTO) =>
  atAxios.delete(`${URL}`, { data }).then(({ data }) => data).catch((e:any)=>{
    if(e?.data != undefined) throw e.data
    throw SERVER_ERROR
  });

export const useDeleteAT = () =>
  useMutation({
    mutationFn: (data: DeleteATDTO) => fetcher(data),
  });

