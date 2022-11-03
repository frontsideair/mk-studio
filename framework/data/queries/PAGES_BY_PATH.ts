import { gql } from '@apollo/client';

const PAGE_PATHS_QUERY = gql`
  query PagePaths {
    allPage {
      slug {
        current
        source
      }
    }
  }
`;

export default PAGE_PATHS_QUERY;
