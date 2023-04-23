import styled, { css } from 'styled-components'
import { TextareaProps } from './Textarea'

export const Textarea = styled.textarea<Omit<TextareaProps, 'label'>>`
  ${() => css`
    all: unset;
    width: 100%;
    height: 74px;
    padding: 8px 11px;
    margin-top: 8px;
    box-sizing: border-box;
    display: flex;

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
