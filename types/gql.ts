/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query ClientsQuery {\n    clients: allClient(limit: 5) {\n      name\n      logo {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ClientsQueryDocument,
    "\n  query MenuQuery {\n    menu: allMenu(where: { slug: { current: { eq: \"primary-menu\" } } }) {\n      title\n      items {\n        title\n        links {\n          target {\n            title\n            slug {\n              current\n              source\n            }\n          }\n        }\n        target {\n          title\n          slug {\n            current\n            source\n          }\n        }\n      }\n    }\n  }\n": types.MenuQueryDocument,
    "\n  query PagePaths {\n    allPage {\n      slug {\n        current\n        source\n      }\n    }\n  }\n": types.PagePathsDocument,
    "\n  query PagesBySlug($slug: String!) {\n    page: allPage(where: { slug: { current: { eq: $slug } } }) {\n      title\n      slug {\n        current\n        source\n      }\n    }\n    menu: allMenu(where: { title: { eq: \"Primary Menu\" } }) {\n      title\n      items {\n        title\n        links {\n          target {\n            title\n            slug {\n              current\n              source\n            }\n          }\n        }\n        target {\n          title\n          slug {\n            current\n            source\n          }\n        }\n      }\n    }\n  }\n": types.PagesBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ClientsQuery {\n    clients: allClient(limit: 5) {\n      name\n      logo {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ClientsQuery {\n    clients: allClient(limit: 5) {\n      name\n      logo {\n        asset {\n          url\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MenuQuery {\n    menu: allMenu(where: { slug: { current: { eq: \"primary-menu\" } } }) {\n      title\n      items {\n        title\n        links {\n          target {\n            title\n            slug {\n              current\n              source\n            }\n          }\n        }\n        target {\n          title\n          slug {\n            current\n            source\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MenuQuery {\n    menu: allMenu(where: { slug: { current: { eq: \"primary-menu\" } } }) {\n      title\n      items {\n        title\n        links {\n          target {\n            title\n            slug {\n              current\n              source\n            }\n          }\n        }\n        target {\n          title\n          slug {\n            current\n            source\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PagePaths {\n    allPage {\n      slug {\n        current\n        source\n      }\n    }\n  }\n"): (typeof documents)["\n  query PagePaths {\n    allPage {\n      slug {\n        current\n        source\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PagesBySlug($slug: String!) {\n    page: allPage(where: { slug: { current: { eq: $slug } } }) {\n      title\n      slug {\n        current\n        source\n      }\n    }\n    menu: allMenu(where: { title: { eq: \"Primary Menu\" } }) {\n      title\n      items {\n        title\n        links {\n          target {\n            title\n            slug {\n              current\n              source\n            }\n          }\n        }\n        target {\n          title\n          slug {\n            current\n            source\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query PagesBySlug($slug: String!) {\n    page: allPage(where: { slug: { current: { eq: $slug } } }) {\n      title\n      slug {\n        current\n        source\n      }\n    }\n    menu: allMenu(where: { title: { eq: \"Primary Menu\" } }) {\n      title\n      items {\n        title\n        links {\n          target {\n            title\n            slug {\n              current\n              source\n            }\n          }\n        }\n        target {\n          title\n          slug {\n            current\n            source\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;