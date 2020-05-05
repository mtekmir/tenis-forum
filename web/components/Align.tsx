import Styled from 'styled-components'

interface Props {
  vertical?: boolean
  width?: number
  align?: string
  justify?: string
  padding?: number | string
}

export const Align = Styled.div<Props>`
  display: flex;
  ${({ vertical }) =>
    vertical &&
    `
    flex-direction: column;
  `}
  ${({ width }) => width && `width: ${width}%`};
  ${({ padding }) => padding && `padding: ${padding}em`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
`
