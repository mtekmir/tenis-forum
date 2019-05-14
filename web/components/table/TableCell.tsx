import styled from 'styled-components';

interface Props {
  width?: number;
  numeric?: boolean;
}

export const TableCell = styled.td<Props>`
  padding: 1em 0.4em;

  width: ${({ width }) => `${width}%` || '100%'};
  text-align: ${({ numeric }) => (numeric ? 'end' : 'start')};

  :first-child {
    padding-left: 1em;
  }

  :last-child {
    padding-right: 1em;
  }
`;
