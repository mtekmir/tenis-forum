import styled from 'styled-components'

export const Post = styled.div`
  padding: 1em 0;
  .title {
    color: ${({ theme }) => theme.palette.primary};
    font-size: 1em;
  }

  .details {
    color: #8c8c8c;
    font-size: 0.8em;
  }
`

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`
