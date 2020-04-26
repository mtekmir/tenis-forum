import Styled from 'styled-components'
import { breakPoints } from '../../../../styles/theme'

export const ContactUsFormStyles = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 5em 3em 5em;

  .input, .textarea {
    width: 40em;
  }

  @media (${breakPoints.phone}) {
    .input, .textarea {
      width: 20em;
    }
    padding: 0 2.5em 1.5em 2.5em;
  }
`
