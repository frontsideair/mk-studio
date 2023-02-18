import Container from '@components/ui/Container'
import { FC } from 'react'

import Arrow from '../Arrow'
import s from './Hero.module.css'

interface HeroProps {
  firstLine: string
  secondLine: string
  height?: string
  animation?: boolean
}

const Hero: FC<HeroProps> = ({
  firstLine,
  secondLine,
  height = '676px',
  animation = false,
}) => {
  return (
    <Container className={s.heroWrap}>
      <div className={s.hero}>
        <h1>{firstLine}</h1>
        <h1>{secondLine}</h1>
      </div>
      <Arrow />
    </Container>
  )
}

export default Hero
