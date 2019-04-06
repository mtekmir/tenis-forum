import * as React from 'react';
import { Typography, WithStyles, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import paginationStyle from './paginationStyle';
import { GoToPage } from './goToPage';
import { setPagePrefix, setKeys } from './utils';

interface Props extends WithStyles<typeof paginationStyle> {
  count: number;
  getRows: (offset: number) => void;
}

interface State {
  page: number;
}

class PaginationC extends React.PureComponent<Props, State> {
  public readonly state: State = {
    page: 1,
  };

  onPageChange = (page: number) => {
    this.props.getRows((page - 1) * 25);
    this.setState({ page });
  }

  renderPages = () => {
    const { count, classes } = this.props;
    const { page } = this.state;
    const pageCount = Math.ceil(count / 25);

    const btn = (pageNumber: number) => (
      <div
        className={classNames({
          [classes.pageButton]: true,
          [classes.pageButton_selected]: pageNumber === page,
        })}
        onClick={() => this.onPageChange(pageNumber)}
      >
        <Typography>{pageNumber}</Typography>
      </div>
    );

    if (pageCount > 5) {
      const keys = setKeys(page, pageCount);

      return keys.map((key, idx) => {
        if (key === '...') {
          const pagePrefix = setPagePrefix(page, keys, pageCount, idx);
          return (
            <GoToPage
              pageCount={pageCount}
              pagePrefix={pagePrefix}
              onPageChange={this.onPageChange}
            />
          );
        }

        return btn(key as number);
      });
    } else {
      return Array.from(Array(pageCount + 1).keys())
        .slice(1)
        .map(n => <React.Fragment key={n}>{btn(n)}</React.Fragment>);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paginationContainer}>{this.renderPages()}</div>
    );
  }
}

export const Pagination = withStyles(paginationStyle)(PaginationC);
