import { gql } from '@apollo/client'

const CLIENTS_QUERY = gql`
  query ClientsQuery {
    clients: allClient {
      name
      slug {
        current
      }
      logo {
        asset {
          url
          altText
          metadata {
            dimensions {
              width
              height
            }
          }
        }
      }
    }
  }
`

export default CLIENTS_QUERY
