import { useEffect, useRef } from "react"

type Props = {
    callback: any,
    options?: any
}

export const useObserver = ({callback, options}: Props) => {
    const observerInstance = useRef(new IntersectionObserver(callback, options))
    const observeTarget = useRef(null)
    
    function setObserveTarget(target: any){
        observerInstance.current.observe(target)
        observeTarget.current = target
    }

    useEffect(()=>{
        return ()=>{

            if(observeTarget.current){
                console.log("UNOBSERVE")
                observerInstance.current.unobserve(observeTarget.current)
            }
        }
    }, [])
    
    return {setObserveTarget}

}