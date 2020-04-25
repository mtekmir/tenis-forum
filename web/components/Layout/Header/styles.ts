import styled from 'styled-components'
import { breakPoints } from '../../../styles/theme'

export const AppBar = styled.div`
  display: flex;
  background: #393e41;
  z-index: 5;
  box-shadow: 0 10px 6px -6px #777;

  @media (${({ theme }) => theme.breakpoints.phone}) {
    padding: 0.6em;
    height: 3em;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    height: 6em;
    flex-direction: column;
  }
`
