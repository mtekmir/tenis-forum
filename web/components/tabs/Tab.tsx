import styled from 'styled-components';

export const Tab = styled.div<{ selected: boolean }>`
  padding: 0.6em;
  margin-right: 0.7em;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    `
    padding: .6em;
    padding-bottom: 1em;
    margin-right: .7em;
    border-bottom: 2px solid white;
    cursor: pointer;
  `}
`;
