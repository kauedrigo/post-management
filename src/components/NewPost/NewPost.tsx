import { BaseSyntheticEvent, useState } from 'react'
import { Input } from '../Input'
import { Title } from '../Title'
import * as S from './NewPost.styles'
import { Button } from '../Button'
import { Textarea } from '../Textarea/Textarea'

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleNewPost = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    console.log('title', title)
    // TODO call create post service and update the store
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
