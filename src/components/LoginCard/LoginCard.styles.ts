import styled, { css } from 'styled-components'

export const Container = styled.form`
  ${() => css`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding: 16px;
    gap: 16px;
    margin: 12px;

    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 12px;

    @media screen and (min-width: 768px) {
      padding: 24px;
      border-radius: 16px;
    }
  `}
`
