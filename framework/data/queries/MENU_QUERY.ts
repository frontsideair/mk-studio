import { gql } from '@apollo/client'

const MENU_QUERY = gql`
  query MenuQuery {
    menu: allMenu(where: { slug: { current: { eq: "primary-menu" } } }) {
      title
      items {
        title
        links {
          target {
            title
            slug {
              current
              source
            }
          }
        }
        target {
          title
          slug {
            current
            source
          }
        }
      }
    }
  }
`

export default MENU_QUERY
