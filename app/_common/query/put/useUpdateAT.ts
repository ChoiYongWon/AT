import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atAxios } from "../../axios/atAxios";

export const URL = "/at";

export type PutATDTO = {
    id: string;
    mapId: string;
    key: string[];
    category: string[];
    name: string;
    address: string;
    detail: string;
    deletedImage: string[];
}

export const fetcher = (data: PutATDTO) =>
  atAxios.put(`${URL}`, { ...data }).then(({ data }) => data)

export const useUpdateAT = () =>
  useMutation({
    mutationFn: (data: any) => fetcher(data),
  });

export type useUpdateATResponseDTO = {
  data: any;
  message: string;
};
