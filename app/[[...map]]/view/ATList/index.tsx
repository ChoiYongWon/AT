'use client'

import { useGhostHistory } from "@/app/_common/hook/useGhostHistory"
import { selectedAreaState } from "@/app/_common/recoil"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { useRecoilState } from "recoil"

type Props = {
    className?: any
}

export const ATListView = ({className}: Props, ref: any) => {

    const [selectedArea, setSelectedArea] = useRecoilState(selectedAreaState)
    const { use } = useGhostHistory({onPopState: ()=>setSelectedArea(null)})
    use() // useGhostHistory를 사용하는 곳

    // TODO SearchBar 상태 + url 상태 + selectedArea 상태에 따라 쿼리문 요청

    return (
        <motion.div 
            layout
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.1 }}
            ref={ref} style={{marginTop: '30px'}}>
            <div>{selectedArea}</div>
        </motion.div>
    )
}

export default forwardRef(ATListView)