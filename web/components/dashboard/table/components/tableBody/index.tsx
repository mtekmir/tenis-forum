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

interface Props extends WithStyles<typeof tableStyle> {
  order: string;
  orderBy: string;
  handleSort: (e: any, id: string) => void;
  tableHeaders: { [key: string]: any };
  isFetching: boolean;
}

const TableComponent: React.FunctionComponent<Props> = ({
  classes,
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
    return (
      <Fragment>
        <TableRow hover className={classes.row} />
      </Fragment>
    );
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
