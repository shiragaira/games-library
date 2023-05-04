import { createApolloClient, createCache } from '@/apollo/apollo.instance'
import { DocumentNode, TypedDocumentNode } from '@apollo/client'

interface GetPageDataProps<TData> {
  query: TypedDocumentNode<TData>
}

export async function getPageData<TData>({ query }: GetPageDataProps<TData>) {
  const apolloClient = createApolloClient(createCache())

  const { data } = await apolloClient.query<TData>({
    query,
  })

  apolloClient.writeQuery<TData>({
    query,
    data,
  })

  const cachedData = apolloClient.cache.extract()

  return {
    props: {
      cachedData,
    },
  }
}
