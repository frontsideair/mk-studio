import FooterContactForm from '@components/FooterContactForm'
import FeaturedClients from '@components/modules/FeaturedClients/FeaturedClients'
import FeaturedContent from '@components/modules/FeaturedContent'
import FeaturedText from '@components/modules/FeaturedText'
import TrustedPartners from '@components/pages/TrustedPartners/TrustedPartners'
import Container from '@components/ui/Container'
import Hero from '@components/ui/Hero/Hero'
import { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <>
      <Hero
        firstLine="Changing the world."
        secondLine="One piece of code at a time."
      />

      <main id="main">
        <section>
          <FeaturedContent
            title="Building future-forward e-commerce solutions"
            link="/services"
            content={[
              {
                title: 'Customization',
                description:
                  'Bespoke web solutions and apps, built to your exact specs, or better.',
              },
              {
                title: 'Innovation',
                description:
                  '“Hey, we didn’t even think of that.” (We did.) Multichannel. Web3. Metaverse. ',
              },
              {
                title: 'Expertise',
                description:
                  'We hire the best developers, we work with the best partners. For 15+ years. ',
              },
            ]}
          />
        </section>
        <section>
          <Container>
            <FeaturedText
              title="Innovative"
              imageSrc="/goldenstate-preview.jpg"
              imageAlt="Golden State Website"
              text="<p>At MonkeyKode we’re passionate about customization. That’s why we offer bespoke websites and apps, innovative customized e-commerce solutions and – soon – Web3 development. We hope you’ll enjoy our smart, innovative, scalable approaches and join us in creating online experiences designed for the future.</p>
              <p>We build e-commerce solutions for merchants of all sizes embracing the MACH ecosystem – Microservices based, API-first, Cloud-native SaaS and Headless. OK, in simple terms – we help you  offer a better digital experience to your customers, whether they’re on a phone, a watch, POS or the metaverse. Pluggable. Scalable. Future ready. Are you ready?</p>"
            />
          </Container>
        </section>
        <section>
          {/* @ts-expect-error Async Server Component */}
          <FeaturedClients />
        </section>
        <section>
          <TrustedPartners />
        </section>
        <section>
          <FooterContactForm />
        </section>
      </main>
    </>
  )
}

export default Page
