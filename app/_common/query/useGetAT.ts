import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

type Param = {
  query: string;
  name: string;
  at_id: string;
}

// TODO axios 테스트환경 & 배포환경 baseurl 지정해주기
export const URL = "https://a-spot-thur.app/api/at/count"
export const GETALLMAP_QUERY_KEY = `${URL}[GET]`;

export const fetcher = ({query, name, at_id}: Param) =>{
  const querie_str = query ? `query=${query}` : ''
  const name_str = name ? `name=${name}` : ''
  const at_id_str = at_id ? `at_id=${at_id}` : ''
  const merge = [querie_str, name_str, at_id_str].filter(str=>str != '')
  const query_string = merge.length ? `?${merge.join("&")}` : ''

  return axios.get(`${URL}${query_string}`).then(({ data }) => data);
}



export const useGetAT = ({
  query, name, at_id
}: Param, options?: UseQueryOptions | any): any => {
  return useQuery({
    ...options,
    queryKey: [GETALLMAP_QUERY_KEY, query, name, at_id],
    queryFn: () => fetcher({query, name, at_id}),
    retry: false,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60
  });
};

export type useGetATDTO = {
  data: any;
  message: string;
};
