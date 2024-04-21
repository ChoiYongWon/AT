'use client'

import { useRecoilState, useRecoilValue } from "recoil"
import { atQueryStageState, atQueryState } from "../../recoil"
import { AnimatePresence, motion } from "framer-motion"
import { QueryDeleteButtonStyle, QueryDeleteImageStyle, QueryStyle, QueryTextStyle, QueryWrapperStyle } from "./style.css"
import CancelButton from "../../../../public/images/CancelButton.svg"
import Image from "next/image"
import { useRef } from "react"

type Props = {
    className?: any
    style?: any
}

const Query = ({className, style}: Props) => {

    const [queries, setQueries] = useRecoilState(atQueryState)
    const [queryStage, setQueryStage] = useRecoilState(atQueryStageState)

    const removeQuery = (e: any, query: string) => {
        e.preventDefault();
        const newQuery = [...queries];
        const i = queries.findIndex((q) => q == query);
        newQuery.splice(i, 1);
        setQueries(newQuery);
        setQueryStage(newQuery)
      };

    return (
        <div className={className} style={{...style, width: "100%"}}>
            {/* TODO 추가할때마다 맨 끝으로 스크롤 */}
            <div className={QueryWrapperStyle}>
                <AnimatePresence mode="popLayout">
                    {
                        queries.map((data, i)=>{
                            return (
                                <motion.div key={data} className={QueryStyle} onClick={(e)=>removeQuery(e, data)} layout animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.1, opacity: 0 }} transition={{ type: "just", duration: 0.2 }} {...{ whileTap: { scale: 0.9, transition: { duration: 0.08 } } }}>
                                    <div className={QueryTextStyle}>
                                        {data}
                                    </div>
                                    <div className={QueryDeleteButtonStyle}>
                                        <Image className={QueryDeleteImageStyle} src={CancelButton} alt="x"/>
                                    </div>
                                </motion.div>
                            )
                        })
                    
                    }
                    
                    
                </AnimatePresence>
            </div>
        </div>
        

    )
}

export default Query