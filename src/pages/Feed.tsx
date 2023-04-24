import { useEffect } from 'react'
import { getAllPostsService } from '../actions/services/getAllPostsService'
import { Layout, Modal, NewPost, PostComponent } from '../components'
import { FeedComponent } from '../components/Feed/Feed'
import { withAuthentication } from '../hocs/withAuthentication'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { populatePosts } from '../redux/postSlice'

const Feed = () => {
  const { posts } = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()

  const getPosts = async () => {
    const postsData = await getAllPostsService()
    dispatch(populatePosts(postsData))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Modal />

      <Layout>
        <FeedComponent>
          <NewPost />

          {posts && posts.map((post) => <PostComponent post={post} key={post.id} />)}
        </FeedComponent>
      </Layout>
    </>
  )
}

const AuthenticatedPage = withAuthentication(Feed)

export { AuthenticatedPage as Feed }
