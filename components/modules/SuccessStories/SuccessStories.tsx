// templates/component/SuccessStories.js

import LearnMore from '@components/ui/LearnMore/LearnMore'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import {
  BubbleCaptionStyle,
  BubbleContainerStyle,
  BubblesStyle,
  BubbleStyle,
  HeadingStyle,
  ImageContainerStyle,
  ImageStyle,
  ListItemStyle,
  ListStyle,
  OverlayStyle,
  SubheadingStyle,
  SuccessStoriesStyle,
  TagsStyle,
} from './SuccessStoriesStyle'

export interface SuccessStoriesProps {
  stories: {
    id: string
    image: {
      src: StaticImageData
      alt: string
    }
    title: string
    tags: string[]
    href: string
    bubbles: ({
      id: string
      gradient: {
        from: string
        to: string
      }
      innerText: string
      caption: string
    } | null)[]
  }[]
}

const SuccessStories: FC<SuccessStoriesProps> = ({ stories }) => {
  return (
    <div className={SuccessStoriesStyle({})}>
      <h2 className={HeadingStyle()}>Success Stories</h2>
      <ul className={ListStyle()}>
        {stories.map((story) => (
          <li key={story.id} className={ListItemStyle()}>
            <div className={ImageContainerStyle()}>
              <Image
                src={story.image.src}
                alt={story.image.alt}
                height={356}
                className={ImageStyle()}
              />
              <LearnMore link={story.href} className={OverlayStyle()}>
                <h3 className={SubheadingStyle()}>{story.title}</h3>
                <span className={TagsStyle()}>{story.tags.join(', ')}</span>
              </LearnMore>
            </div>
            <ul className={BubblesStyle()}>
              {story.bubbles.map((bubble, index) => (
                <li key={bubble?.id ?? index}>
                  <figure className={BubbleContainerStyle()}>
                    <div
                      style={{
                        background: `linear-gradient(180deg, ${bubble?.gradient.from} 0%, ${bubble?.gradient.to} 100%)`,
                      }}
                      className={BubbleStyle({
                        visibility: bubble ? null : 'invisible',
                        // NOTE: I couldn't get this done with tailwind and arbitrary values
                        // className: `from-[${bubble.gradient.from}] to-[${bubble.gradient.to}]`,
                      })}
                    >
                      {bubble?.innerText}
                    </div>
                    <figcaption className={BubbleCaptionStyle()}>
                      {bubble?.caption}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SuccessStories
