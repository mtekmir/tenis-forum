import React from 'react';
import { TableHead } from '../../../../components/table/TableHead';
import { TableRow } from '../../../../components/table/TableRow';
import { TableBody } from '../../../../components/table/TableBody';
import { TableCell } from '../../../table/TableCell';
import { formatDate } from '../../../../utils/formatDate';
import { Type, Args } from './drawer/DrawerContainer';
import { Table } from '../../../../components/table/Table';

interface Props {
  headers: Header[];
  rows: Array<{ [key: string]: any }>;
  type: Type;
  getDetail: (args: Args) => void;
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
  getDetail,
  type,
}) => {
  const renderRows = () => {
    return rows.map(row => (
      <React.Fragment key={row.id}>
        <TableRow onClick={() => getDetail({ id: row.id, type })}>
          {headers.map(h => (
            <TableCell width={h.width} numeric={h.numeric} key={h.id}>
              {h.date ? formatDate(row[h.id]) : row[h.id]}
            </TableCell>
          ))}
        </TableRow>
      </React.Fragment>
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
