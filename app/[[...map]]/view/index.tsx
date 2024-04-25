'use client'

import { useRecoilState } from "recoil"
import { AnimatePresence, motion } from "framer-motion"
// import { MapPage } from "./Map"
import { ATListView } from "./ATList"
// import Map, { MapView } from "./Map"
import { MapLayoutStyle } from "./Map/style.css"
import Map from "../component/Map"
import { MapView } from "./Map"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { ATListLayoutStyle } from "./style.css"
import { selectedAreaState } from "../recoil"


// Map과 ATlist를 상태에 따라 보여주는 컴포넌트
const ContentManage = () => {

    const [selectedArea, setSelectedArea] = useRecoilState(selectedAreaState)

    return (
        <>
        {/* // <AnimatePresence mode="wait"> */}
        {
            selectedArea ? 
                <ATListView key={"ListView"} className={ATListLayoutStyle}/>
                :
                <MapView key={"MapView"}/>


        }
        </>
        // {/* </AnimatePresence> */}
        
    )
}

export default ContentManage