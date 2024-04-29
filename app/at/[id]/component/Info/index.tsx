'use client'

import { useRecoilValue, useSetRecoilState } from "recoil";
import { atDataSelector, atDataState, loadingState } from "../../recoil";
import { GetATData } from "@/app/_common/query/get/useGetAT";
import { AddressStyle, AddressWrapperStyle, AuthorInfoStyle, BodyStyle, CategoryStyle, CategoryWrapperStyle, DividerStyle, EditStyle, EditWrapperStyle, InfoWrapperStyle, MapButtonImageStyle, MapButtonStyle, MetaInfoWrapperStyle, ReportStyle, TitleStyle, TitleWrapperStyle } from "./style.css";
import NextArrow from "../../../../../public/images/NextArrow.svg"
import Image from "next/image";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { selectedAreaState } from "@/app/[[...map]]/recoil";

type Props = {
    className?: any;
    style?: any;
}

const Info = ({
    className, style
}: Props) => {

    const session = useSession()
    const { title, user, categories, map, created_at, view_count, body, address } = useRecoilValue(atDataSelector)
    const [initialLoading, setInitialLoading] = useState(true)
    const isLoading = useRecoilValue(loadingState)
    const setSelectedArea = useSetRecoilState(selectedAreaState)

    useEffect(()=>{
        setInitialLoading(isLoading)
    }, [isLoading])

    const onInfoClick = () => {
        setSelectedArea(null)
    }


    return (
        <div className={`${InfoWrapperStyle} ${className}`} style={style}>
            <div style={{marginBottom: "16px"}}>
                {
                    isLoading || initialLoading ? <Skeleton style={{width: "150px"}}/> : <Link onClick={onInfoClick} href={`/${user.at_id}/${map.name}`} className={AuthorInfoStyle} >@{user.at_id}의 {map.name}지도</Link>            
                }
                
            </div>
            <div className={TitleWrapperStyle} style={{marginBottom: "20px"}}>
                <div className={AddressWrapperStyle}>
                {
                    isLoading || initialLoading ? <Skeleton style={{width: "100px", height: "24px"}}/> : <div className={TitleStyle}>{title}</div>        
                }
                {
                    isLoading || initialLoading ? <Skeleton style={{width: "100px", height: "12px"}}/> :  <div className={AddressStyle}>{address}</div>
                }
                </div>
                {
                        isLoading || initialLoading ? <Skeleton circle style={{width: "34px", height: "34px"}}/> :  <button className={MapButtonStyle}><Image src={NextArrow} alt="" className={MapButtonImageStyle}/></button>
                }
                
            </div>
            <div className={MetaInfoWrapperStyle} style={{marginBottom: "12px"}}>
                {
                    isLoading || initialLoading ? <Skeleton style={{width: "100px", height: "12px"}}/> :  <span>작성일 {created_at}</span>       
                }
                
                <div className={EditWrapperStyle}>
                    {
                        isLoading || initialLoading ? <Skeleton style={{width: "20px", height: "12px"}}/> :  session.data?.user.at_id == user.at_id ? <span className={EditStyle}>삭제</span> : <></>
                    }
                    {
                        isLoading || initialLoading ? <Skeleton style={{width: "20px", height: "12px"}}/> :   session.data?.user.at_id == user.at_id ? <span className={EditStyle}>수정</span> : <></>
                    }
                    {
                        isLoading || initialLoading ? <Skeleton style={{width: "20px", height: "12px"}}/> :  <>조회 {view_count.toLocaleString()}</>
                    }
                    
                </div>         
            </div>
            <div className={DividerStyle} style={{marginBottom: "40px"}}/>
            {
                isLoading || initialLoading ? <Skeleton count={5} style={{height: "14px", marginBottom: "8px"}}/> :  <p className={BodyStyle}>{body}</p>
            }
            
            <div style={{marginBottom: "24px", marginTop: "50px"}}>
            {
                isLoading || initialLoading ? <Skeleton style={{width: "100px"}}/> :  <span onClick={()=>alert("구현중입니다. 기다려주세요~")} className={ReportStyle}>이 게시글 신고하기</span>
            }
                
            </div>
            <div className={CategoryWrapperStyle} style={{marginBottom: "40px"}}>
                {
                    categories.map((category, i)=>{
                        return <div className={CategoryStyle} key={i}>{category.name}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Info