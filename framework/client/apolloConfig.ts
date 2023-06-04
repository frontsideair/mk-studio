import { InMemoryCache } from '@apollo/client'

import link from './link'

const apolloConfig = (initialState: any) => {
  return {
    connectToDevTools: true,
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache({
      //   typePolicies: {
      //     Query: {
      //       fields: {
      //         allPages: relayStylePagination(),
      //       },
      //     },
      //   },
    }).restore(initialState || {}),
  }
}

export default apolloConfig
