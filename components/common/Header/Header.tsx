// import { IndexQuery_menu } from 'types/IndexQuery';

import Logo from '../../ui/Logo'
import Nav from '../Nav/Nav'
import s from './Header.module.css'
interface HeaderProps {
  menu: any[]
}
const Header = ({ menu }: HeaderProps) => {
  return (
    <header className={s.root}>
      <Nav menu={menu} />
    </header>
  )
}
export default Header
