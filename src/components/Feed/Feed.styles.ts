import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    width: 800px;
    height: max-content;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  `}
`

export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 37px;
  box-sizing: border-box;

  background-color: #7695ec;
`

export const Body = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    box-sizing: border-box;
  `}
`
