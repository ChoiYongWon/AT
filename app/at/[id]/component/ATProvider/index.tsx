'use client'

import { useGetAT } from "@/app/_common/query/get/useGetAT";
import { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { atDataState, loadingState } from "../../recoil";

type Props = {
    children: any;
    className?: any;
    style?: any;
    id: string
}

const ATProvider = ({
    id, children, className, style
}: Props) => {

    // 마운트시 주소창 id로 조회 후 상태 변경하는 역할
    const [isLoading, setLoading] = useRecoilState(loadingState)
    const [at, setAT] = useRecoilState(atDataState)
    const { refetch: getAT,  isLoading: isGetATLoading, isFetching: isGetATFetching, data: atData} = useGetAT({
        id: encodeURI(id),
    })
    const resetData = useResetRecoilState(atDataState)

    useEffect(()=>{
        setLoading(isGetATLoading || isGetATFetching)
    }, [isGetATLoading, isGetATFetching])

    useEffect(()=>{
        if(atData?.data){
          setAT(atData.data)
        }
    }, [atData])

    useEffect(()=>{
        return ()=>resetData()
    }, [])

    return (
        <div className={className} style={style}>
            {children}
        </div>
    )

}

export default ATProvider