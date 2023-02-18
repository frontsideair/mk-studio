// templates/component/TemplateName.js

import { FC } from 'react'

import s from './TemplateName.module.css'

export interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => {
  return <div className={s.root}></div>
}

export default TemplateName
