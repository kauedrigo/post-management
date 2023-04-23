import styled, { css } from 'styled-components'

export const Container = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;

    background: #ffffff;
    border: 1px solid #999999;
    border-radius: 16px;
  `}
`
