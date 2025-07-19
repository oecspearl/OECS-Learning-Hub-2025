"use client"

import { useState } from "react"
import Image from "next/image"

interface FallbackImageProps {
  src: string
  fallbackSrc: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
}

export function FallbackImage({
  src,
  fallbackSrc,
  alt,
  fill = false,
  width,
  height,
  className = "",
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
    />
  )
}
