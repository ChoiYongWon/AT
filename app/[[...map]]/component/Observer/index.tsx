import { useObserver } from "@/app/_common/hook/useObserver"
import { useEffect } from "react"
import { LoadingStyle, NonLoadingStyle, ObserverStyle } from "./style.css"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { atListSelector, atListState, atQueryStageState, atUrlState, selectedAreaState } from "../../recoil"
import { useInfiniteATLists } from "@/app/_common/query/get/useInfiniteATLists"
import Loading from "@/app/_common/component/Loading"

type Props = {
    className ?: any
}

const Observer = ({className}: Props) => {

    /* SearchBar에서 Managing 하는 상태 */
    const queryStage = useRecoilValue(atQueryStageState) // useQuery가 의존하는 상태 (이 값이 변경함에 따라 query가 요청함)
    const {at_id, name} = useRecoilValue(atUrlState) // 현재 url 상태

    /* 선택한 도에 대한 전체 상태 */
    const [selectedArea, setSelectedArea] = useRecoilState(selectedAreaState)

    const [isIntersecting, setIntersecting, ref]: any = useObserver({
        options: {
            threshold: 0.2
        }
    })

    const { data, fetchNextPage, isFetching } = useInfiniteATLists({
        query: encodeURI([...queryStage].sort().join(",")) || null,
        at_id,
        name,
        limit: 5,
        area: selectedArea as string
    })

    const setATList = useSetRecoilState(atListState)

    useEffect(()=>{
        setATList(data)
    }, [data])

    useEffect(()=>{
        if(isIntersecting){
            fetchNextPage().then(()=>setIntersecting(false))
            
        }
    }, [isIntersecting])

    return (
        <div  ref={ref as any} className={`${ObserverStyle} ${className}`}>
            { isFetching ? <Loading className={LoadingStyle}/> : <div className={NonLoadingStyle}></div> }
        </div>
    )
}

export default Observer