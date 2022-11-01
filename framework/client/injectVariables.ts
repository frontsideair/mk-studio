import { initializeApollo } from 'client';
// import HOME_POPULAR_CATEGORIES from 'framework/api/queries/homePopularCategories';
import queryRequiresVariable from './queryRequiresVariables';

const injectVariables = async (operation) => {
  const client = initializeApollo();
  const variableName = 'popularCategories';
  if (
    queryRequiresVariable({
      variableName,
      operation,
    })
  ) {
    // get the data from query
    // const results = await client.query({
    //   query: HOME_POPULAR_CATEGORIES,
    //   fetchPolicy: 'cache-first',
    // });
    // const categories = results?.data?.settings?.popularCategories;
    // const popularCategories = categories?.split(',').map((id) => {
    //   if (!id) {
    //     return 0;
    //   }
    //   return parseInt(id.trim(), 10);
    // });
    // merge data
    // operation.variables[variableName] = popularCategories;
  }
};

export default injectVariables;
