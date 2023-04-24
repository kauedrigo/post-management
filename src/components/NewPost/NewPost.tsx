import { BaseSyntheticEvent, useState } from 'react'
import { Input } from '../Input'
import { Title } from '../Title'
import * as S from './NewPost.styles'
import { Button } from '../Button'
import { Textarea } from '../Textarea'
import { createPostService } from '../../actions/services/createPostService'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { getAllPostsService } from '../../actions/services/getAllPostsService'
import { populatePosts } from '../../redux/postSlice'

const NewPost = () => {
  const dispatch = useAppDispatch()

  const { username } = useAppSelector((state) => state.user)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleNewPost = async (event: BaseSyntheticEvent) => {
    event.preventDefault()
    console.log('title', title)

    const request = {
      username: username,
      title: title,
      content: content,
    }
    await createPostService(request)
    const postsData = await getAllPostsService()
    dispatch(populatePosts(postsData.results))
  }

  return (
    <S.Container onSubmit={handleNewPost}>
      <Title>What’s on your mind?</Title>

      <Input
        label="Title"
        placeholder="Hello World"
        value={title}
        onChange={(event: BaseSyntheticEvent) => setTitle(event.target.value)}
      />

      <Textarea
        label="Content"
        placeholder="Content here"
        value={content}
        onChange={(event: BaseSyntheticEvent) => setContent(event.target.value)}
      />

      <Button type="submit" variant="blue" style={{ alignSelf: 'flex-end' }} disabled={!title || !content}>
        Create
      </Button>
    </S.Container>
  )
}

export { NewPost }
