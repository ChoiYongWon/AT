'use client'

import { GetATData, useGetAT } from "@/app/_common/query/get/useGetAT"
import { UploadFormLayoutStyle } from "./style.css"
import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { editFormSelector, formSelector } from "../../recoil"
import { v4 as uuidv4 } from "uuid";

type Props = {
    children: any
    id: string
}

const Form = ({children, id}: Props) => {

        const { refetch: getAT,  isLoading: isGetATLoading, isFetching: isGetATFetching, data: atData} = useGetAT({
            id: encodeURI(id),
        })
        const initializeForm = useSetRecoilState(editFormSelector)
        const form = useRecoilValue(formSelector)

        useEffect(()=>{
            const res: GetATData | undefined = atData?.data
            if(res){
                const {address, body, categories, created_at, id, images, map, title, user, view_count} = res


                initializeForm({
                    id,
                    map: {
                        id: map.id,
                        name: map.name,
                    },
                    image: images.map((i: any)=>({previewUrl: i.originUrl, isNew: false, name: i.originUrl.split("/").at(-1).split(".")[0], ext: i.originUrl.split("/").at(-1).split(".")[1]})),
                    category: categories.map((c: any)=>({id: uuidv4(), name: c.name})),
                    address: {
                        enable: true,
                        address: address,
                        name: title
                    },
                    detail: body
                })
            }
        }, [atData])

    return (
        <form className={UploadFormLayoutStyle} onSubmit={(e)=>e.preventDefault()}>
            {children}
        </form>
    )
}

export default Form