import styled, { css } from 'styled-components'
import { InputProps } from './Input'

export const Input = styled.input<Omit<InputProps, 'label'>>`
  ${() => css`
    width: 100%;
    height: 32px;
    padding: 8px 11px;
    margin-top: 8px;
    box-sizing: border-box;

    background: #ffffff;
    border: 1px solid #777777;
    border-radius: 8px;
    font-size: 14px;

    ::placeholder {
      color: #cccccc;
    }

    :focus {
      outline: #7695ec solid 1px;
    }
  `}
`
