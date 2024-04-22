'use client'

import { useGhostHistory } from "@/app/_common/hook/useGhostHistory"
import { selectedAreaState } from "@/app/_common/recoil"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { forwardRef, useEffect } from "react"
import { useSetRecoilState } from "recoil"

type Props = {
    className?: any
}

export const ATListView = ({className}: Props, ref: any) => {

    const setSelectedArea = useSetRecoilState(selectedAreaState)
    const { use } = useGhostHistory({onPopState: ()=>setSelectedArea(null)})
    use()

    return (
        <motion.div 
            layout
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            ref={ref} style={{marginTop: '30px'}}>
            <div>안녕하세요</div>
        </motion.div>
    )
}

export default forwardRef(ATListView)