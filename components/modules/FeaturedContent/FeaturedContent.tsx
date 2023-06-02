'use client'

import BackgroundGrid from '@components/common/BackgroundGrid'
import { BackgroundGridProps } from '@components/common/BackgroundGrid/BackgroundGrid'
import LearnMore from '@components/ui/LearnMore'
import cn from 'classnames'
import { FC, ReactNode } from 'react'

import s from './FeaturedContent.module.css'

interface FeaturedContentProps extends Pick<BackgroundGridProps, 'direction'> {
  title?: string
  link?: string
  description?: string
  content?: {
    title: string
    description: string
  }[]
  extraContent?: ReactNode
}

const FeaturedContent: FC<FeaturedContentProps> = ({
  title,
  link,
  description,
  content,
  extraContent,
  direction,
}) => {
  return (
    <>
      <div className={s.root}>
        <div className={cn(s.content, 'lg:grid-cols-4 gap-12')}>
          <div className={cn(s.highlight, 'lg:col-span-1')}>
            {title && (
              <h2 className={cn(s.heading, 'headingTreatmentSecondary')}>
                {title}
              </h2>
            )}
            {description && <p>{description}</p>}
            {link && (
              <>
                <LearnMore
                  className={s.learMore}
                  link={link}
                  direction="right"
                />
              </>
            )}
          </div>
          <ol
            className={cn(
              s.ol,
              'lg:grid gap-12',
              extraContent
                ? 'lg:col-start-1 lg:col-end-3 lg:pr-24'
                : 'lg:col-span-3 lg:grid-cols-3'
            )}
          >
            {content?.map((item, i) => (
              <li className={s.item} key={item.title}>
                <h3 className={cn(s.h3, extraContent && 'w-3/4')}>
                  <span className={s.subHeading}>{item.title}</span>
                </h3>
                <p className={s.description}>{item.description}</p>
              </li>
            ))}
          </ol>
          <div className="lg:col-start-3 lg:col-end-5">{extraContent}</div>
        </div>
        <BackgroundGrid bgColor="rgb(43, 34, 114)" direction={direction} />
      </div>
    </>
  )
}

export default FeaturedContent
