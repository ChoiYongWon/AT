"use client";

import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AxiosError } from "axios";
import { useState } from "react";

// const queryClient = new QueryClient();

const QueryProvider = ({ children }: { children: any }) => {

  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을때 데이터를 refetch
          // refetchOnMount: false, // 데이터가 stale 상태이면 컴포넌트가 마운트될 때 refetch 
          // retry: false, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
          
        }
      },
      // queryCache: new QueryCache({
      //   onError: (error, query) => {
          
      //    console.log(error, query)
      //   },
      // }),
    }, ),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
