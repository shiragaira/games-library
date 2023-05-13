import { HomePageDocument, HomePageQuery } from '@/schema/api'
import { useHomePageQueryCache } from '@/schema/api/cache'
import { getDataFromServer } from '@/utils/getDataFromServer'
import { addApolloState, initializeApollo } from '@/instances/apollo.instance'
import Link from 'next/link'

export default function Home(props) {
  console.log('Home props', props)
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export function getStaticProps() {
  return getDataFromServer({ query: HomePageDocument })
}
