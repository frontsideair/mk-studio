import BackgroundGridContainer from '@components/common/BackgroundGridContainer/BackgroundGridContainer'
import Card from '@components/common/Card'
import API from '@components/icons/API/Api'
import CMS from '@components/icons/CMS/Cms'
import Desktop from '@components/icons/Desktop'
import Email from '@components/icons/Email/Email'
import LCD from '@components/icons/LCD/Lcd'
import Management from '@components/icons/Management/Management'
import OnlineShopping from '@components/icons/OnlineShopping/OnlineShopping'
import Optimization from '@components/icons/Optimization/Optimization'
import Screen from '@components/icons/Screen'
import Search from '@components/icons/Search/Search'
import Smartphone from '@components/icons/Smartphone/Smartphone'
import Store from '@components/icons/Store/Store'
import WebPage from '@components/icons/WebPage/WebPage'
import World from '@components/icons/World'
import FeaturedContent from '@components/modules/FeaturedContent'
import FooterContactForm from '@components/modules/FooterContactForm/FooterContactForm'
import Container from '@components/ui/Container'
import Hero from '@components/ui/Hero'
import cn from 'classnames'
import { FC } from 'react'

import s from './ServicesPage.module.css'

export interface ServicesPageProps {}

const ServicesPage: FC<ServicesPageProps> = () => {
  return (
    <div className={s.root}>
      <Hero
        firstLine="Let's make your"
        secondLine="creative vision a reality"
      />

      <BackgroundGridContainer
        bgColor="black"
        direction="down"
        initialHeight={240}
      />

      <main id="main">
        <section>
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
        </section>

        <section>
          <FeaturedContent
            title="MACH Principles"
            direction="down"
            content={[
              {
                title: 'Microservices',
                description:
                  'Specific business functions that are independently developed, deployed and managed.',
              },
              {
                title: 'API',
                description:
                  'All functionality is through an API, allowing two or more apps or services to bridge together.',
              },
              {
                title: 'Cloud-native',
                description:
                  'Software-as-a-service (SaaS) leverages the full capabilities of the cloud – including infinite scaling of highly available resources.',
              },
              {
                title: 'Headless',
                description:
                  'The front-end UX is completely decoupled from the back-end logic, allowing for greater design and development freedom.',
              },
            ]}
            extraContent={<MachDiagram />}
          />
        </section>

        <section>
          <Container className={s.container}>
            <div className={s.featuredRow}>
              <Card
                className={s.featuredCol}
                icon={<API />}
                title="API Intergrations"
                description="One step ahead of the latest developments to create seamless integration of content, APIs, and commerce via headless commerce. The result? Enjoyable shopping experiences across all digital touchpoints."
              />
              <Card
                className={s.featuredCol}
                icon={<CMS />}
                title="CMS"
                description="Custom-built CMS solutions from application development and plugins to integrations and migrations – across all types of industries. Just ask."
              />
              <Card
                className={s.featuredCol}
                icon={<Optimization />}
                title="Site Maintenance"
                description="Our experts provide ongoing maintenance, monitoring, and support to ensure that your custom websites and apps are optimized – including testing and debugging, security protocol updates, database maintenance, SEO and more."
              />
            </div>
          </Container>
        </section>

        <section>
          <FooterContactForm />
        </section>
      </main>
    </div>
  )
}

function MachDiagram() {
  const article = 'border-2 border-white p-4'
  const figure = 'flex flex-col items-center justify-center aspect-[4/3] p-2'
  const figcaption = 'text-sm'

  return (
    <div className="grid lg:grid-cols-3 text-center gap-8">
      <article className={cn(article, 'lg:col-span-3')}>
        <h3>Digital experiences</h3>
        <div className="grid lg:grid-cols-4">
          <figure className={figure}>
            <Store />
            <figcaption className={figcaption}>In-store</figcaption>
          </figure>
          <figure className={figure}>
            <LCD />
            <figcaption className={figcaption}>Web</figcaption>
          </figure>
          <figure className={figure}>
            <Smartphone />
            <figcaption className={figcaption}>Mobile</figcaption>
          </figure>
          <figure className={figure}>
            <Email />
            <figcaption className={figcaption}>Email</figcaption>
          </figure>
        </div>
      </article>

      <article className={cn(article, 'lg:col-span-3')}>
        <h3>Experience management</h3>
      </article>

      <article className={cn(article)}>
        <h3>API</h3>
        <figure className={figure}>
          <CMS />
          <figcaption className={figcaption}>CMS</figcaption>
        </figure>
      </article>

      <article className={cn(article)}>
        <h3>API</h3>
        <figure className={figure}>
          <OnlineShopping />
          <figcaption className={figcaption}>Ecommerce</figcaption>
        </figure>
      </article>

      <article className={cn(article)}>
        <h3>API</h3>
        <figure className={figure}>
          <Search />
          <figcaption className={figcaption}>Search</figcaption>
        </figure>
      </article>

      <article className={cn(article)}>
        <figure className={figure}>
          <WebPage />
          <figcaption className={figcaption}>DAM</figcaption>
        </figure>
      </article>

      <article className="hidden lg:block" />

      <article className={cn(article)}>
        <figure className={figure}>
          <Management />
          <figcaption className={figcaption}>CRM</figcaption>
        </figure>
      </article>
    </div>
  )
}

export default ServicesPage
