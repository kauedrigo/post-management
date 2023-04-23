import { TextareaHTMLAttributes } from 'react'
import { Paragraph } from '../Paragraph/Paragraph'
import * as S from './Textarea.styles'

export type TextareaProps = { label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = ({ label, ...props }: TextareaProps) => {
  return (
    <label>
      <Paragraph variant="medium">{label}</Paragraph>
      <S.Textarea {...props} />
    </label>
  )
}

export { Textarea }
