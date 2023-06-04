import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations,
          null,
          4
        )}, Path: ${path}`
      )
    )

  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
    console.error(`results: ${JSON.stringify(networkError.message, null, 4)}`)
  }
})

export default errorLink
