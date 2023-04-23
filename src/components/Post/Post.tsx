import { DateTime } from 'luxon'
import { useAppSelector } from '../../hooks/reduxHooks'
import { Post } from '../../redux/postSlice'
import { Paragraph } from '../Paragraph'
import { Title } from '../Title'
import * as S from './Post.styles'
import { Icon } from '@iconify/react'

type Props = { post: Post }

const PostComponent = ({ post }: Props) => {
  const { username } = useAppSelector((state) => state.user)

  const getPostAge = () => {
    const MINUTES_IN_AN_HOUR = 60
    const HOURS_IN_A_DAY = 24
    const DAYS_IN_A_MONTH = 30
    const MONTHS_IN_A_YEAR = 12

    let postAgeString = ''

    const diff = DateTime.fromISO(String(post.created_datetime)).diffNow()
    const diffMinutes = diff.as('minutes') * -1
    const diffHours = diff.as('hours') * -1
    const diffDays = diff.as('days') * -1
    const diffMonths = diff.as('months') * -1

    if (diffMinutes < MINUTES_IN_AN_HOUR) {
      const suffix = diffMinutes < 2 ? ' minute ago' : ' minutes ago'
      postAgeString = diffMinutes < 1 ? 'less than a minute ago' : Math.floor(diffMinutes) + suffix
    } else if (diffHours < HOURS_IN_A_DAY) {
      const suffix = diffHours < 2 ? ' hour ago' : ' hours ago'
      postAgeString = Math.floor(diffHours) + suffix
    } else if (diffDays < DAYS_IN_A_MONTH) {
      const suffix = diffDays < 2 ? ' day ago' : ' days ago'
      postAgeString = Math.floor(diffHours) + suffix
    } else if (diffMonths < MONTHS_IN_A_YEAR) {
      const suffix = diffMonths < 2 ? ' month ago' : ' months ago'
      postAgeString = Math.floor(diffMonths) + suffix
    }

    return postAgeString
  }

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
          <Paragraph>{getPostAge()}</Paragraph>
        </S.AuthorWrapper>

        <Paragraph>{post.content}</Paragraph>
      </S.Body>
    </S.Container>
  )
}

export { PostComponent }
