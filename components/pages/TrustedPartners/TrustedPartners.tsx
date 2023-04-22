import Card from '@components/common/Card/Card'
import MachWorld from '@components/icons/MachWorld/MachWorld'
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
      <div className={s.col}></div>
      <div className={s.col}></div>
      <div className={s.col}></div>
      <div className={s.col}></div>
    </div>
  )
}

export default TrustedPartners
