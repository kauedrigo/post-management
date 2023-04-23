import styled, { css } from 'styled-components'
import { TitleProps } from './Title'

export const Title = styled.h2<TitleProps>`
  ${({ color = '#000', fontWeight = 700 }) => css`
    margin: 0;
    font-size: 22px;
    font-weight: 700;

    color: ${color};
    font-weight: ${fontWeight};
  `}
`
