import { useAppSelector } from '../../hooks/reduxHooks'
import { Post } from '../../redux/postSlice'
import { Paragraph } from '../Paragraph'
import { Title } from '../Title'
import * as S from './Post.styles'
import { Icon } from '@iconify/react'

type Props = { post: Post }

const PostComponent = ({ post }: Props) => {
  const { username } = useAppSelector((state) => state.user)

  return (
    <S.Container>
      <S.Header>
        <Title>{post.title}</Title>

        {username === post.username && (
          <S.ManagementIconsWrapper>
            <Icon icon="ic:baseline-delete-forever" />
            <Icon icon="bx:bx-edit" />
          </S.ManagementIconsWrapper>
        )}
      </S.Header>

      <S.Body>
        <S.AuthorWrapper>
          <Paragraph fontWeight={700}>@{post.username}</Paragraph>
          {/* TODO integrate post age */}
          {/* <Paragraph>{post.datetime}</Paragraph> */}
        </S.AuthorWrapper>

        <Paragraph>{post.content}</Paragraph>
      </S.Body>
    </S.Container>
  )
}

export { PostComponent }
