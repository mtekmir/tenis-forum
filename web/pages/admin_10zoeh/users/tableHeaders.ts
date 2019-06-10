import { Header } from '../components/table/TableComponent';

export const USER_TABLE_HEADERS: Header[] = [
  {
    id: 'username',
    label: 'Username',
    width: 20,
  },
  {
    id: 'email',
    label: 'Email',
    width: 30,
  },
  {
    id: 'registerDate',
    label: 'Register Date',
    date: true,
    width: 10,
  },
  {
    id: 'threadCount',
    label: 'Threads',
    numeric: true,
    width: 6,
  },
  {
    id: 'postCount',
    label: 'Posts',
    numeric: true,
    width: 6,
  },
];
