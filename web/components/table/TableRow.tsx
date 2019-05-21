import styled from 'styled-components';

export const TableRow = styled.tr<{ open?: boolean }>`
  border-bottom: 1px solid #eee;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: #ededed;
  }
`;

export const DetailsRow = styled.tr<{ open?: boolean }>`
  height: ${({ open }) => (open ? '100px' : '0px')};
  transition: 0.3s all;
`;
