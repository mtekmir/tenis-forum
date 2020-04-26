import styled from 'styled-components'

export const Tab = styled.div<{ selected: boolean }>`
  padding: 0.6em;
  margin-right: 0.7em;
  cursor: pointer;

  ${({ selected, theme }) =>
    selected &&
    `
    border-bottom: 2px solid white;
    background: ${theme.palette.primary}
    color: white;
  `}
`
