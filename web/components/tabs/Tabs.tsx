import styled from 'styled-components'
import { breakPoints } from '../../styles/theme'

export const Tabs = styled.div`
  /* position: absolute;
  bottom: 0;
  left: 0; */
  color: ${({ theme }) => theme.palette.primary};
  margin-top: -0.3em;
  margin-bottom: 1em;
  height: 2.5em;
  display: flex;
  padding-left: 1em;

  @media (${breakPoints.tabletLandscape}) {
    display: flex;
    flex-direction: column;
    width: 20%;
    max-height: 20em;
    margin: 1em;
    border-radius: 2px;
  }
`
