'use client'

import Image from "next/image"
import { Divider, MapFormArrowDownStyle, MapFormButtonStyle, MapFormButtonWrapperStyle, MapFormCheckStyle, MapFormContentFooterStyle, MapFormContentWrapperStyle, MapFormCreateInfoTextWrapperStyle, MapFormCreateTextBoldStyle, MapFormCreateTextWrapperStyle, MapFormInputErrorMessageStyle, MapFormInputSearchIconStyle, MapFormInputStyle, MapFormInputWrapperStyle, MapFormListItemWrapperStyle, MapFormListWrapperStyle, MapFormWrapperStyle } from "./style.css"
import ArrowDown from "../../../../public/images/ArrowDown.svg"
import Search from "../../../../public/images/SearchIcon.svg"
import Check from "../../../../public/images/Check.svg"
import { useEffect, useState } from "react"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { useDetectClickOutside } from "react-detect-click-outside"
import { useRecoilState } from "recoil"
import { Map, mapState } from "../../recoil"
import { useInput } from "@/app/_common/hook/useInput"

type Props = {
    className ?: any
    style ?: any
}

type ErrorType = {
    enabled: boolean
    message: string
}

const MapForm = ({className, style}: Props) => {

    const [toggle, setToggle] = useState(false)
    const [list, setList] = useState<Map[]>([])
    const [filteredList, setFilteredList] = useState<Map[]>([])
    const [selectedMap, setSelectedMap] = useRecoilState(mapState)
    const {value: mapInput, setValue: setMapInput, onChange: onMapInputChange} = useInput("")
    const [error, setError] = useState<ErrorType>({enabled: false, message: ""})

    // input 값에 따라 검색 결과 갱신
    useEffect(()=>{
        const filtered = list.filter(item=>{
            if(mapInput.length == 0) return true
            return item.name == mapInput
        })
        setFilteredList(filtered)
    }, [list, mapInput])

    // Error 발생시 1초 뒤에 에러 삭제
    useEffect(()=>{
        let tick: any;
        if(error.enabled)  tick = setTimeout(()=>setError({enabled: false, message:""}), 1000)
        
        return ()=>clearTimeout(tick);
    }, [error.enabled])

    
    const detectRef = useDetectClickOutside({
        onTriggered: () => {
            setToggle(false)
        },
      });


    const onButtonClick = () => {
        setToggle(!toggle)
        setMapInput("")
        
    }

    const onItemClick = (id: string | null, name: string | null) => {
        setSelectedMap({id, name})
        setToggle(false)
    }

    const onMapAddClick = () => {
        const regexp = /^[가-힣a-zA-Z0-9]{1,6}$/g
        if(regexp.test(mapInput)){
            // 지도 추가 로직
        }else setError({enabled: true, message: "한글, 숫자, 영어 6자 내로 구성해주세요."})
    }

    return (
        <div style={style} ref={detectRef} className={MapFormWrapperStyle}>
            <div className={MapFormButtonWrapperStyle} onClick={onButtonClick}>
                <div className={MapFormButtonStyle}>
                    { selectedMap.id ? selectedMap.name : "지도" }
                </div>
                <Image src={ArrowDown} alt="" className={MapFormArrowDownStyle} style={assignInlineVars({
                        transform: toggle ? "rotate(-180deg)" : "rotate(0)"
                })}/>
            </div>
            
            <div className={MapFormContentWrapperStyle} style={assignInlineVars({
                display: toggle ? "flex" : "none" 
            })}>
                <div className={MapFormInputWrapperStyle}>
                    <input type="text" className={MapFormInputStyle} placeholder="지도 명" value={mapInput} onChange={onMapInputChange}/>
                    <Image src={Search} alt="" className={MapFormInputSearchIconStyle}/>
                </div>

                {
                    // 입력창에 입력된 상태에서 입력창 내용이랑 내 지도가 일치하는게 없을 때, 입력창에 아무것도 없을 때 (에러 X)
                    mapInput.length > 0 && list.filter(item=>item.name == mapInput).length == 0 && !error.enabled ? 
                        <div className={MapFormCreateTextWrapperStyle} onClick={()=>onMapAddClick()}>
                            <span className={MapFormCreateTextBoldStyle}>"{mapInput}"</span> 생성하기
                        </div>
                        : 
                        <></>
                }
                {
                    // 내 지도가 아예 없고 입력창의 길이가 0일때 (에러 X)
                    list.length == 0 && mapInput.length == 0 && !error.enabled ? 
                    <div className={MapFormCreateInfoTextWrapperStyle}>입력해서 지도를 생성해보세요!</div>
                    : 
                    <></>
                }
                {
                    // 내 지도가 존재하고 필터된 결과가 존재할 때 (에러 X)
                    list.length > 0 && filteredList.length != 0 && !error.enabled ? 
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
                    // 에러 발생 시 (에러 O)
                    error.enabled ? 
                    <div className={MapFormInputErrorMessageStyle}>{error.message}</div> : <></>
                }
                    
                <div className={Divider}></div>
                <div className={MapFormContentFooterStyle}>
                    모든 지도 보기
                </div>
            </div>
        </div>
    )
}

export default MapForm