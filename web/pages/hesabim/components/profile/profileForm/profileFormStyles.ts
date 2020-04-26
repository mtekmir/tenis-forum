import styled from 'styled-components'
import { breakPoints } from '../../../../../styles/theme'

export const Label = styled.div`
  color: ${({ theme }) => theme.palette.primary};
  margin: 1em 0 0.5em 0.5em;
  font-size: 0.9em;

  @media (${breakPoints.phone}) {
    margin: 0.5em;
  }
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormDiv = styled.div`
  display: flex;
  padding: 1em 1em 1em 0;
  max-width: 100%;
  @media (${({ theme }) => theme.breakpoints.phone}) {
    flex-direction: column-reverse;
    width: 100%;
    padding: 0;
  }

  @media (${breakPoints.laptop}) {
    justify-content: space-between;
  }
`

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
    align-items: center;
  }

  /* @media ${breakPoints.tabletPortrait} {
    wdith: 55%;
  } */
`

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: flex-end;
  margin-right: 1em;
  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
    align-items: center;
    height: 12em;
    margin: 0;
  }

  @media (${breakPoints.tabletPortrait}) {
    width: 50%;
  }
`

export const BottomDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2em;

  @media (${breakPoints.phone}) {
    margin-right: 2.5em;
  }
`
