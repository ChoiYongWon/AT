'use client'

import IconButton from "@/app/_common/component/IconButton"
import { useRouter } from "next/navigation"

const CancelButton = () => {

    const router = useRouter()

    return <IconButton size="34px" type="cancel" onClick={()=>router.back()}/>
}

export default CancelButton