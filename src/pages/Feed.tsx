import { useEffect, useState } from 'react'
import { getAllPostsService } from '../actions/services/getAllPostsService'
import { Layout, Modal, NewPost, PostComponent } from '../components'
import { FeedComponent } from '../components/Feed/Feed'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { populatePosts } from '../redux/postSlice'
import { withAuthentication } from '../hocs/withAuthentication'

const Feed = () => {
  const { posts } = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()

  const [showModal, setShowModal] = useState(true)

  const getPosts = async () => {
    const postsData = await getAllPostsService()
    dispatch(populatePosts(postsData.results))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      {/* TODO modal slice? so that NewPost can open the modal from inside */}
      <Modal variant="edit" isOpen={showModal} closeModal={() => setShowModal(false)} />

      <Layout>
        <FeedComponent>
          <NewPost />

          {posts && posts.map((post) => <PostComponent post={post} />)}
        </FeedComponent>
      </Layout>
    </>
  )
}

const AuthenticatedPage = withAuthentication(Feed)

export { AuthenticatedPage as Feed }
