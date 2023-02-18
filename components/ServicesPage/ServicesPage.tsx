import BackgroundGrid from '@components/common/BackgroundGrid'
import Card from '@components/common/Card'
import Desktop from '@components/icons/Desktop'
import Screen from '@components/icons/Screen'
import World from '@components/icons/World'
import Container from '@components/ui/Container'
import Hero from '@components/ui/Hero'
import { FC, useState } from 'react'

import s from './ServicesPage.module.css'

export interface ServicesPageProps {}

const ServicesPage: FC<ServicesPageProps> = () => {
  return (
    <div className={s.root}>
      <Hero
        firstLine="Let's make your"
        secondLine="creative vision a reality"
      />
      <div className={s.animatedBg}>
        <BackgroundGrid bgColor="black" direction="down" />
      </div>
      <Container className={s.container}>
        <div className={s.featuredRow}>
          <Card
            className={s.featuredCol}
            icon={<Desktop />}
            title="ECOMMERCE"
            description="We build future-forward e-commerce solutions – shopper-friendly web and mobile apps that will help your business succeed in an ever-changing e-commerce world. All powered by MACH. "
          />
          <Card
            className={s.featuredCol}
            icon={<World />}
            title="FUTURE WEB"
            description="Partner with us for future web technologies, Metaverse, NFT and anything your heart desires. We’ll bring intelligent frameworks that are bold, smart and ready for the future."
          />
          <Card
            className={s.featuredCol}
            icon={<Screen />}
            title="WEB APPS"
            description="Custom web app development that integrates existing applications and optimizes workflow. From back-end development to front-end design. Nothing off-the-shelf – fully customized."
          />
        </div>
      </Container>
    </div>
  )
}

export default ServicesPage
