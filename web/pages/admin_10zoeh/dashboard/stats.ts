import {
  TiNews,
  TiGroup,
  TiMail,
  TiMessages,
  TiDocumentText,
} from 'react-icons/ti';

export const STAT_PROPS = [
  {
    label: 'Categories',
    id: 'categoryCount',
    Icon: TiNews,
    color: '#D56062',
  },
  {
    label: 'Users',
    id: 'userCount',
    Icon: TiGroup,
    color: '#02394A',
  },
  {
    label: 'Forums',
    id: 'forumCount',
    Icon: TiMessages,
    color: '#386FA4',
  },
  {
    label: 'Threads',
    id: 'threadCount',
    Icon: TiDocumentText,
    color: '#DB504A',
  },
  {
    label: 'Posts',
    id: 'postCount',
    Icon: TiMail,
    color: '#DB504A',
  },
];
