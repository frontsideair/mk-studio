'use client'

import cn from 'classnames'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

import Arrow from '../Arrow'
import s from './LearnMore.module.css'
interface LearnMoreProps {
  link?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}
const LearnMore: FC<PropsWithChildren<LearnMoreProps>> = ({
  link = '/',
  direction = 'right',
  children = 'Learn More',
  className,
}) => {
  function handleClick(event) {
    event.stopPropagation()
  }

  return (
    <Link
      href={{ pathname: link }}
      className={cn(s.root, className)}
      onClickCapture={handleClick}
    >
      <div className={s.root}>
        <span className={s.text}>{children}</span>
        <Arrow element={`button`} direction={direction} />
      </div>
    </Link>
  )
}

export default LearnMore
