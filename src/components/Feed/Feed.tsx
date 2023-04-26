import { Icon } from '@iconify/react'
import { ReactNode } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { logout } from '../../redux/userSlice'
import { Paragraph } from '../Paragraph'
import { Title } from '../Title'
import * as S from './Feed.styles'

type FeedProps = { children: ReactNode }

const FeedComponent = ({ children }: FeedProps) => {
  const dispatch = useAppDispatch()

  return (
    <S.Container>
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
