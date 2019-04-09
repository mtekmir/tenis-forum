import * as React from 'react';
import {
  withStyles,
  Button,
  Popover,
  Paper,
  List,
  Chip,
  Typography,
  WithStyles,
} from '@material-ui/core';
import { FilterList } from '@material-ui/icons';

import FilterPopover from './components/filterPopover';
import filterStyle from './filterStyle';

import {
  PRODUCT_FILTER_OPTIONS,
  SALES_FILTER_OPTIONS,
  STOCK_ORDERS_FILTER_OPTIONS,
  STOCK_TRANSFERS_FILTER_OPTIONS,
  FilterOptions,
} from './components/filterPopover/filterOptions';

interface Props extends WithStyles<typeof filterStyle> {
  onAddFilter: (args: { [key: string]: any }) => void;
  onRemoveFilter: (filterCategory: string) => void;
  handleClick: (e: any) => void;
  handleClose: () => void;
  filterProps: { [key: string]: any };
  filterFor: string;
  anchorEl: any;
  filters: any;
}

class Filter extends React.Component<Props> {
  renderFilterOptions = () => {
    const { onAddFilter, filterFor, filterProps } = this.props;
    const renderOptions = (options: FilterOptions[]) =>
      options.map(({ type, name, filterCategory }) => (
        <FilterPopover
          key={name}
          type={type}
          name={name}
          options={filterProps[name.toLowerCase()]}
          filterCategory={filterCategory}
          onAddFilter={onAddFilter}
        />
      ));

    if (filterFor === 'products') {
      return renderOptions(PRODUCT_FILTER_OPTIONS);
    }

    if (filterFor === 'sales') {
      return renderOptions(SALES_FILTER_OPTIONS);
    }

    if (filterFor === 'stockOrders') {
      return renderOptions(STOCK_ORDERS_FILTER_OPTIONS);
    }

    if (filterFor === 'stockTransfers') {
      return renderOptions(STOCK_TRANSFERS_FILTER_OPTIONS);
    }
  }

  render() {
    const {
      classes,
      anchorEl,
      filters,
      onRemoveFilter,
      handleClose,
      handleClick,
    } = this.props;
    return (
      <React.Fragment>
        <Button onClick={handleClick}>
          <FilterList className={classes.filterIcon} />
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <div>
            <Paper className={classes.filterPaper}>
              <div className={classes.appliedFilters}>
                {!Object.keys(filters).length && (
                  <Typography style={{ padding: 10 }} variant="caption">
                    Add Filters...
                  </Typography>
                )}
                {Object.keys(filters).map(key => {
                  if (!filters[key]) {
                    return;
                  }
                  const { value, name, label } = filters[key];
                  return (
                    <Chip
                      key={value}
                      label={label}
                      onDelete={() => onRemoveFilter(key)}
                      className={classes.filterChip}
                      color="primary"
                    />
                  );
                })}
              </div>
              <List>{this.renderFilterOptions()}</List>
            </Paper>
          </div>
        </Popover>
      </React.Fragment>
    );
  }
}

export default withStyles(filterStyle)(Filter);
