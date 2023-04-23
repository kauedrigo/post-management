import styled, { css } from 'styled-components'

export const Container = styled.form`
  ${() => css`
    width: 500px;
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding: 24px;
    gap: 16px;

    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 16px;
  `}
`
