import {
  Category,
  Person,
  Forum,
  GroupWork,
  LocalPostOffice,
} from '@material-ui/icons';

export const STAT_PROPS = [
  {
    label: 'Categories',
    id: 'categoryCount',
    Icon: Category,
    color: '#D56062',
  },
  {
    label: 'Users',
    id: 'userCount',
    Icon: Person,
    color: '#02394A',
  },
  {
    label: 'Forums',
    id: 'forumCount',
    Icon: Forum,
    color: '#386FA4',
  },
  {
    label: 'Threads',
    id: 'threadCount',
    Icon: GroupWork,
    color: '#DB504A',
  },
  {
    label: 'Posts',
    id: 'postCount',
    Icon: LocalPostOffice,
    color: '#DB504A',
  },
];
