import styled from 'styled-components'

export const CategoryDiv = styled.div`
  padding: 1em;
  background: white;
`

export const CategoryTitle = styled.div`
  color: white;
  background-color: ${({ theme: { palette } }) => palette.primary};
  padding: 1em;
`

export const ForumDiv = styled.div`
  display: flex;
  padding: 1em;
  border-bottom: 1px solid #efefef;
`

export const ForumDivTitle = styled.div`
  color: ${({ theme: { palette } }) => palette.primary};
  font-weight: 700;
  font-size: 1.1em;
  width: 65%;
`

export const ForumDivStats = styled.div`
  display: flex;
  width: 10%;
`

export const ForumDivStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme: { palette } }) => palette.primary};
  margin-left: 1em;

  span {
    font-size: 0.8em;
    color: ${({ theme: { palette } }) => palette.grey};
  }
`
