export const PRODUCT_FILTER_OPTIONS: FilterOptions[] = [
  {
    type: 'select',
    name: 'Brands',
    filterCategory: 'brand',
  },
  {
    type: 'select',
    name: 'Categories',
    filterCategory: 'category',
  },
  {
    type: 'text',
    name: 'Price',
    filterCategory: 'price',
  },
  {
    type: 'text',
    name: 'Supply Price',
    filterCategory: 'supplyPrice',
  },
];

export const SALES_FILTER_OPTIONS: FilterOptions[] = [
  {
    type: 'date',
    name: 'Date',
    filterCategory: 'soldDate',
  },
  {
    type: 'select',
    name: 'Stores',
    filterCategory: 'store',
  },
  {
    type: 'text',
    name: 'Total',
    filterCategory: 'total',
  },
];

export const STOCK_ORDERS_FILTER_OPTIONS: FilterOptions[] = [
  {
    type: 'date',
    name: 'Order Date',
    filterCategory: 'orderDate',
  },
  {
    type: 'select',
    name: 'Vendors',
    filterCategory: 'vendor',
  },
  {
    type: 'select',
    name: 'Status',
    filterCategory: 'status',
  },
  {
    type: 'select',
    name: 'Delivery Location',
    filterCategory: 'deliveryLocation',
  },
  {
    type: 'text',
    name: 'Total',
    filterCategory: 'total',
  },
];

export const STOCK_TRANSFERS_FILTER_OPTIONS: FilterOptions[] = [
  {
    type: 'date',
    name: 'Date Sent',
    filterCategory: 'sendDate',
  },
  {
    type: 'select',
    name: 'Transfer From',
    filterCategory: 'transferFrom',
  },
  {
    type: 'select',
    name: 'Transfer To',
    filterCategory: 'transferTo',
  },
  {
    type: 'select',
    name: 'Status',
    filterCategory: 'status',
  },
];

export interface FilterOptions {
  type: string;
  name: string;
  filterCategory: string;
}
