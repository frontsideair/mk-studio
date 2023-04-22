import Card from '@components/common/Card/Card'
import Browser from '@components/icons/Browser/Browser'
import MachWorld from '@components/icons/MachWorld/MachWorld'
import Server from '@components/icons/Server/Server'
import ShopifyBasket from '@components/icons/ShopifyBasket/ShopifyBasket'
import Wordpress from '@components/icons/Wordpress/Wordpress'
import cn from 'classnames'
import { FC } from 'react'

import s from './TrustedPartners.module.css'

export interface TrustedPartnersProps {}

const TrustedPartners: FC<TrustedPartnersProps> = () => {
  return (
    <div className={s.root}>
      <div className={cn(s.heading, s.col)}>
        <h2>
          <span className={cn(s.h2, 'headingTreatmentPrimary')}>Partners</span>
          <br />
          <span className={cn(s.h2, 'headingTreatmentPrimary')}>We Trust</span>
        </h2>
      </div>
      <div className={s.col}>
        <Card
          title="MACH Alliance Enterprise MACHified"
          icon={<MachWorld />}
          description="An open and best-of-breed enterprise technology ecosystem. Agile, nimble and always up-to-date – it’s the new way to think about and do business."
          tags={[
            'Microservices based',
            'API-first',
            'Cloud-native',
            'SaaS',
            'Headless',
          ]}
        />
      </div>
      <div className={s.col}>
        <Card
          title="Shopify Partner"
          icon={<ShopifyBasket />}
          description="Solutions for building and migrating stores, building apps to run businesses better and earn more revenue. A partnership to help you truly scale up. "
          tags={['Headless E-commerce', 'APIs', 'Custom Apps']}
        />
      </div>
      <div className={s.col}>
        <Card
          title="Pantheon Partner"
          icon={<Server />}
          description="You want speed? Pantheon’s high-performance WebOps platform offers the fastest platform on the planet for Drupal and WordPress sites. Yes, really."
          tags={[
            'WordPress Maintenance',
            'Wordpress Custom Development',
            'DevOpps',
          ]}
        />
      </div>
      <div className={s.col}>
        <Card
          title="BigCommerce Partner"
          icon={<Browser />}
          description="A global network of certified experts. Agency partners  + Affiliate partners + Technology partners. All brought together to help brands like yours innovate and succeed."
          tags={['Headless E-commerce', 'Custom Themes', 'Custom Apps']}
        />
      </div>
      <div className={s.col}>
        <Card
          icon={<Wordpress />}
          title="WP Engine Partner"
          description="1.2 million websites around the world trust WP Engine as their host. They offer tools & expertise to help brands, agencies and developers increase the power of WordPress."
          tags={[
            'WordPress Maintenance',
            'Wordpress Custom Development',
            'DevOpps',
          ]}
        />
      </div>
      <div className={s.col}></div>
    </div>
  )
}

export default TrustedPartners
