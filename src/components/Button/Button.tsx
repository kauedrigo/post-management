import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './Button.styles'
import { Paragraph } from '../Paragraph/Paragraph'

type variants = 'default' | 'blue' | 'red' | 'green'

export type ButtonProps = {
  variant?: variants
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <S.Button {...props}>
      <Paragraph variant="medium">{children}</Paragraph>
    </S.Button>
  )
}

export { Button }
