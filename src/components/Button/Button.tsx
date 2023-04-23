import { ButtonHTMLAttributes } from 'react'
import * as S from './Button.styles'

type variants = 'default' | 'blue' | 'red' | 'green'

export type ButtonProps = { variant?: variants } & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ ...props }: ButtonProps) => {
  return <S.Button {...props} />
}

export { Button }
