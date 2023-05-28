import { cva } from 'class-variance-authority'

export const ButtonStyle = cva(['uppercase'], {
  variants: {
    intent: {
      primary: [
        'bg-transparent',
        'text-primary',
        'border',
        'border-primary',
        'hover:bg-primary',
        'hover:text-white',
      ],
      secondary: [
        'bg-primary',
        'text-white',
        'hover:bg-transparent',
        'hover:text-primary',
        'hover:border-primary',
      ],
    },
    size: {
      small: ['text-sm', 'px-2', 'py-1'],
      medium: ['text-base', 'px-4', 'py-2'],
      large: ['text-lg', 'px-6', 'py-3'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})
