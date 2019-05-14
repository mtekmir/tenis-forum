import { Header } from '../../../components/table/Table';

export const FORUM_TABLE_HEADERS: Header[] = [
  {
    id: 'name',
    label: 'Name',
    width: 60,
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
    id: 'threadCount',
    label: 'Threads',
    numeric: true,
    width: 10,
  },
];
