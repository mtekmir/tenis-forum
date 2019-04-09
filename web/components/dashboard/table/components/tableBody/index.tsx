import React, { Component, Fragment } from 'react';
import {
  Paper,
  withStyles,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  LinearProgress,
  TableSortLabel,
  WithStyles,
} from '@material-ui/core';

import tableStyle from './tableStyle';
import { Category } from '../../types';
import { formatDate } from '../../../../../utils/formatDate';

interface Props extends WithStyles<typeof tableStyle> {
  order: string;
  orderBy: string;
  handleSort: (e: any, id: string) => void;
  tableHeaders: { [key: string]: any };
  isFetching: boolean;
  categories: Category[];
}

const TableComponent: React.FunctionComponent<Props> = ({
  classes,
  categories,
  order,
  orderBy,
  handleSort,
  tableHeaders,
  isFetching,
}) => {
  const renderTableHead = () => (
    <TableHead>
      <TableRow>
        {tableHeaders.map(({ name, id, padding, numeric }: any) => (
          <TableCell key={name} padding={padding} numeric={numeric}>
            <TableSortLabel
              active={orderBy === id}
              direction={order as any}
              onClick={e => handleSort(e, id)}
            >
              {name}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const renderTableRows = () => {
    if (categories) {
      return categories.map(
        ({ id, name, createdAt, forumCount, updatedAt }) => (
          <Fragment key={id}>
            <TableRow>
              <TableCell>{name}</TableCell>
              <TableCell>{forumCount}</TableCell>
              <TableCell>{formatDate(createdAt)}</TableCell>
              <TableCell>{formatDate(updatedAt)}</TableCell>
            </TableRow>
          </Fragment>
        ),
      );
    }
  };

  return (
    <Fragment>
      <Paper className={classes.root}>
        {isFetching ? (
          <LinearProgress />
        ) : (
          <Table>
            {renderTableHead()}
            <TableBody>{renderTableRows()}</TableBody>
          </Table>
        )}
      </Paper>
    </Fragment>
  );
};

export default withStyles(tableStyle)(TableComponent);
