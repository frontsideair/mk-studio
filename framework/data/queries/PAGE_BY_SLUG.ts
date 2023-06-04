import { gql } from '@apollo/client'

const PAGES_BY_SLUG_QUERY = gql`
  query PagesBySlug($slug: String!) {
    page: allPage(where: { slug: { current: { eq: $slug } } }) {
      title
      slug {
        current
        source
      }
    }
    menu: allMenu(where: { title: { eq: "Primary Menu" } }) {
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

export default PAGES_BY_SLUG_QUERY
