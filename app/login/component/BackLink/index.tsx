'use client'

import { useRouter } from "next/navigation"
import { BackLinkStyle } from "./style.css"

type Props = {
    children: any
}

const BackLink = ({children}: Props) => {

    const router = useRouter()

    return (
        <span onClick={()=>router.back()} className={BackLinkStyle}>
            {children}
        </span>
    )
}

export default BackLink