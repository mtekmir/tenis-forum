import * as React from 'react';
import { GetAllPostsPosts } from '../../../generated/apolloComponents';
import Layout from '../../../components/Layout';
import { TableComponent } from '../../../components/table/Table';
import { POSTS_TABLE_HEADERS } from './tableHeaders';

interface Props {
  posts: GetAllPostsPosts[];
}

export const PostsView: React.FunctionComponent<Props> = ({ posts }) => {
  return (
    <Layout title="Posts | Admin">
      <TableComponent headers={POSTS_TABLE_HEADERS} rows={posts} />
    </Layout>
  );
};
