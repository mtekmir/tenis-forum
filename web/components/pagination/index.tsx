import * as React from 'react';
import {
  IconButton,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import paginationStyle from './paginationStyle';

interface Props extends WithStyles<typeof paginationStyle> {
  page: number;
  rowCount: number;
}

class PaginationC extends React.PureComponent<Props> {
  onPageChange = (change: number) => {
    console.log(change);
  }

  render() {
    const { classes, page, rowCount } = this.props;
    return (
      <div>
        <IconButton onClick={() => this.onPageChange(-1)}>
          <KeyboardArrowLeft className={classes.paginationIcons} />
        </IconButton>
        <Typography>
          {page} {Math.ceil(rowCount / 25)}
        </Typography>
        <IconButton onClick={() => this.onPageChange(1)}>
          <KeyboardArrowRight className={classes.paginationIcons} />
        </IconButton>
      </div>
    );
  }
}

export const Pagination = withStyles(paginationStyle)(PaginationC);
