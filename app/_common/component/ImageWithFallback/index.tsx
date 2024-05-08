'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

type Props = {
    originUrl: string
    compressUrl: string
    alt: string
    className: any
    style: any
}

const ImageWithFallback = ({
    originUrl,
    alt,
    compressUrl,
    // className,
    // style,
    ...props
  }: Props | any) => {
    const [error, setError] = useState<any>(null)
    const[src, setSrc] = useState<string>(compressUrl)
    const [timer, setTimer] = useState<any>(null)
    const [attempt, setAttempt] = useState(0)

    useEffect(() => {
      setError(null)
    }, [src])

    useEffect(()=>{
      if(error && attempt < 3) {
        setSrc("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88uR5PQAIkwMweFOllAAAAABJRU5ErkJggg==")

        // 4초뒤에 재요청
        setTimer(setTimeout(()=>{
          setSrc(compressUrl)
          setAttempt(prev=>prev+1)
        },4000))
      }
    }, [error])

    useEffect(()=>{
      return ()=>{
        if(timer) clearTimeout(timer)
      }
    }, [timer])
  
    return (
      <Image
        alt={alt}
        onError={setError}
        src={src}
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88uR5PQAIkwMweFOllAAAAABJRU5ErkJggg=="
        {...props}
      />
    )
  }

  export default ImageWithFallback