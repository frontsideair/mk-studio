import Arrow from '@components/ui/Arrow'
import cn from 'classnames'
import Image from 'next/image'

import s from './FeaturedText.module.css'

interface FeaturedTextProps {
  title: string
  text: string
  imageSrc: string
  imageAlt: string
  titleRepeat?: number
}

const FeaturedText = ({
  title,
  text,
  imageSrc,
  imageAlt,
  titleRepeat = 5,
}: FeaturedTextProps) => {
  return (
    <div className={s.root}>
      <div className={s.feature}>
        <figure className={s.image}>
          <Image
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            width={504}
            height={444}
          />
        </figure>
        <div className={s.heading}>
          {new Array(titleRepeat).fill(0).map((_, i) => (
            <h2
              key={`${title}_${i}`}
              className={cn(s.title, 'headingTreatmentSecondary', {
                [s.title1]: i === 3,
              })}
            >
              {title}
            </h2>
          ))}
        </div>
      </div>
      <div className={s.content}>
        <Arrow direction="down" />
        <div
          className={s.text}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </div>
  )
}

export default FeaturedText
