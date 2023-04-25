import { MutableRefObject, useEffect, useRef } from 'react'
import { getAllPostsService } from '../actions/services/getAllPostsService'
import { Layout, Modal, NewPost, PostComponent } from '../components'
import { FeedComponent } from '../components/Feed/Feed'
import { withAuthentication } from '../hocs/withAuthentication'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { populatePosts } from '../redux/postSlice'

const Feed = () => {
  const dispatch = useAppDispatch()

  const ref = useRef() as MutableRefObject<HTMLDivElement>

  const { posts, next } = useAppSelector((state) => state.posts)

  const getPosts = async () => {
    const postsData = await getAllPostsService()
    dispatch(populatePosts(postsData))
  }

  useEffect(() => {
    getPosts()
  }, [])

  const getNextPosts = async () => {
    const nextFilter = next?.split('/').slice(-1)[0]
    const postsData = await getAllPostsService(nextFilter)
    dispatch(populatePosts(postsData))
  }

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    if (scrollTop + clientHeight >= scrollHeight) {
      getNextPosts()
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [next])

  return (
    <>
      <Modal />

      <Layout>
        <FeedComponent innerRef={ref}>
          <NewPost />

          {posts && posts.map((post) => <PostComponent post={post} key={post.id} />)}
        </FeedComponent>
      </Layout>
    </>
  )
}

const AuthenticatedPage = withAuthentication(Feed)

export { AuthenticatedPage as Feed }
