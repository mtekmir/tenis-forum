import styled from 'styled-components'

export const ThreadContainer = styled.div`
  display: flex;
  padding: 1.5em;
  border-bottom: 1px solid #8f91ad;

  a {
    &:hover {
      color: ${({ theme }) => theme.palette.secondary};
    }
    cursor: pointer;
  }

  .thread_owner_img {
    margin: 0 0.5em 0 1em;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    @media (${({ theme }) => theme.breakpoints.phone}) {
      margin-left: 0;
    }
  }
`

export const OwnerAndDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7em;
`

export const ThreadTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`

export const ThreadLatestPostContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`

export const ThreadLatestPostOwnerAndDate = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.tertiary};

  span {
    color: ${({ theme }) => theme.palette.primary};
    font-size: 1em;
  }
`

export const ThreadLatestPostProfileImg = styled.img`
  margin: 0 0.5em 0 1em;
  border-radius: 50%;
  width: 1.7em;
  height: 1.7em;
  @media (${({ theme }) => theme.breakpoints.phone}) {
    margin-left: 0;
  }
`

export const ThreadStatsContainer = styled.div`
  display: flex;
  width: 10%;
  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
  }
`

export const ThreadStat = styled.div`
  flex-direction: row;
  margin: 0.3em 0.7em 0.5em 0;
  font-size: 0.8em;
  span {
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
