import React from 'react';
import { GetAllPostsPosts } from '../../../../generated/apolloComponents';
import {
  TableComponent,
  TableType,
} from '../../../../components/table/TableComponent';

interface Props {
  posts: GetAllPostsPosts[];
}

const HEADERS = [
  {
    id: 'text',
    label: 'İçerik',
  },
  {
    id: 'threadTitle',
    label: 'Başlık',
  },
];

export const PostsView: React.FC<Props> = ({ posts }) => {
  return <TableComponent rows={posts} type={TableType.P} headers={HEADERS} />;
};
