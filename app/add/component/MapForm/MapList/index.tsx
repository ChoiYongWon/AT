import Image from "next/image"
import Search from "../../../../../public/images/SearchIcon.svg"
import Check from "../../../../../public/images/Check.svg"
import Add from "../../../../../public/images/AddButton.svg"

// import Loading from "../../../../../public/images/loading.gif"
import { Divider, MapFormCheckStyle, MapFormContentFooterStyle, MapFormContentWrapperStyle, MapFormCreateButtonImageStyle, MapFormCreateButtonStyle, MapFormCreateInfoTextWrapperStyle, MapFormCreateTextBoldStyle, MapFormCreateTextWrapperStyle, MapFormInputErrorMessageStyle, MapFormInputSearchIconStyle, MapFormInputStyle, MapFormInputWrapperStyle, MapFormListItemWrapperStyle, MapFormListWrapperStyle, MapFormLoadingStyle, MapFormLoadingWrapperStyle } from "./style.css"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { Map, mapState } from "../../../recoil"
import { useInput } from "@/app/_common/hook/useInput"
import { useCreateMap } from "@/app/_common/query/post/useCreateMap"
import { useGetAllMap } from "@/app/_common/query/get/useGetAllMap"
import { useSession } from "next-auth/react"
import { useDetectClickOutside } from "react-detect-click-outside"
import Loading from "@/app/_common/component/Loading"

type Props = {
    className ?: any
    style ?: any
    closeToggle: any
}

type ErrorType = {
    enabled: boolean
    message: string
}


const MapList = ({className, style, closeToggle}: Props) => {

    const session = useSession({required: true})
    const [mapList, setMapList] = useState<Map[]>([])
    const [filteredList, setFilteredList] = useState<Map[]>([])
    const [selectedMap, setSelectedMap] = useRecoilState(mapState)
    const {value: mapInput, setValue: setMapInput, onChange: onMapInputChange} = useInput("")
    const [error, setError] = useState<ErrorType>({enabled: false, message: ""})
    const {mutateAsync: createMap, isPending: isCreateMapPending} = useCreateMap()

        // TODO 세션이 undefined일때 전송되는 부분 고안해볼것
        const {
            data: mapData,
            isSuccess: isGetAllMapSuccess,
            refetch: getAllMap,
            isFetching: isGetAllMapFetching,
        } = useGetAllMap()
    
        // 지도 불러 온 후 값
        useEffect(()=>{
            if(isGetAllMapSuccess) {
                const {data} = mapData
                setMapList([...data])
            }
        }, [isGetAllMapSuccess, mapData])
    
        // input 값에 따라 검색 결과 갱신
        useEffect(()=>{
            const filtered = mapList.filter(item=>{
                if(mapInput.length == 0) return true
                return item.name?.includes(mapInput)
            })
            setFilteredList(filtered)
        }, [mapList, mapInput])
    
        // Error 발생시 1초 뒤에 에러 삭제
        useEffect(()=>{
            let tick: any;
            if(error.enabled)  tick = setTimeout(()=>setError({enabled: false, message:""}), 1000)
            
            return ()=>clearTimeout(tick);
        }, [error.enabled])
    
        // 지도 아이템 클릭 시
        const onItemClick = (id: string | null, name: string | null) => {
            setSelectedMap({id, name})
            closeToggle()

        }
    
        // 지도 추가 클릭 시
        const onMapAddClick = async () => {
            const regexp = /^[가-힣a-zA-Z0-9]{1,6}$/g
            if(regexp.test(mapInput)){
                // TODO 에러 처리 고민해보기
                // 지도 추가 로직
                try{
                    const {data} = await createMap({ name: mapInput })
                    setMapInput("")
                    setSelectedMap({id: data.id, name: data.name})
                    closeToggle()
                    getAllMap()
    
                }catch(e: any){
                    const message = e.message
                    setError({enabled: true, message})
                }
    
            }else setError({enabled: true, message: "한글, 숫자, 영어 6자 내로 구성해주세요."})
        }
        const detectRef = useDetectClickOutside({
            onTriggered: () => {
                closeToggle()
                setMapInput("")
            },
            disableTouch: true
          });

    return (
        <div className={MapFormContentWrapperStyle} style={style} ref={detectRef}>
            <div className={MapFormContentFooterStyle}>
               총 {mapList.length}개의 지도
            </div>
            <div className={MapFormInputWrapperStyle}>
                <input type="text" className={MapFormInputStyle} placeholder="지도 명" value={mapInput} onChange={onMapInputChange}/>
                <Image src={Search} alt="" className={MapFormInputSearchIconStyle}/>
            </div>


            {
                // 내 지도가 아예 없고 입력창의 길이가 0일때 (에러 X)
                mapList.length == 0 && mapInput.length == 0 && !error.enabled && (!isGetAllMapFetching || !isCreateMapPending) ? 
                <div className={MapFormCreateInfoTextWrapperStyle}>입력해서 지도를 생성해보세요!</div>
                : 
                <></>
            }
            {
                // 내 지도가 존재하고 필터된 결과가 존재할 때 (에러 X)
                mapList.length > 0 && filteredList.length != 0 && !error.enabled && (!isGetAllMapFetching || !isCreateMapPending) ? 
                <ul className={MapFormListWrapperStyle}>
                    {
                        filteredList.map((item)=>{
                            return (
                                <li className={MapFormListItemWrapperStyle} key={item.id} onClick={()=>onItemClick(item.id, item.name)}>
                                    {
                                        selectedMap.id == item.id ? <Image src={Check} alt="" className={MapFormCheckStyle}/> : <div className={MapFormCheckStyle}></div>
                                    }
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
                : <></>
            }
            {
                // 입력창에 입력된 상태에서 입력창 내용이랑 내 지도가 일치하는게 없을 때, 입력창에 아무것도 없을 때 (에러 X)
                mapInput.length > 0 && mapList.filter(item=>item.name == mapInput).length == 0 && !error.enabled && (!isGetAllMapFetching && !isCreateMapPending) ? 
                    <div className={MapFormCreateTextWrapperStyle} onClick={()=>onMapAddClick()}>
                        <div className={MapFormCreateButtonStyle} style={{marginRight: '8px'}}>
                            <Image src={Add} width={12} height={12} className={MapFormCreateButtonImageStyle} alt=""/>
                        </div>
                        <span className={MapFormCreateTextBoldStyle}>"{mapInput}"</span> 생성하기
                    </div>
                    : 
                    <></>
            }
            {
                isGetAllMapFetching || isCreateMapPending ? 
                <div className={MapFormLoadingWrapperStyle}>
                    <Loading className={MapFormLoadingStyle}/>
                    {/* <Image src={Loading} alt="" className={MapFormLoadingStyle}/> */}
                </div>
                : <></>
            }
            {
                // 에러 발생 시 (에러 O)
                error.enabled && !isGetAllMapFetching ? 
                <div className={MapFormInputErrorMessageStyle}>{error.message}</div> : <></>
            }
                
            {/* <div className={Divider}></div> */}

        </div>
    )

}

export default MapList