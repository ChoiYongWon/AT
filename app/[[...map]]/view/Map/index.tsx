'use client'

import { motion } from "framer-motion"
import { forwardRef, useEffect } from "react"
import Map from "../../component/Map"
import { MapLayoutStyle } from "./style.css"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { areaNameReverse, atCountSelector, atCountState, atQueryStageState, atUrlState } from "../../recoil"
import { useGetAT } from "@/app/_common/query/get/useGetAT"
import indicatorData from "../../data/indicator.json"
import Indicator from "../../component/Indicator"
import { selectedAreaState } from "@/app/_common/recoil"
import { useGhostHistory } from "@/app/_common/hook/useGhostHistory"


type Props = {
    className?: any
}

export const MapView = ({className}: Props, ref: any) => {


    /* SearchBar에서 Managing 하는 상태 */
    const queryStage = useRecoilValue(atQueryStageState) // useQuery가 의존하는 상태 (이 값이 변경함에 따라 query가 요청함)
    const {at_id, name} = useRecoilValue(atUrlState) // 현재 url 상태

    /* 응답 정보를 selector로 보기 좋게 가공 */
    const atCountInfo = useRecoilValue(atCountSelector) // 응답 정보 가공

    /* 
        MapView와 Map 간에 상태 
        selector로 가공해주기 위해 사용
    */
    const setATCount = useSetRecoilState(atCountState) // 응답 정보

    /* 선택한 도에 대한 전체 상태 */
    const setSelectedArea = useSetRecoilState(selectedAreaState)

    const { push } = useGhostHistory({})
    const { refetch: getAT,  isLoading: isGetATLoading, isFetching: isGetATFetching, data: atData} = useGetAT({
      query: encodeURI([...queryStage].sort().join(",")) || null,
      name,
      at_id
    })
  
    useEffect(()=>{
      if(atData?.data){
        setATCount(atData.data)
      }
    }, [atData])
  
    const onIndicatorClick = (name: string) => {
        // 스택만 쌓기 위해 (뒤로가기를 위한 스택)
        push()
        setSelectedArea(areaNameReverse[name])
    }
  

    return (
        <motion.div 
            className={MapLayoutStyle}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            ref={ref} style={{marginTop: '30px'}}>
            <Map>
                {
                    indicatorData.data.map((data, i)=>{
                        return (
                            <Indicator key={data.name} x={data.coord[0]} y={data.coord[1]} name={data.name} count={atCountInfo[data.name]} isLoading={isGetATFetching || isGetATLoading} onClick={()=>onIndicatorClick(data.name)}/>
                        )
                    })
                }
            </Map>
        </motion.div>
    )
}

export default forwardRef(MapView)