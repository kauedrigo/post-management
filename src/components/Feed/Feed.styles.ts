import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    width: 100%;
    height: max-content;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #fff;

    @media screen and (min-width: 800px) {
      width: 800px;
    }
  `}
`

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 18px;
  box-sizing: border-box;
  background-color: #7695ec;

  @media screen and (min-width: 768px) {
    padding: 0 36px;
  }
`

export const Logout = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  :hover {
    opacity: 0.8;
  }

  @media (pointer) {
    cursor: pointer;
  }

  p {
    display: none;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;

    p {
      display: flex;
    }
  }
`

export const Body = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
      padding: 24px;
      gap: 24px;
    }
  `}
`
