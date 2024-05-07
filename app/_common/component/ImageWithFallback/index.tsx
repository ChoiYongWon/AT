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
  
    useEffect(() => {
      setError(null)
    }, [compressUrl])
  
    return (
      <Image
        priority
        alt={alt}
        onError={setError}
        src={error ? originUrl : compressUrl}
        {...props}
      />
    )
  }

  export default ImageWithFallback