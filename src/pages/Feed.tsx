import { useEffect } from 'react'
import { getAllPostsService } from '../actions/services/getAllPostsService'
import { Layout, NewPost, PostComponent } from '../components'
import { FeedComponent } from '../components/Feed/Feed'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { populatePosts } from '../redux/postSlice'

const Feed = () => {
  const { posts } = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()

  const getPosts = async () => {
    const postsData = await getAllPostsService()
    dispatch(populatePosts(postsData.results))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Layout>
      <FeedComponent>
        <NewPost />

        {posts && posts.map((post) => <PostComponent post={post} />)}
      </FeedComponent>
    </Layout>
  )
}

export { Feed }
