import Link from 'next/link'

import s from './Logo.module.css'

interface LogoProps {
  className?: string
}
const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={'/'} className={s.root}>
      <div className={s.root}>
        <span>Monkey</span>
        <span>Kode</span>
      </div>
    </Link>
  )
}
export default Logo
