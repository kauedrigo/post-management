import { Layout, NewPost } from '../components'
import { FeedComponent } from '../components/Feed/Feed'

const Feed = () => {
  return (
    <Layout>
      <FeedComponent>
        <NewPost />
      </FeedComponent>
    </Layout>
  )
}

export { Feed }
