import { Header } from '../components/table/TableComponent';

export const CATEGORY_TABLE_HEADERS: Header[] = [
  {
    label: 'Category Name',
    id: 'name',
    width: 50,
  },
  {
    label: 'Created At',
    id: 'createdAt',
    date: true,
    width: 20,
  },
  {
    label: 'Updated At',
    id: 'updatedAt',
    date: true,
    width: 20,
  },
  {
    label: 'Forums',
    id: 'forumCount',
    numeric: true,
    width: 10,
  },
];

export const CATEGORY_TABLE_MENU = [
  {
    name: 'Add Category',
    path: '#',
  },
];
