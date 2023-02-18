// templates/component/Card.js

import cn from 'classnames'
import { FC, ReactNode } from 'react'

import s from './Card.module.css'

export interface CardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

const Card: FC<CardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(s.col, className)}>
      <div className={s.header}>
        {icon}
        <h2>{title}</h2>
      </div>
      <div className={s.content}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
