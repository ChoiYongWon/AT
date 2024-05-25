'use client'

import { useRecoilState } from "recoil"
import { ATListView } from "./ATList"
import { MapView } from "./Map"
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
                <MapView key={"MapView"} style={{marginTop: '40px'}}/>


        }
        </>
        // {/* </AnimatePresence> */}
        
    )
}

export default ContentManage