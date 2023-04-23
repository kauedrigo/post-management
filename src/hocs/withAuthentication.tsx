import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { login } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

type withAuthenticationFn = (Component: FC) => FC

const withAuthentication: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { username } = useAppSelector((state) => state.user)

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
      if (username) {
        setIsAuthenticated(true)
      } else if (localStorage.getItem('username')) {
        const localUsername = localStorage.getItem('username') as string
        dispatch(login(localUsername))
        setIsAuthenticated(true)
      } else {
        navigate('/login')
      }
    }, [])

    return isAuthenticated ? <Component /> : <div>LOADING</div>
  }

  return Authenticated
}

export { withAuthentication }
