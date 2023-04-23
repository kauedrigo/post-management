import { Layout, NewPost, PostComponent } from '../components'
import { FeedComponent } from '../components/Feed/Feed'
import { useAppSelector } from '../hooks/reduxHooks'

const Feed = () => {
  const { posts } = useAppSelector((state) => state.posts)

  return (
    <Layout>
      <FeedComponent>
        <NewPost />

        {posts.map((post) => (
          <PostComponent post={post} />
        ))}
      </FeedComponent>
    </Layout>
  )
}

export { Feed }
