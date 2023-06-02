import BackgroundGridContainer from '@components/common/BackgroundGridContainer/BackgroundGridContainer'
import NumberedList from '@components/common/NumberedList/NumberedList'
import FeaturedPartners from '@components/modules/FeaturedPartners/FeaturedPartners'
import FeaturedText from '@components/modules/FeaturedText'
import FooterContactForm from '@components/modules/FooterContactForm/FooterContactForm'
import SuccessStories from '@components/modules/SuccessStories/SuccessStories'
import Container from '@components/ui/Container'
import Hero from '@components/ui/Hero'
import bigcommerceImage from '@images/bigcommerce.png'
import diversImage from '@images/divers-direct.png'
import hoodhatImage from '@images/hood-preview.jpg'
import shopifyImage from '@images/shopify.png'
import { FC } from 'react'

import { MainStyle, NumberedListStyle } from './HeadlessEcommercePageStyle'

export interface HeadlessEcommercePageProps {}

const headlessEcommerceList = [
  {
    title: 'Headless Ecommerce',
    description:
      'Headless creates freedom for developers and incredible shopping for customers.',
  },
  {
    title: 'Complex API integrations',
    description:
      'Robust API integrations not only for shopping, but for voice, watches and wearables – all IoT.',
  },
  {
    title: 'ERP integrations',
    description:
      'Smart, scalable ERP systems for POS, mobile and web-based platforms.',
  },
  {
    title: 'Custom Checkouts',
    description:
      'Cart experiences designed to your specific needs – and those of your customer.',
  },
  {
    title: 'Multichannel services/Omnichannel sales',
    description:
      'We make it easy for customers to convert on their favorite device, with their favorite method of payment.',
  },
  {
    title: 'Social Commerce',
    description:
      'Make your customers stop scrolling and start shopping your brand on social.',
  },
  {
    title: 'Ecommerce Analytics/Pixel Optimization',
    description:
      'Track conversions, optimize ads and target better for future marketing and remarketing.',
  },
  {
    title: 'Social Analytics',
    description:
      'Monitor, measure and interpret digital interactions in your social communities.',
  },
  {
    title: 'Developing a shoppable attribution model',
    description:
      'Learn which touchpoints lead to sales and conversion so you can better leverage your brand strengths.',
  },
  {
    title: 'Social Chat',
    description:
      'Up your customer service, engagement and brand persona with social chat capabilities.',
  },
  {
    title: 'Optimization for Search',
    description:
      'Get page 1 search engine results with strategic content optimization.',
  },
  {
    title: 'B2B setup solutions',
    description:
      'We work with the most coveted, knowledgeable B2B partners in the ecommerce space.',
  },
]

const featuredPartners = [
  {
    id: 'shopify',
    description:
      'As a Shopify Partner, Monkeykode has worked with some of the best Shopify stores and helped businesses scale on Shopify like never before. We have handled large catalogs, b2b, custom private apps, ERP integrations, and many more enterprise features on Shopify.',
    href: '/shopify',
    image: {
      src: shopifyImage,
      alt: 'Shopify',
    },
  },
  {
    id: 'bigcommmerce',
    description:
      'Monkeykode has worked with BigCommerce as a partner to grow businesses on the platform for both B2C and B2B use cases. BigCommerce has proven to be an excellent solution that captures high quality functionality. Let us help you implement BigCommerce for a wide range of use cases.',
    href: '/bigcommerce',
    image: {
      src: bigcommerceImage,
      alt: 'BigCommerce',
    },
  },
]

const successStories = [
  {
    id: 'divers-direct',
    title: 'Divers Direct',
    tags: [
      'API',
      'BigCommerce',
      'Custom Theme',
      'Ecommerce',
      'Headless',
      'React',
    ],
    href: '/portfolio/divers-direct',
    image: {
      src: diversImage,
      alt: 'Divers Direct',
    },
    bubbles: [
      {
        id: 'performance',
        gradient: { from: '#EA357F', to: '#E35613' },
        innerText: '200x',
        caption: 'Performance 200x plus increase',
      },
      {
        id: 'web-vitals',
        gradient: { from: '#2B2272', to: '#00000000' },
        innerText: '100+',
        caption: 'Web Vitals score from 42 to 100',
      },
      {
        id: 'bounce-rate',
        gradient: { from: '#2B2272', to: '#EA357F' },
        innerText: '88%+',
        caption: 'Bounce rate: 87.34%',
      },
      {
        id: 'sessions',
        gradient: { from: '#E55029', to: '#2B227200' },
        innerText: '78%+',
        caption: 'Increased number of sessions: 77.96%',
      },
      {
        id: 'page-views',
        gradient: { from: '#2B227200', to: '#EA357F' },
        innerText: '66%+',
        caption: 'Increased page views: 66.30%',
      },
    ],
  },
  {
    id: 'hoodhat',
    title: 'Hoodhat',
    tags: ['API', 'Ecommerce', 'Liquid', 'Shopify'],
    href: '/portfolio/hoodhat',
    image: {
      src: hoodhatImage,
      alt: 'Hoodhat',
    },
    bubbles: [
      {
        id: 'revenue',
        gradient: { from: '#00000000', to: '#2B2272' },
        innerText: '40x',
        caption: 'Increased revenue: 40x',
      },
      {
        id: 'new-users',
        gradient: { from: '#8A245C', to: '#00000000' },
        innerText: '321+%',
        caption: 'New users: 321.38%',
      },
      null,
      {
        id: 'new-pageviews',
        gradient: { from: '#E55029', to: '#2B227200' },
        innerText: '487%',
        caption: 'New Pageviews: 487.38%',
      },
      {
        id: 'new-sessions',
        gradient: { from: '#EA357F', to: '#E35613' },
        innerText: '350%',
        caption: 'New sessions: 350.28%',
      },
    ],
  },
]

const HeadlessEcommercePage: FC<HeadlessEcommercePageProps> = () => {
  return (
    <div>
      <Hero firstLine="Modern headless" secondLine="ecommerce solutions" />

      <BackgroundGridContainer
        bgColor="black"
        direction="down"
        initialHeight={240}
      />

      <main id="main" className={MainStyle()}>
        <section>
          <Container>
            <FeaturedText
              title="Ecommerce"
              imageSrc={hoodhatImage.src}
              imageAlt="Hood Hat Website"
              text="Slick, clickable, tappable sites. Bespoke shopping cart experiences that make checkout a breeze. AI-powered chatbots that redefine online shopping and customer service. Rely on our technical expertise in ecommerce to help bolster your brand, engage your audience and optimize conversions – without ever breaking a sweat."
              showArrow={false}
            />
          </Container>
        </section>

        <section>
          <Container>
            <NumberedList
              className={NumberedListStyle()}
              content={headlessEcommerceList}
            />
          </Container>
        </section>

        <section>
          <FeaturedPartners content={featuredPartners} />
        </section>

        <section>
          <Container>
            <SuccessStories stories={successStories} />
          </Container>
        </section>

        <section>
          <FooterContactForm />
        </section>
      </main>
    </div>
  )
}

export default HeadlessEcommercePage
