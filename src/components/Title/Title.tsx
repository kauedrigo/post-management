import { HTMLAttributes } from 'react'
import * as S from './Title.styles'

export type TitleProps = { color?: string; fontWeight?: number } & HTMLAttributes<HTMLHeadingElement>

const Title = ({ ...props }: TitleProps) => {
  return <S.Title {...props} />
}

export { Title }
