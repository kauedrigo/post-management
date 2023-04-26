import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  background-color: #7695ec;
  box-sizing: border-box;
  padding: 12px;
  gap: 12px;
  color: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  @media screen and (min-width: 768px) {
    padding: 24px;
    gap: 24px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`
export const ManagementIconsWrapper = styled.div`
  display: flex;
  gap: 12px;

  svg {
    font-size: 30px;
    color: #fff;

    :hover {
      opacity: 0.7;
    }

    @media (pointer) {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 24px;
    gap: 24px;
  }
`

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;

  gap: 8px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #999999;
  border-top: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  @media screen and (min-width: 768px) {
    padding: 24px;
    gap: 16px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`

export const AuthorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  color: #777777;
`
