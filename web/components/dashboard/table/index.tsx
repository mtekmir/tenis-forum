import * as React from 'react';
import TableBody from './components/tableBody';
import TableHeader from './components/TableHeader';
import { IMenuItem, TableHeaders, Category } from './types';

interface State {
  filterPopoverAnchor: any;
  orderBy: string;
  order: string;
  page: number;
  rowsPerPage: number;
  filters: { [key: string]: string };
}

interface Props {
  filterFor?: string;
  getRows: (args: {
    page: number;
    rowsPerPage: number;
    filters: any;
    orderBy: string;
    order: string;
  }) => void;
  count: number;
  menuItems: IMenuItem[];
  filterProps?: { [key: string]: string };
  isFetching: boolean;
  tableHeaders: TableHeaders[];
  categories: Category[];
}

class TableC extends React.Component<Props, State> {
  public readonly state: State = {
    filterPopoverAnchor: null,
    orderBy: 'name',
    order: 'desc',
    page: 1,
    rowsPerPage: 25,
    filters: {},
  };

  componentDidMount() {
    const { filterFor } = this.props;
    const setState = (orderBy: string) => {
      return this.setState(state => ({ ...state, orderBy }));
    };
    if (filterFor === 'products') {
      setState('name');
    }
    if (filterFor === 'sales') {
      setState('soldDate');
    }
    if (filterFor === 'stockOrders') {
      setState('orderDate');
    }
    if (filterFor === 'stockTransfers') {
      setState('sendDate');
    }
  }

  handleSort = (event: any, property: string) => {
    const { getRows } = this.props;
    const { page, rowsPerPage, filters } = this.state;
    const orderBy = property;
    let order = 'asc';

    if (this.state.orderBy === property && this.state.order === 'asc') {
      order = 'desc';
    }

    this.setState(
      state => ({ ...state, order, orderBy }),
      () => {
        getRows({ page, rowsPerPage, filters, orderBy, order });
      },
    );
  }

  handleClick = (event: any) => {
    this.setState({
      filterPopoverAnchor: event.currentTarget,
    });
  }

  handleClose = () => {
    this.setState({
      filterPopoverAnchor: null,
    });
  }

  onPerPageChange = ({ target: { value } }: React.ChangeEvent<any>) => {
    const { getRows } = this.props;
    this.setState(
      state => ({
        ...state,
        rowsPerPage: value,
      }),
      () => {
        const { page, rowsPerPage, filters, orderBy, order } = this.state;
        getRows({ page, rowsPerPage, filters, orderBy, order });
      },
    );
  }

  onPageChange = (change: number) => {
    const { getRows, count } = this.props;
    const { page, rowsPerPage, filters, orderBy, order } = this.state;
    if (page + change >= 1 && page + change <= Math.ceil(count / rowsPerPage)) {
      this.setState(
        state => ({
          ...state,
          rowsPerPage,
          page: page + change,
        }),
        () => {
          getRows({
            page: this.state.page,
            rowsPerPage,
            filters,
            orderBy,
            order,
          });
        },
      );
    }
  }

  onAddFilter = ({ filterCategory, ...rest }: { [key: string]: any }) => {
    const { getRows } = this.props;
    const { page, rowsPerPage, orderBy, order } = this.state;
    this.setState(
      state => ({
        ...state,
        filters: {
          ...state.filters,
          [filterCategory]: { ...rest },
        },
      }),
      () => {
        getRows({
          page,
          rowsPerPage,
          filters: this.state.filters,
          orderBy,
          order,
        });
        this.handleClose();
      },
    );
  }

  onRemoveFilter = (filterCategory: string) => {
    const { getRows } = this.props;
    const { page, rowsPerPage, filters, orderBy, order } = this.state;
    delete filters[filterCategory];
    const newFilters = this.state.filters;
    this.setState(
      state => ({
        ...state,
        filters: newFilters,
      }),
      () => {
        getRows({
          page,
          rowsPerPage,
          filters: this.state.filters,
          orderBy,
          order,
        });
        this.handleClose();
      },
    );
  }

  render() {
    const {
      order,
      orderBy,
      filterPopoverAnchor,
      filters,
      page,
      rowsPerPage,
    } = this.state;
    const {
      menuItems,
      filterFor,
      count,
      filterProps,
      tableHeaders,
      categories,
    } = this.props;
    return (
      <React.Fragment>
        <TableHeader
          menuItems={menuItems}
          filterFor={filterFor}
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          filterProps={filterProps}
          filterPopoverAnchor={filterPopoverAnchor}
          filters={filters}
          handleClick={this.handleClick}
          handleClose={this.handleClose}
          onPerPageChange={this.onPerPageChange}
          onPageChange={this.onPageChange}
          onAddFilter={this.onAddFilter}
          onRemoveFilter={this.onRemoveFilter}
        />
        <TableBody
          order={order}
          orderBy={orderBy}
          tableHeaders={tableHeaders}
          categories={categories}
          {...this.props}
          handleSort={this.handleSort}
        />
      </React.Fragment>
    );
  }
}

export const Table = TableC;
