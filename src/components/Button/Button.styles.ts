import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

const BlueVariant = css`
  background-color: #7695ec;
  color: #fff;
  border: none;
`

const RedVariant = css`
  background-color: #ff5151;
  color: #fff;
  border: none;
`

const GreenVariant = css`
  background-color: #47b960;
  color: #fff;
  border: none;
`

export const Button = styled.button<ButtonProps>`
  ${({ variant = 'default' }) => css`
    width: 120px;
    height: 32px;

    background-color: #fff;
    border: 1px solid #999999;
    border-radius: 8px;

    font-weight: 700;

    :hover {
      opacity: 0.7;
    }

    @media (pointer) {
      cursor: pointer;
    }

    ${variant === 'blue' && BlueVariant}
    ${variant === 'red' && RedVariant}
    ${variant === 'green' && GreenVariant}
  `}
`
