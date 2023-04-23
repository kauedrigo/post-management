import { HTMLAttributes } from 'react'
import * as S from './Paragraph.styles'

type variants = 'default' | 'medium' | 'small'

export type ParagraphProps = {
  color?: string
  fontWeight?: number
  variant?: variants
} & HTMLAttributes<HTMLHeadingElement>

const Paragraph = ({ ...props }: ParagraphProps) => {
  return <S.Paragraph {...props} />
}

export { Paragraph }
