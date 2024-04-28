'use client'

import { useGetAT } from "@/app/_common/query/get/useGetAT";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
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
    const [isLoading, setLoading] = useRecoilState(loadingState)
    const [at, setAT] = useRecoilState(atDataState)
    const { refetch: getAT,  isLoading: isGetATLoading, isFetching: isGetATFetching, data: atData} = useGetAT({
        id: encodeURI(id),
    })

    useEffect(()=>{
        setLoading(isGetATLoading || isGetATFetching)
    }, [isGetATLoading, isGetATFetching])

    useEffect(()=>{
        if(atData?.data){
          setAT(atData.data)
        }
    }, [atData])

    return (
        <div className={className} style={style}>
            {children}
        </div>
    )

}

export default ATProvider