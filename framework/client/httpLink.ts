import { createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  // fetch: customFetch,
  uri: process.env.SANITY_GRAPHQL,
  // credentials: 'include',
});

export default httpLink;
