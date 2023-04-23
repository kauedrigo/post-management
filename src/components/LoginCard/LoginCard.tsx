import { BaseSyntheticEvent, useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { Title } from '../Title'
import * as S from './LoginCard.styles'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { login } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'

const LoginCard = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')

  const handleLogin = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    dispatch(login(username))
    navigate('/')
  }

  return (
    <S.Container onSubmit={(event: BaseSyntheticEvent) => handleLogin(event)}>
      <Title style={{ marginBottom: 8 }}>Welcome to CodeLeap network!</Title>

      <Input
        label="Please enter your username"
        placeholder="John Doe"
        value={username}
        onChange={(event: BaseSyntheticEvent) => setUsername(event.target.value)}
      />

      <Button type="submit" variant="blue" style={{ alignSelf: 'flex-end' }} disabled={!username}>
        ENTER
      </Button>
    </S.Container>
  )
}

export { LoginCard }
