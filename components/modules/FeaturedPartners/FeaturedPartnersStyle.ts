import { cva } from 'class-variance-authority'

export const FeaturedPartnersStyle = cva('relative p-20')

export const ContentStyle = cva(
  'relative pointer-events-none z-10 lg:grid grid-cols-2 gap-20'
)

export const ListItemStyle = cva('flex flex-col gap-8')
