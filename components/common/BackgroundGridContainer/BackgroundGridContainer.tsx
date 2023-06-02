// templates/component/BackgroundGridContainer.js

import BackgroundGrid, {
  BackgroundGridProps,
} from '@components/common/BackgroundGrid/BackgroundGrid'
import { VariantProps } from 'class-variance-authority'
import { FC, PropsWithChildren } from 'react'

import { BackgroundGridContainerStyle } from './BackgroundGridContainerStyle'

export interface BackgroundGridContainerProps
  extends VariantProps<typeof BackgroundGridContainerStyle>,
    BackgroundGridProps {}

const BackgroundGridContainer: FC<
  PropsWithChildren<BackgroundGridContainerProps>
> = (props) => {
  return (
    <div className={BackgroundGridContainerStyle()}>
      <BackgroundGrid {...props} />
    </div>
  )
}

export default BackgroundGridContainer
