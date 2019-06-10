import React from 'react';
import { Header } from '../../pages/admin_10zoeh/components/table/TableComponent';
import { TableHead } from './TableHead';
import { Table } from './Table';
import { TableRow } from './TableRow';
import { TableCell } from '../../pages/table/TableCell';
import { TableBody } from './TableBody';
import { formatDate } from '../../utils/formatDate';
import Link from 'next/link';

export enum TableType {
  U = 'User',
  C = 'Category',
  F = 'Forum',
  T = 'Thread',
  P = 'Post',
}

interface Props {
  headers: Header[];
  rows: Array<{ [key: string]: any }>;
  type: TableType;
}

export const TableComponent: React.FC<Props> = ({ headers, rows, type }) => {
  const getLink = (row: any) => {
    switch (type) {
      case TableType.T: {
        return `/baslik/${row.id}`;
      }
      case TableType.P: {
        return `/baslik/${row.threadId}#${row.id}`;
      }
    }
  };

  const renderRows = () => {
    return rows.map(row => (
      <React.Fragment key={row.id}>
        <Link href={getLink(row)}>
          <TableRow>
            {headers.map(h => (
              <TableCell width={h.width} numeric={h.numeric} key={h.id}>
                {h.date ? formatDate(row[h.id]) : row[h.id]}
              </TableCell>
            ))}
          </TableRow>
        </Link>
      </React.Fragment>
    ));
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {headers.map(({ id, label }) => (
            <TableCell key={id}>{label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>{renderRows()}</TableBody>
    </Table>
  );
};
