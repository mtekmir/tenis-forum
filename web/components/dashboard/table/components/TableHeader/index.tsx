import * as React from 'react';
import { withStyles, Paper, WithStyles } from '@material-ui/core';

import Filter from './components/filter';
import { Pagination } from './components/Pagination';
import { TableMenu } from './components/TableMenu';
import tableHeaderStyle from './tableHeaderStyle';
import { IMenuItem } from '../..';

interface Props extends WithStyles<typeof tableHeaderStyle> {
  filterPopoverAnchor: any;
  filters: { [key: string]: string };
  page: number;
  rowsPerPage: number;
  menuItems: IMenuItem[];
  count: number;
  filterProps: { [key: string]: any };
  filterFor: string;
  onAddFilter: (args: { [key: string]: any }) => void;
  onRemoveFilter: (filterCategory: string) => void;
  handleClick: (e: any) => void;
  handleClose: () => void;
  onPerPageChange: (e: any) => void;
  onPageChange: (change: number) => void;
}

const TableHeaderComponent: React.FunctionComponent<Props> = ({
  page,
  rowsPerPage,
  filters,
  filterPopoverAnchor,
  menuItems,
  classes,
  count,
  filterProps,
  filterFor,
  onAddFilter,
  onRemoveFilter,
  handleClick,
  handleClose,
  onPerPageChange,
  onPageChange,
}) => {
  return (
    <Paper className={classes.menuDiv}>
      <Filter
        filterFor={filterFor}
        filterProps={filterProps}
        filters={filters}
        onAddFilter={onAddFilter}
        onRemoveFilter={onRemoveFilter}
        anchorEl={filterPopoverAnchor}
        handleClick={handleClick}
        handleClose={handleClose}
      />
      <Pagination
        onPerPageChange={onPerPageChange}
        onPageChange={onPageChange}
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
      />
      {menuItems && <TableMenu menuItems={menuItems} />}
    </Paper>
  );
};

export default withStyles(tableHeaderStyle)(TableHeaderComponent);
