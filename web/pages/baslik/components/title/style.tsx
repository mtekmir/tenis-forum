import styled from 'styled-components'

export const StyledThreadTitle = styled.h4`
  font-size: 1.5em;
  margin: 0;
  padding: 0.1em 0.5em;
  color: ${({ theme }) => theme.palette.primary};
`

export const ThreadTitleStyles = styled.div`
  .edit-btn {
    color: ${({ theme }) => theme.palette.primary};
    font-size: 0.8em;
  }
`
