import Styled from 'styled-components'

interface Props {
  vertical?: boolean
}

export const Align = Styled.div<Props>`
  display: flex;
  ${({ vertical }) =>
    vertical &&
    `
    flex-direction: column;
  `}
`
