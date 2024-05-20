'use client'

import { GetATData, useGetAT } from "@/app/_common/query/get/useGetAT";
import { useEffect } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { atDataState, loadingState } from "../../recoil";
import { Area, selectedAreaState } from "@/app/[[...map]]/recoil";

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
    const setSelectedArea = useSetRecoilState(selectedAreaState)

    useEffect(()=>{
        setLoading(isGetATLoading || isGetATFetching)
    }, [isGetATLoading, isGetATFetching])

    useEffect(()=>{
        const data: GetATData | undefined = atData?.data
        if(data){
            setAT(atData.data)
            setSelectedArea(data.address.split(" ")[0] as Area)
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