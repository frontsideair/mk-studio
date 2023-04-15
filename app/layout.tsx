import '@styles/globals.css'

import Footer from '@components/common/Footer'
import Header from '@components/common/Header'
import { Red_Hat_Display } from 'next/font/google'
import { ReactNode } from 'react'

const RedHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
})
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={RedHatDisplay.className}>
      <head>
        <title>Monkey Kode - Let the Monkey code for you.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
