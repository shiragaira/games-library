import { AppProps } from 'next/app'
import { useApollo } from '@/apollo/apollo.instance'
import { ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo()

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}