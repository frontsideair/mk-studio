// templates/component/FeaturedPartners.js

import BackgroundGrid from '@components/common/BackgroundGrid'
import Arrow from '@components/ui/Arrow/Arrow'
import { VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import {
  ContentStyle,
  FeaturedPartnersStyle,
  LinkStyle,
  ListItemStyle,
} from './FeaturedPartnersStyle'

export interface FeaturedPartnersProps
  extends VariantProps<typeof FeaturedPartnersStyle> {
  content: {
    id: string
    image: {
      src: string
      alt: string
    }
    href: string
    description: string
  }[]
}

const FeaturedPartners: FC<FeaturedPartnersProps> = ({ content }) => {
  return (
    <div className={FeaturedPartnersStyle()}>
      <ul className={ContentStyle()}>
        {content.map(({ id, image, href, description }) => (
          <li key={id} className={ListItemStyle()}>
            <figure>
              <Image
                loading="lazy"
                src={image.src}
                alt={image.alt}
                width={480}
                height={120}
              />
            </figure>
            <p>{description}</p>
            <Link href={{ pathname: href }} className={LinkStyle()}>
              Hire us
              <Arrow direction="right" />
            </Link>
          </li>
        ))}
      </ul>
      <BackgroundGrid bgColor="rgb(43, 34, 114)" direction="up" />
    </div>
  )
}

export default FeaturedPartners
