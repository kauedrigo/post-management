import { MutableRefObject, ReactNode } from 'react'
import { Title } from '../Title'
import * as S from './Feed.styles'
import { Paragraph } from '../Paragraph'
import { Icon } from '@iconify/react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { logout } from '../../redux/userSlice'

type FeedProps = { children: ReactNode; innerRef?: MutableRefObject<HTMLDivElement> }

const FeedComponent = ({ children, innerRef }: FeedProps) => {
  const dispatch = useAppDispatch()

  return (
    <S.Container ref={innerRef}>
      <S.Header>
        <Title color="#fff">CodeLeap Network</Title>

        <S.Logout onClick={() => dispatch(logout())}>
          <Icon icon="ri:logout-box-r-line" fontSize={24} />
          <Paragraph color="#fff" fontWeight={700}>
            Logout
          </Paragraph>
        </S.Logout>
      </S.Header>

      <S.Body>{children}</S.Body>
    </S.Container>
  )
}

export { FeedComponent }
