import { type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { ButtonStyle } from './ButtonStyle'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyle> {}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  intent,
  size,
  children,
  ...props
}) => {
  return (
    <button
      className={ButtonStyle({
        intent,
        size,
      })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
