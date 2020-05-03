import styled from 'styled-components'

export const PostBottomDiv = styled.div`
  display: flex;
  padding: 1.5em 0 0.3em 0;

  span {
    color: ${({ theme }) => theme.palette.primary};
    margin-right: 0.8em;
    cursor: pointer;
    font-size: 0.8em;

    &:hover {
      color: ${({ theme }) => theme.palette.secondary};
      border-bottom: 1px solid ${({ theme }) => theme.palette.secondary};
      margin-bottom: -1px;
    }
  }
`
