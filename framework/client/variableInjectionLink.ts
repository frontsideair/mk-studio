import { ApolloLink, Observable } from '@apollo/client';
import injectVariables from './injectVariables';

const variableInjectionLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((oper) => injectVariables(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

export default variableInjectionLink;
