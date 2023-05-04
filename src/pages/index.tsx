import { HomePageDocument, HomePageQuery } from '@/schema/api'
import { useHomePageQueryCache } from '@/schema/api/cache'
import { getPageData } from '@/utils/getPageData'

export default function Home(props) {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export function getStaticProps() {
  return getPageData<HomePageQuery>({ query: HomePageDocument })
}
