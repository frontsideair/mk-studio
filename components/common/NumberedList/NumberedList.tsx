// templates/component/NumberedList.js

import { VariantProps } from 'class-variance-authority'
import { FC } from 'react'

import {
  DescriptionStyle,
  H3Style,
  ListItemStyle,
  NumberedListStyle,
  SubheadingStyle,
} from './NumberedListStyle'

export interface NumberedListProps
  extends VariantProps<typeof NumberedListStyle> {
  content?: {
    title: string
    description: string
  }[]
  className?: string
}

const NumberedList: FC<NumberedListProps> = ({ content, className }) => {
  return (
    <ol className={NumberedListStyle({ className })}>
      {content?.map((item) => (
        <li key={item.title} className={ListItemStyle()}>
          <h3 className={H3Style()}>
            <span className={SubheadingStyle()}>{item.title}</span>
          </h3>
          <p className={DescriptionStyle()}>{item.description}</p>
        </li>
      ))}
    </ol>
  )
}

export default NumberedList
