'use client'

import BackgroundGrid from '@components/common/BackgroundGrid'
import cn from 'classnames'
import Image from 'next/image'

import s from './FeaturedRow.module.css'

interface FeaturedRowProps {
  title?: string
  images?: any[]
}

export default function FeauturedRow({ title, images = [] }: FeaturedRowProps) {
  return (
    <div className={s.root}>
      <BackgroundGrid bgColor="transparent" direction="down" />
      <div className={cn(s.content)}>
        <div className={cn(s.highlight)}>
          {title && (
            <h2 className={cn(s.heading, 'headingTreatmentSecondary')}>
              {title}
            </h2>
          )}
        </div>
        <ol className={cn(s.ol)}>
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
              <li key={`${name}_${i}`} className={cn(s.li)}>
                <Image
                  loading="lazy"
                  src={url}
                  alt={altText ?? name ?? 'Client Logo'}
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
