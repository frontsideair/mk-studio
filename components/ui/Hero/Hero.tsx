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
      <h1 className={s.hero}>
        <span className="headingTreatmentPrimary">{firstLine}</span>
        <span className="headingTreatmentPrimary">{secondLine}</span>
      </h1>
      <Arrow />
    </Container>
  )
}

export default Hero
