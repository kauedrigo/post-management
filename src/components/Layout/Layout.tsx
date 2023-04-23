import { ReactNode } from 'react'
import * as S from './Layout.styles'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <S.Container>{children}</S.Container>
}

export { Layout }
