import { BaseSyntheticEvent, useState } from 'react'
import { deletePostService } from '../../actions/services/deletePostService'
import { editPostService } from '../../actions/services/editPostService'
import { getAllPostsService } from '../../actions/services/getAllPostsService'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { setModal } from '../../redux/modalSlice'
import { populatePosts } from '../../redux/postSlice'
import { Button } from '../Button'
import { Input } from '../Input'
import { Textarea } from '../Textarea'
import { Title } from '../Title'
import * as S from './Modal.styles'

const titles = {
  edit: 'Edit item',
  delete: 'Are you sure you want to delete this item?',
}

const Modal = () => {
  const dispatch = useAppDispatch()

  const { isOpen, variant, post } = useAppSelector((state) => state.modal)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const resetModal = () => {
    setTitle('')
    setContent('')
  }

  const handleCloseModal = (event: BaseSyntheticEvent) => {
    event.stopPropagation()
    dispatch(setModal({ isOpen: false, variant: 'edit', post: null }))
    resetModal()
  }

  const handleModalSubmit = async () => {
    if (variant === 'delete') {
      await deletePostService(post?.id as string)
    }

    if (variant === 'edit') {
      const request = { title: title, content: content }
      await editPostService(post?.id as string, request)
    }

    const postsData = await getAllPostsService()
    dispatch(populatePosts(postsData))
    dispatch(setModal({ isOpen: false, variant: 'edit', post: null }))
    resetModal()
  }

  return (
    <S.Container isOpen={isOpen} onClick={handleCloseModal}>
      <S.Card onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}>
        <Title style={{ marginBottom: variant === 'delete' ? 24 : 0 }}>{titles[variant]}</Title>

        {variant === 'edit' && (
          <>
            <Input
              label="Title"
              placeholder="Hello world"
              defaultValue={post?.title}
              onChange={(event: BaseSyntheticEvent) => setTitle(event.target.value)}
            />

            <Textarea
              label="Content"
              placeholder="Content here"
              defaultValue={post?.content}
              onChange={(event: BaseSyntheticEvent) => setContent(event.target.value)}
            />
          </>
        )}

        <S.ButtonContainer>
          <Button onClick={handleCloseModal}>Cancel</Button>

          <Button
            variant={variant === 'delete' ? 'red' : 'green'}
            onClick={handleModalSubmit}
            disabled={(!title || !content) && variant === 'edit'}
          >
            {variant === 'delete' ? 'Delete' : 'Save'}
          </Button>
        </S.ButtonContainer>
      </S.Card>
    </S.Container>
  )
}

export { Modal }
