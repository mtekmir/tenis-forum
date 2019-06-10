import * as React from 'react';
import { GetAllPostsPosts } from '../../../generated/apolloComponents';
import Layout from '../../../components/Layout';
import { POSTS_TABLE_HEADERS } from './tableHeaders';
import { TableContainer } from '../components/table/TableContainer';
import { Type } from '../components/table/drawer/DrawerContainer';

interface Props {
  posts: GetAllPostsPosts[];
}

export const PostsView: React.FunctionComponent<Props> = ({ posts }) => {
  return (
    <Layout title="Posts | Admin">
      <TableContainer
        headers={POSTS_TABLE_HEADERS}
        rows={posts}
        type={Type.P}
      />
    </Layout>
  );
};
