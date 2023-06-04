import { initializeApollo } from '@framework/client'
import MENU_QUERY from '@framework/data/queries/MENU_QUERY'

import Nav from '../Nav/Nav'
import s from './Header.module.css'

const getNavItems = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: MENU_QUERY,
  })
  return data?.menu
}
const Header = async () => {
  const menu = await getNavItems()
  return (
    <header className={s.root}>
      <Nav menu={menu} />
    </header>
  )
}
export default Header
