import Arrow from '@components/ui/Arrow'
import Container from '@components/ui/Container'

import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.root}>
      <Container className={s.container}>
        <div className={s.arrow}>
          <Arrow direction="up" /> <span>Back to top</span>
        </div>
        <p className={s.copyright}>© {new Date().getFullYear()} Monkey Kode</p>
      </Container>
    </footer>
  )
}

export default Footer
