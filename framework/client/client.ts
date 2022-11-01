import { ApolloClient } from '@apollo/client';
import apolloConfig from './apolloConfig';

function client(config = {}, initialState = {}): ApolloClient<any> {
  return new ApolloClient({ ...apolloConfig(initialState), ...config });
}

export default client;
