import styled, { css } from 'styled-components'

export const Container = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10;
    align-items: center;
    justify-content: center;
    background-color: rgba(119, 119, 119, 0.8);

    display: ${isOpen ? 'flex' : 'none'};
  `}
`

export const Card = styled.div`
  width: 660px;
  display: flex;
  flex-direction: column;

  padding: 24px;
  gap: 24px;

  background-color: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`
