import styled, { css } from 'styled-components'
import { ParagraphProps } from './Paragraph'

const MediumVariant = css`
  font-size: 16px;
`

const SmallVariant = css`
  font-size: 14px;
`

export const Paragraph = styled.p<ParagraphProps>`
  ${({ color, fontWeight, variant = 'default' }) => css`
    margin: 0;
    font-size: 18px;

    color: ${color};
    font-weight: ${fontWeight};

    ${variant === 'medium' && MediumVariant}
    ${variant === 'small' && SmallVariant}
  `}
`
