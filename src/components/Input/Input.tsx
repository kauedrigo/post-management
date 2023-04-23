import { InputHTMLAttributes } from 'react'
import * as S from './Input.styles'
import { Paragraph } from '../Paragraph/Paragraph'

export type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, ...props }: InputProps) => {
  return (
    <label>
      <Paragraph variant="medium">{label}</Paragraph>
      <S.Input {...props} />
    </label>
  )
}

export { Input }
