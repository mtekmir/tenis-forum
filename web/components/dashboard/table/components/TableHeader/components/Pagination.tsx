import * as React from 'react';
import {
  MenuItem,
  IconButton,
  Typography,
  Select,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import paginationStyle from './paginationStyle';

interface Props extends WithStyles<typeof paginationStyle> {
  onPerPageChange: (e: any) => void;
  onPageChange: (change: number) => void;
  count: number;
  rowsPerPage: number;
  page: number;
}

const PaginationC: React.FunctionComponent<Props> = ({
  classes,
  onPerPageChange,
  onPageChange,
  count,
  rowsPerPage,
  page,
}) => {
  return (
    <React.Fragment>
      <Select
        value={rowsPerPage}
        onChange={e => onPerPageChange(e)}
        disableUnderline
      >
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
      <div className={classes.pagination}>
        <IconButton onClick={() => onPageChange(-1)}>
          <KeyboardArrowLeft className={classes.paginationIcons} />
        </IconButton>
        <Typography>
          {page} {`of ${Math.ceil(count / rowsPerPage)}`}
        </Typography>
        <IconButton onClick={() => onPageChange(1)}>
          <KeyboardArrowRight className={classes.paginationIcons} />
        </IconButton>
      </div>
    </React.Fragment>
  );
};

export const Pagination = withStyles(paginationStyle)(PaginationC);
