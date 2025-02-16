import styled from 'styled-components';

export const TableRow = styled.tr<{ open?: boolean }>`
  border-bottom: 1px solid #eee;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: #ededed;
  }
`;
