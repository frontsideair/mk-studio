// templates/component/TemplateName.js

import { VariantProps } from 'class-variance-authority'
import { FC, PropsWithChildren } from 'react'

import { TemplateNameStyle } from './TemplateNameStyle'

export interface TemplateNameProps
  extends VariantProps<typeof TemplateNameStyle> {}

const TemplateName: FC<PropsWithChildren<TemplateNameProps>> = ({
  children,
}) => {
  return <div className={TemplateNameStyle({})}>{children}</div>
}

export default TemplateName
