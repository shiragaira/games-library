import * as QueryOperationTypes from '~/schema/api/index';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'src/schema/templates/customCacheHook';
const defaultOptions = {} as const;

export const HomePageDocument = gql`
    query HomePage {
  games {
    id
    title
  }
}
    `;

/**
 * __useHomePageQueryCache__
 *
 * To run a query within a React component, call `useHomePageQueryCache` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQueryCache` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQueryCache({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQueryCache(baseOptions?: ApolloReactHooks.QueryHookOptions<QueryOperationTypes.HomePageQuery, QueryOperationTypes.HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<QueryOperationTypes.HomePageQuery, QueryOperationTypes.HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQueryCache(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QueryOperationTypes.HomePageQuery, QueryOperationTypes.HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<QueryOperationTypes.HomePageQuery, QueryOperationTypes.HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryCacheHookResult = ReturnType<typeof useHomePageQueryCache>;
export type HomePageLazyQueryCacheHookResult = ReturnType<typeof useHomePageLazyQueryCache>;
export type HomePageQueryResult = Apollo.QueryResult<QueryOperationTypes.HomePageQuery, QueryOperationTypes.HomePageQueryVariables>;