"use client";

import SearchBarView from "@/app/_common/component/SearchBar";
import { useInput } from "@/app/_common/hook/useInput";
import { useSession } from "next-auth/react";
import { SearchBarLayoutStyle } from "../../style.css";
import { useGetAT } from "@/app/_common/query/get/useGetAT";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atLoadingState, atQueryStageState, atQueryState, atState } from "../../recoil";
import { useEffect, useState } from "react";

type Props = {
  image: string | undefined | null
  className: any
  title : string
  at_id: string
  name: string
}

const SearchBar = ({at_id, name, image, title, className}: Props) => {

  const { value: queryValue, onChange: onQueryChange, setValue: setQuery } = useInput("", { lower: true });
  const [at, setAT] = useRecoilState(atState)
  const setATLoading = useSetRecoilState(atLoadingState)
  const [queryList, setQueryList] = useRecoilState(atQueryState)
  const [queryStage, setQueryStage] = useRecoilState(atQueryStageState)
  const { refetch: getAT,  isLoading: isGetATLoading, isFetching: isGetATFetching, data: atData} = useGetAT({
    query: encodeURI([...queryStage].sort().join(",")),
    name,
    at_id
  })

  useEffect(()=>{
    if(atData?.data){
      setAT(atData.data)
    }
  }, [atData])


  useEffect(()=>{
    setATLoading(isGetATFetching || isGetATLoading)
  }, [isGetATFetching, isGetATLoading])

  // useEffect(()=>{
  //   if(queryStage.length > 0) getAT()
  // }, [queryStage])

  const onQueryInput = (e: any) => {
    // 카테고리 입력시 발동
    const query = e.target.value; 
    
    if (query.length > 0 && query[query.length - 1] == " ") {
      if(!queryList.includes(queryValue) && queryValue.length > 0){
        const newQueryList = [...queryList, queryValue]
        setQueryList(newQueryList)
      }
      setQuery("")
     
    } else onQueryChange(e);
  };

  const onQueryBlur = () => {
    setQueryStage(queryList)
  }

  const onSearch = () => {
    // getAT()
  }
  

  return (
    <SearchBarView
      title={title}
      image={image}
      className={className}
      content={queryValue}
      onBlur={onQueryBlur}
      onContentChange={onQueryInput}
      onSearch={onSearch}
    ></SearchBarView>
  );
};

export default SearchBar;
