import { RetryLink } from '@apollo/client/link/retry'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

export const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
    },
  }
})

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, location, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${path}`)
    })
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

export const retryLink = new RetryLink({
  delay: {
    initial: 300,
  },
  attempts: {
    max: 5,
    retryIf: (error) => !!error,
  },
})
