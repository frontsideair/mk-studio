// templates/component/Card.js

import cn from 'classnames'
import { FC, ReactNode } from 'react'

import s from './Card.module.css'

export interface CardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
  tags?: string[]
}

const Card: FC<CardProps> = ({ icon, title, description, className, tags }) => {
  return (
    <div className={cn(s.col, className)}>
      <div className={s.header}>
        {icon}
        <h2>{title}</h2>
      </div>
      <div className={s.content}>
        <p>{description}</p>
      </div>
      {tags?.length > 0 ? (
        <div className={s.footer}>
          <hr className={s.hr} />
          {tags?.map((tag, index) => (
            <span key={tag} className={s.tag}>
              {tag}
              {index < tags.length - 1 && index < tags.length - 2 ? (
                <>, </>
              ) : index < tags.length - 1 ? (
                <>, and </>
              ) : null}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Card
