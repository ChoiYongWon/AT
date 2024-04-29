import { useEffect, useRef, useState } from "react"

type Props = {
    callback?: any,
    options?: any
}

export const useObserver = ({options}: Props) => {
    const targetRef = useRef(null)
    const observerInstance = useRef(new IntersectionObserver(([entry])=>{
        setIntersecting(entry.isIntersecting)
    }, options))
    const [isIntersecting, setIntersecting] = useState<boolean>(false)
    
    // function setObserveTarget(target: any){
    //     observerInstance.current.observe(target)
    //     observeTarget.current = target
    // }

    useEffect(()=>{

        if(targetRef.current) observerInstance.current.observe(targetRef.current)

        return ()=>{
            if(targetRef.current){
                observerInstance.current.unobserve(targetRef.current)
            }
        }
    }, [])
    
    return [isIntersecting, targetRef]

}