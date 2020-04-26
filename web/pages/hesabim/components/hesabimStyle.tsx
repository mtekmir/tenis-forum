import styled from 'styled-components'
import { breakPoints } from '../../../styles/theme'

export const Styles = styled.div`
  min-height: 90vh;
  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
  }

  @media (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    display: flex;

    .content {
      width: 75%;
    }
  }

  /* @media (${breakPoints.laptop}) {
    .content {
      width: 100%;
    }
  } */
`
