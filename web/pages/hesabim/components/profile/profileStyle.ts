import styled from 'styled-components'
import { breakPoints } from '../../../../styles/theme'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const InnerDiv = styled.div`
  width: 80%;
  min-height: 85vh;

  @media (${breakPoints.phone}) {
    width: 100%;
  }
`
