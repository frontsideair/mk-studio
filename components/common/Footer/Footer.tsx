import Logo from '@components/icons/Logo/Logo'
import Arrow from '@components/ui/Arrow'
import Container from '@components/ui/Container'
import Link from 'next/link'

import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.root}>
      <Container className={s.container}>
        <Link href="/" className="flex-1">
          <Logo />
        </Link>
        <div className={s.arrow}>
          <Arrow direction="up" />{' '}
          <span className="text-primary uppercase absolute w-max left-full top-8">
            Back to the top
          </span>
        </div>
        <div className="flex-1">
          <p className={s.copyright}>
            © {new Date().getFullYear()} &middot; Monkey Kode
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
