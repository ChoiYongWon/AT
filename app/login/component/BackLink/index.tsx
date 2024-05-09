'use client'

import { useRouter } from "next/navigation"
import { BackLinkStyle } from "./style.css"
import Link from "next/link"

type Props = {
    children: any
}

const BackLink = ({children}: Props) => {

    const router = useRouter()

    return (
        <Link href={"/"} className={BackLinkStyle} prefetch>
            {children}
        </Link>
    )
}

export default BackLink