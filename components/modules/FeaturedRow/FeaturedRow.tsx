'use client'

import AnimatedBackgroundGrid from '@components/common/AnimatedBackgroundGrid'
import cn from 'classnames'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import s from './FeaturedRow.module.css'

interface FeaturedRowProps {
  title?: string
  images?: any[]
}
export default function FeauturedRow({ title, images = [] }: FeaturedRowProps) {
  const [elementHeight, setElementHeight] = useState(458)
  const [elementWidth, setElementWidth] = useState(1367)
  const ref = useRef<HTMLDivElement>(null)
  console.log(images)

  useEffect(() => {
    const handleResize = () => {
      setElementWidth(innerWidth || ref.current?.clientWidth || elementWidth)
      setElementHeight(ref.current?.clientHeight || elementHeight)
    }
    window.addEventListener('resize', handleResize)
    setElementHeight(ref.current?.clientHeight ?? 394)
    setElementWidth(ref.current?.clientWidth ?? innerWidth)
  }, [
    elementHeight,
    elementWidth,
    ref.current?.clientHeight,
    ref.current?.clientWidth,
  ])

  return (
    <div className={s.root}>
      <AnimatedBackgroundGrid
        bgWidth={elementWidth}
        bgHeight={elementHeight}
        direction="down"
      />
      <div className={cn(s.content, 'lg:grid-cols-4')}>
        <div className={cn(s.highlight, 'lg:col-span-1')}>
          {title && <h2 className={s.heading}>{title}</h2>}
        </div>
        <ol className={cn(s.ol, 'lg:col-span-3', 'lg:grid', 'lg:grid-cols-3')}>
          {images.map(
            (
              {
                name,
                asset: {
                  url,
                  altText,
                  metadata: {
                    dimensions: { width, height },
                  },
                },
              },
              i
            ) => (
              <li key={`${name}_${i}`} className={cn(s.li, 'lg:col-span-1')}>
                <Image
                  src={url}
                  alt={altText ?? name}
                  width={width}
                  height={height}
                />
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  )
}
