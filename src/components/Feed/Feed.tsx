import { MutableRefObject, ReactNode } from 'react'
import { Title } from '../Title'
import * as S from './Feed.styles'

type FeedProps = { children: ReactNode; innerRef?: MutableRefObject<HTMLDivElement> }

const FeedComponent = ({ children, innerRef }: FeedProps) => {
  return (
    <S.Container ref={innerRef}>
      <S.Header>
        <Title color="#fff">CodeLeap Network</Title>

        {/* TODO logout button */}
      </S.Header>

      <S.Body>{children}</S.Body>
    </S.Container>
  )
}

export { FeedComponent }
