import { cva } from 'class-variance-authority'

export const SuccessStoriesStyle = cva('grid lg:grid-cols-5 gap-4')

export const ListStyle = cva('lg:col-span-4 flex flex-col gap-32')

export const ListItemStyle = cva('lg:grid grid-cols-5 gap-16')

export const HeadingStyle = cva('text-4xl')

export const ImageStyle = cva('opacity-25')

export const ImageContainerStyle = cva('relative col-span-2')

export const OverlayStyle = cva(
  'absolute bottom-0 px-4 w-full font-extralight -translate-x-4 lg:translate-x-0'
)

export const SubheadingStyle = cva('text-primary text-lg')

export const TagsStyle = cva('normal-case')

export const BubblesStyle = cva(
  'col-span-3 flex flex-wrap gap-8 justify-evenly'
)

export const BubbleContainerStyle = cva('max-w-min')

export const BubbleStyle = cva(
  [
    'w-24 h-24 rounded-full grid place-content-center m-4 text-3xl',
    'bg-gradient-to-b',
    'outline outline-white outline-offset-4',
  ],
  {
    variants: {
      visibility: {
        invisible: 'hidden lg:block lg:invisible',
      },
    },
  }
)

export const BubbleCaptionStyle = cva('uppercase text-xs text-center')
