'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

type Props = {
    originSrc: string
    src: string
    alt: string
}

const ImageWithFallback = ({
    originSrc,
    alt,
    src,
    ...props
  }: Props | any) => {
    const [error, setError] = useState<any>(null)
  
    useEffect(() => {
      setError(null)
    }, [src])
  
    return (
      <Image
        priority
        alt={alt}
        onError={setError}
        src={error ? originSrc : src}
        {...props}
      />
    )
  }

  export default ImageWithFallback