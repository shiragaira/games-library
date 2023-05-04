import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import { setContext } from '@apollo/client/link/context'
import { authLink, errorLink, retryLink } from '@/apollo/apollo.instance.utils'

export const createCache = (): InMemoryCache => new InMemoryCache({})

export const createApolloClient = (cache: InMemoryCache) => {
  const apiHttpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_BACKEND_URL,
  })

  return new ApolloClient({
    link: from([errorLink, retryLink, authLink, apiHttpLink]),
    cache,
  })
}

export const useApollo = () => {
  return createApolloClient(createCache())
}
