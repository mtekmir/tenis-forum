import styled from 'styled-components'
import { breakPoints } from '../../../../../styles/theme'

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
`

export const AccountDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1.5em;

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 12em;
  }
`
