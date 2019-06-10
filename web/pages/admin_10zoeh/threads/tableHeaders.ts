import { Header } from '../components/table/TableComponent';

export const THREADS_TABLE_HEADERS: Header[] = [
  {
    id: 'title',
    label: 'Title',
    width: 50,
  },
  {
    id: 'createdAt',
    label: 'Created',
    date: true,
    width: 15,
  },
  {
    id: 'updatedAt',
    label: 'Updated',
    date: true,
    width: 15,
  },
  {
    id: 'postCount',
    label: 'posts',
    width: 10,
  },
];
