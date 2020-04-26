import styled from 'styled-components'

export const PostContentTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em;
  font-size: 0.7em;

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 100%;
  }
`

export const PostContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  background: white;
  font-size: 0.9em;
  flex-direction: column;
  ${({ theme }) => theme.boxShadow};

  @media (${({ theme }) => theme.breakpoints.phone}) {
    min-height: 4em;
    width: 100%;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    height: 100%;
    min-height: 4em;
    width: 100%;
    justify-content: space-between;
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid #d1d3d5;
  margin: 1em 0;
  width: 100%;
`
