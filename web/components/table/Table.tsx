import styled from 'styled-components';

export const Table = styled.table`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 0.7em;
  width: 100%;
  overflow: auto;
  table-layout: fixed;
  ${({ theme }) => theme.boxShadow};
`;
