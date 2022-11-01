import { gql } from '@apollo/client';

const INDEX_QUERY = gql`
  query IndexQuery {
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
`;

export default INDEX_QUERY;
