import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import Arrow from '../Arrow'
import s from './LearnMore.module.css'
interface LearnMoreProps {
  link?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}
const LearnMore: FC<LearnMoreProps> = ({
  link = '/',
  direction = 'right',
  className,
}) => {
  return (
    <Link href={link} className={cn(s.root, className)}>
      <div className={s.root}>
        <span className={s.text}>Learn More</span>
        <Arrow element={`button`} direction={direction} />
      </div>
    </Link>
  )
}

export default LearnMore
