import { useMutation } from "@tanstack/react-query";
import { atAxios } from "../../axios/atAxios";

export const URL = "/map";

export type DeleteMapDTO = {
  id: string
}

export type DeleteMapResponseDTO = {
  data: any;
  message: string;
};


const SERVER_ERROR = {
    data: false,
    message: "서버 에러"
}

export const fetcher = (data: DeleteMapDTO) =>
  atAxios.delete(`${URL}`, { data }).then(({ data }) => data).catch((e:any)=>{
    if(e?.data != undefined) throw e.data
    throw SERVER_ERROR
  });

export const useDeleteMap = () =>
  useMutation({
    mutationFn: (data: DeleteMapDTO) => fetcher(data),
  });

