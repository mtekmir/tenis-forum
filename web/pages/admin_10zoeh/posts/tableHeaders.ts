import { Header } from '../components/table/TableComponent';

export const POSTS_TABLE_HEADERS: Header[] = [
  {
    id: 'threadTitle',
    label: 'Thread',
    width: 50,
  },
  {
    id: 'createdAt',
    label: 'Created',
    date: true,
    width: 30,
  },
  {
    id: 'authorUsername',
    label: 'Author',
    width: 20,
  },
];
