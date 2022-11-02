import { from } from '@apollo/client'

// import authLink from './authLink';
import errorLink from './errorLink'
import httpLink from './httpLink'
// import variableInjectionLink from './variableInjectionLink';

const link = from([
  errorLink,
  // authLink,
  // variableInjectionLink,
  httpLink,
])

export default link
