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
  width: 95%;

  @media (${({ theme }) => theme.breakpoints.phone}) {
    flex-direction: column;
    font-size: 1em;
  }
`

export const ForumDivTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
  }

  @media (${({ theme }) => theme.breakpoints.laptop}) {
    width: 80%;
    flex-direction: row;
  }
`

export const ForumDivTitle = styled.div`
  color: ${({ theme: { palette } }) => palette.primary};
  font-weight: 700;
  font-size: 1.1em;
  width: 65%;

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
    font-size: 1em;
    font-size: 500;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 100%;
  }

  @media (${({ theme }) => theme.breakpoints.laptop}) {
    width: 80%;
  }
`

export const ForumDivStats = styled.div`
  display: flex;
  width: 10%;
  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
  }
`

export const ForumDivStat = styled.div`
  flex-direction: row;
  margin: 0.3em 0.7em 0.5em 0;
  font-size: 0.8em;
  span {
    margin-right: 0.5em;
    color: ${({ theme: { palette } }) => palette.grey};
  }

  @media (${({ theme }) => theme.breakpoints.laptop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme: { palette } }) => palette.primary};
    margin-left: 1em;
    span {
      font-size: 1em;
    }
  }
`

export const ForumDivLatestThread = styled.div`
  display: flex;
  width: 25%;
  .right {
    display: flex;
    flex-direction: column;
  }

  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 25em;
    font-size: 0.7em;
    color: ${({ theme: { palette } }) => palette.primary};
    cursor: pointer;
    &:hover {
      color: ${({ theme: { palette } }) => palette.secondary};
    }
  }

  .user-date {
    color: ${({ theme: { palette } }) => palette.grey};
    margin-top: 0.3em;
    font-size: 0.7em;

    span {
      color: ${({ theme: { palette } }) => palette.primary};
    }
  }

  @media (${({ theme }) => theme.breakpoints.phone}) {
    align-items: center;
    width: 100%;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 30%;

    .title {
      max-width: 20em;
    }
  }
`

export const ForumDivLatestThreadProfileImg = styled.img`
  margin: 0 0.5em 0 1em;
  border-radius: 50%;
  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 2em;
    height: 2em;
    margin-left: 0;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 2em;
    height: 2em;
  }
`
