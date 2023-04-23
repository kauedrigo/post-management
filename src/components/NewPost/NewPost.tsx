import { BaseSyntheticEvent, useState } from 'react'
import { Input } from '../Input'
import { Title } from '../Title'
import * as S from './NewPost.styles'
import { Button } from '../Button'

const NewPost = () => {
  const [title, setTitle] = useState()

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
        value={title}
        onChange={(event: BaseSyntheticEvent) => setTitle(event.target.value)}
      />

      {/* TODO add textbox */}

      <Button type="submit" variant="blue" style={{ alignSelf: 'flex-end' }} disabled={!title}>
        Create
      </Button>
    </S.Container>
  )
}

export { NewPost }
