import { DocumentNode, useApolloClient } from '@apollo/client'

export const useQuery = <TData,>(query: DocumentNode): TData | null => {
  const client = useApolloClient()

  const data = client.readQuery<TData>({ query })

  return data
}

export type { LazyQueryHookOptions, MutationHookOptions } from '@apollo/client'
export { useLazyQuery, useMutation } from '@apollo/client'
