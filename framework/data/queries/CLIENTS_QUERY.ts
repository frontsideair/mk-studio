import { gql } from '@apollo/client'

const CLIENTS_QUERY = gql`
  query ClientsQuery {
    clients: allClient(limit: 5) {
      name
      logo {
        asset {
          url
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
