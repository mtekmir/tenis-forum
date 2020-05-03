import styled from 'styled-components'

export const PostDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
  min-height: 5em;

  @media (${({ theme }) => theme.breakpoints.phone}) {
    min-height: 4em;
    width: 93%;
    margin: 0 auto;
  }
`
