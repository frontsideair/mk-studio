'use client'

import { FC, useEffect, useRef, useState } from 'react'

import AnimatedBackgroundGrid from '../AnimatedBackgroundGrid'
import s from './BackgroundGrid.module.css'

export interface BackgroundGridProps {
  bgColor?: string
  direction?: 'up' | 'down'
  initialHeight?: number
}

const BackgroundGrid: FC<BackgroundGridProps> = ({
  bgColor = 'rgb(43, 34, 114)',
  direction = 'up',
  initialHeight = 458,
}) => {
  const [elementHeight, setElementHeight] = useState(initialHeight)
  const [elementWidth, setElementWidth] = useState(1367)
  const ref = useRef<HTMLDivElement>(null)
  console.log('ref height', ref.current?.clientHeight)

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
    <div className={s.root} ref={ref}>
      <AnimatedBackgroundGrid
        bgWidth={elementWidth}
        bgHeight={elementHeight}
        bgColor={bgColor}
        direction={direction}
      />
    </div>
  )
}

export default BackgroundGrid
