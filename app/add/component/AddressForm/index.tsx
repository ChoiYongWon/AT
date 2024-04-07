'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import LoadingGif from "../../../../public/images/loading.gif"
import SearchIcon from "../../../../public/images/SearchIcon.svg"
import CancelIcon from "../../../../public/images/CancelButton.svg"
import { AddressInputWrapperStyle, AddressItemStyle, AddressItemSubTitleStyle, AddressListWrapperStyle, AddressNothingFindStyle, InputStyle, InputWrapperStyle, LoadingStyle, LoadingWrapperStyle, SearchButtonStyleWrapper, SelectedAddressStyle, SelectedCloseWrapperStyle, SelectedContentWrapperStyle, SelectedTitleStyle, SelectedWrapperStyle } from "./style.css"
import { useDebounceValue } from "usehooks-ts"
import { useDetectClickOutside } from "react-detect-click-outside"
import { useSearchAddress } from "@/app/_common/query/useSearchAddress"
import { useRecoilState } from "recoil"
import { addressState } from "@/app/add/recoil"

type Props = {
    style ?: any
}

type ATItemType = {
    name: string
    address: string
    category: string
}

const AddressForm = ({style}: Props) => {

    // 요청에 대한 결과 저장
    const [isResultView, setIsResultView] = useState(false)
    // 선택된 주소 상태
    const [selectedAddress, setSelectedAddress] = useRecoilState(addressState)

    // 주소 입력창 상태 
    const [inputAddress, setInputAddress] = useDebounceValue("", 500);
    const {
        refetch: getSearchAddress,
        isFetching: isSearchAddressFetching,
        data: searchAddress,
        isFetched: isSearchAddressFetched,
        error: searchAddressError,
        isError: isSearchAddressError,
      } = useSearchAddress(encodeURIComponent(inputAddress), {
        // query string 이스케이프 문자
        enabled: false,
      });
    const detectRef = useDetectClickOutside({
        onTriggered: () => {
            setIsResultView(false)
        },
      });

    // TODO 가끔 검색 안되는 에러 isFetched가 문제인듯

    // --- useEffect 영역

    // fetch되었을때 결과창 표시 유무 상태
    useEffect(()=>{
        if(isSearchAddressFetched && !isSearchAddressFetching) {
            setIsResultView(true)
        }
    }, [isSearchAddressFetched, isSearchAddressFetching])

    // useEffect(()=>{
    //     console.log("Fetching", isSearchAddressFetching)
    // }, [isSearchAddressFetching])

    // input값이 변함에 따라 검색
    useEffect(()=>{
        if(inputAddress.length > 0) {     
            getSearchAddress()
        }
    }, [inputAddress])

    const onAddressClick = (name: string, address: string) => {
        setIsResultView(false)
        setSelectedAddress({enable: true, name, address})
    }

    const onSelectedCloseClick = () => {
        setIsResultView(false)
        setSelectedAddress({enable: false, name: "", address: ""})
        setInputAddress("")
    }

    return <div className={AddressInputWrapperStyle} style={style} ref={detectRef}>
        
        <div className={InputWrapperStyle}>
            {
                selectedAddress.enable ? 
                    <div className={SelectedWrapperStyle}>
                        <div className={SelectedContentWrapperStyle}>
                            <p className={SelectedTitleStyle}>{selectedAddress.name}</p>
                            <p className={SelectedAddressStyle}>{selectedAddress.address}</p>
                        </div>
                        <div className={SelectedCloseWrapperStyle} onClick={onSelectedCloseClick}>
                            <Image alt="x" src={CancelIcon}></Image>
                        </div>
                    </div> 
                : 
                <>
                    <input type="text" onChange={(e: any) => setInputAddress(e.target.value)} className={InputStyle} placeholder="장소를 입력해주세요."/>
                    {
                        isSearchAddressFetching ? 
                        <div className={LoadingWrapperStyle}><Image src={LoadingGif} alt="loading" className={LoadingStyle}/></div> 
                        : 
                        <div className={SearchButtonStyleWrapper}><Image src={SearchIcon} alt="search"/></div>
                    }
                </>
            }
            
        </div>
        {
            // 검색 결과 창 상태가 참일 시
            isResultView && isSearchAddressFetched ? 
            searchAddress?.data.length > 0 ? 
            ( // 검색 결과가 0보다 많을 경우
                <ul className={AddressListWrapperStyle}>
                    {
                        searchAddress.data.map((data: any)=>{
                            return (
                                <li className={AddressItemStyle} key={data.name + data.address} onClick={()=>onAddressClick(data.name, data.address)}>{data.name}
                                    <p className={AddressItemSubTitleStyle}>{data.address}</p>
                                </li>
                            )
                            
                        })
                    }
                </ul>
            ) 
            : // 검색결과가 없을 경우
            <ul className={AddressListWrapperStyle}>
                <li className={AddressNothingFindStyle} >
                        검색 결과가 없습니다.
                    </li>
                </ul>
            : 
            <></>
        }
    </div>
}

export default AddressForm