'use client'

import { useRouter } from "next/navigation"
import { BackLinkStyle } from "./style.css"
// import Link from "next/link"

type Props = {
    children: any
}

const BackLink = ({children}: Props) => {

    const router = useRouter()

    return (
        <button onClick={()=>router.back()} className={BackLinkStyle}>
            {children}
        </button>
    )
}

export default BackLink