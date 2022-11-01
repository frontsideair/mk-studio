import { ApolloProvider } from '@apollo/client'
import Footer from '@components/common/Footer'
import Header from '@components/common/Header'
import { useApollo } from 'framework/client'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  const apolloClient = useApollo({})

  return (
    <html lang="en">
      <head>
        <title>Monkey Kode - Let the Monkey code for you.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      {/* <ApolloProvider client={apolloClient}> */}
      <body>{children}</body>
      <Footer />
      {/* </ApolloProvider> */}
    </html>
  )
}

export default RootLayout
