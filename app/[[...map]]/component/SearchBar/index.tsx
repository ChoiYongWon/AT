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
    query: encodeURI([...queryStage].sort().join(",")) || null,
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

  const onQueryInput = (e: any) => {
    // 카테고리 입력시 발동
    const query = e.target.value; 
    
    if (query.length > 0 && query[query.length - 1] == " ") {
      if(!queryList.includes(queryValue) && queryValue.length > 0){
        const newQueryList = [...queryList, queryValue]
        setQueryList([...newQueryList])
      }
      setQuery("")
     
    } else onQueryChange(e);
  };

  // 엔터를 통해 닫으면 onQueryBlur, onSearch 둘다 실행
  // 그냥 blur를 통해 닫으면 onQueryBlur만 실행

  const onQueryBlur = () => {

    // onSearch에서 바꾸는 state를 추적하기 위해 prev 사용 (항상 최신 state가 아니므로 중복 가능성 있음)
    setQueryStage((prev)=>{
      const duplicateless = new Set([...prev, ...queryList])
      const newArray = Array.from(duplicateless)
      return newArray
    })
  }

  const onSearch = () => {
    let additionalQuery: string[] = []
    
    if(!queryList.includes(queryValue) && queryValue.length > 0){
      additionalQuery = [...queryList, queryValue]
      setQueryList([...queryList, queryValue])
        // onQueryBlur에서 바꾸는 state를 추적하기 위해 prev 사용 (해당 상태가 항상 최신이기 때매 중복될일없음)
      setQueryStage((prev)=>[...prev, queryValue])
    }
    setQuery("")

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
