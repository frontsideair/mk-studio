import { cva } from 'class-variance-authority'

import s from './NumberedList.module.css'

export const NumberedListStyle = cva(s['custom-numbering-root'])

export const H3Style = cva([
  s['custom-numbering-item'],
  'relative border-t border-primary',
  'before:absolute before:left-0 before:-mx-10 before:flex before:h-full before:items-center before:text-sm before:font-black before:text-primary',
])

export const ListItemStyle = cva('pl-12 pt-8 lg:pt-4')

export const SubheadingStyle = cva('inline-block pt-1')

export const DescriptionStyle = cva('font-extralight text-lg')
