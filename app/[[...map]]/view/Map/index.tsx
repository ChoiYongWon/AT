'use client'

import { AnimatePresence, motion } from "framer-motion"
import { forwardRef } from "react"
import Map from "../../component/Map"
import { MapLayoutStyle } from "./style.css"

type Props = {
    className?: any
}

export const MapView = ({className}: Props, ref: any) => {
    return (
        <motion.div 
            className={MapLayoutStyle}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            ref={ref} style={{marginTop: '30px'}}>
            <Map/>
        </motion.div>
    )
}

export default forwardRef(MapView)