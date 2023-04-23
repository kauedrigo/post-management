import { ReactNode } from 'react'
import { Title } from '../Title'
import * as S from './Feed.styles'

type FeedProps = { children: ReactNode }

const FeedComponent = ({ children }: FeedProps) => {
  return (
    <S.Container>
      <S.Header>
        <Title color="#fff">CodeLeap Network</Title>
      </S.Header>

      <S.Body>{children}</S.Body>
    </S.Container>
  )
}

export { FeedComponent }
