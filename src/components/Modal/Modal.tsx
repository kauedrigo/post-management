import { BaseSyntheticEvent, useState } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import { Button } from '../Button'
import { Input } from '../Input'
import { Textarea } from '../Textarea'
import { Title } from '../Title'
import * as S from './Modal.styles'

const titles = {
  edit: 'Edit item',
  delete: 'Are you sure you want to delete this item?',
}

type variants = 'edit' | 'delete'

type Props = { variant: variants; isOpen: boolean; closeModal: () => void }

const Modal = ({ variant, isOpen = false, closeModal }: Props) => {
  const { selectedPost } = useAppSelector((state) => state.posts)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleCloseModal = (event: BaseSyntheticEvent) => {
    event.stopPropagation()
    closeModal()
  }

  return (
    <S.Container isOpen={isOpen} onClick={handleCloseModal}>
      <S.Card onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}>
        <Title>{titles[variant]}</Title>

        <Input
          label="Title"
          defaultValue={selectedPost?.title}
          placeholder="Hello world"
          value={title}
          onChange={(event: BaseSyntheticEvent) => setTitle(event.target.value)}
        />

        <Textarea
          label="Content"
          defaultValue={selectedPost?.content}
          placeholder="Content here"
          value={content}
          onChange={(event: BaseSyntheticEvent) => setContent(event.target.value)}
        />

        <S.ButtonContainer>
          <Button onClick={closeModal}>Cancel</Button>

          <Button variant="green" disabled={!title || !content}>
            Save
          </Button>
        </S.ButtonContainer>
      </S.Card>
    </S.Container>
  )
}

export { Modal }
