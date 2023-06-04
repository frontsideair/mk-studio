import Footer from '../Footer'
import Header from '../Header'
import { FC, ReactNode } from 'react'
interface LayoutProps {
  children: ReactNode
  preview?: boolean
}
const Layout: FC<LayoutProps> = ({ children, preview }) => {
  return (
    <>
      {/* @ts-expect-error Async Server Component: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
