import { DocumentNode, TypedDocumentNode } from '@apollo/client'
import { addApolloState, initializeApollo } from '@/instances/apollo.instance'
import { HomePageDocument } from '@/schema/api'

interface GetDataFromServer<TData> {
  query: TypedDocumentNode<TData>
}

export async function getDataFromServer({ query }) {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query,
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
