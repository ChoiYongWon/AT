'use client'

import Image from "next/image"
import Link from "next/link"
import { cookies } from "next/headers"
import MapSmallImage from "../../../../public/images/MapSmall.svg"
import AddButton from "../../../../public/images/AddButton.svg"
import MenuIcon from "../../../../public/images/Menu.svg"
import { useGetAggregatedMap } from "@/app/_common/query/get/useAggregatedMap"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import MapCard from "./MapCard"
import { CreateMapButtonImageStyle, CreateMapButtonStyle, CreateMapButtonWrapperStyle, CreateMapImageStyle, CreateMapTextStyle, CreateMapWrapperStyle, MapCardSkeletonStyle, MapListCardWrapperStyle, MapListWrapperStyle } from "./style.css"
// import 'react-loading-skeleton/dist/skeleton.css'



type Props = {
    className ?: any
    style ?: any
}

export type GetAggregatedMapData = {
    id: string
    name: string
    user: {
        at_id: string
    }
    _count: {
      spots: number
    }
    view: number
}

// async function getData() {
//     const session = cookies().get('authjs.session-token')?.value ?? ''
//     const baseUrl =  process.env.NODE_ENV=='development' ? 'http://localhost:3000/api' : 'https://www.a-spot-thur.app/api'
//     const res = await fetch(`${baseUrl}/map/aggregate`, {
//         headers: {
//             Cookie: `authjs.session-token=${session}`
//         }
//     })
//     if (!res.ok) throw new Error('Failed to fetch data')

//     return res.json().then(data=>data.data)
// }

const MapListCard = ({className, style}: Props) => {

    const { refetch: getMap,  isLoading: isGetMapLoading, isFetching: isGetMapFetching, data: mapList} = useGetAggregatedMap()
    const [initiailLoading, setInitialLoading] = useState(true)

    useEffect(()=>{
        setInitialLoading(isGetMapLoading || isGetMapFetching)
    }, [isGetMapLoading, isGetMapFetching])

    return (

        <>
            {
                isGetMapFetching || isGetMapLoading || initiailLoading ? (
                    <div className={`${className} ${MapListWrapperStyle}`} style={style}>
                       <Skeleton className={MapCardSkeletonStyle}/>
                       <Skeleton className={MapCardSkeletonStyle}/>
                       <Skeleton className={MapCardSkeletonStyle}/>
                       <Skeleton className={MapCardSkeletonStyle}/>
                       {/* <Skeleton className={MapCardSkeletonStyle}/> */}
                       {/* <Skeleton className={MapCardSkeletonStyle}/> */}

                    </div>
                ) : (
                    <div className={`${className} ${MapListCardWrapperStyle}`} style={style}>
                        {
                            mapList?.data.length ? (
                                <div style={{marginTop: '10px'}} className={MapListWrapperStyle}>
                                    {
                                        mapList?.data?.map((map: GetAggregatedMapData, i: number)=>{
            
                                            return (
                                                <MapCard key={i} id={map.id} at_id={map.user.at_id} name={map.name} view={map.view} count={map._count.spots}/>
                                                
                                            )
                                        })
                                    }
                                </div>
                            ) : (
                                <div style={{marginTop: '20px'}} className={CreateMapWrapperStyle}>
                                    <Image src={MapSmallImage} alt="" className={CreateMapImageStyle}/>
                                    <Link href={"/add"} className={CreateMapButtonWrapperStyle}>
                                        <div  className={CreateMapButtonStyle}>
                                            <Image src={AddButton} alt="" className={CreateMapButtonImageStyle}/>
                                        </div>
                                        <span className={CreateMapTextStyle}>새로운 지도를 추가해보세요!</span>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </>
       
    )

}

export default MapListCard