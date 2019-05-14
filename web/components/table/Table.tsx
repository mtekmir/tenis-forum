import styled from 'styled-components';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { formatDate } from '../../utils/formatDate';

export const Table = styled.table`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 0.7em;
  width: 100%;
  overflow: auto;
  table-layout: fixed;
  ${({ theme }) => theme.boxShadow};
`;

interface Props {
  headers: Header[];
  rows: Array<{ [key: string]: any }>;
}

export interface Header {
  id: string;
  label: string;
  numeric?: boolean;
  date?: boolean;
  width?: number;
}

export const TableComponent: React.FunctionComponent<Props> = ({
  headers,
  rows,
}) => {
  const renderRows = () => {
    return rows.map(row => (
      <TableRow key={row.id}>
        {headers.map(h => (
          <TableCell width={h.width} numeric={h.numeric} key={h.id}>
            {h.date ? formatDate(row[h.id]) : row[h.id]}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {headers.map(({ id, label, width }) => (
            <TableCell width={width} key={id}>
              {label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>{renderRows()}</TableBody>
    </Table>
  );
};
