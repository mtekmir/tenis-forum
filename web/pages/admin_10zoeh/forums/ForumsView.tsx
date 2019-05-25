import React, { FunctionComponent } from 'react';
import { GetAllForumsForums } from '../../../generated/apolloComponents';
import Layout from '../../../components/Layout';
import { FORUM_TABLE_HEADERS } from './tableHeaders';
import { AddForumContainer } from './components/addForum/AddForumContainer';
import { TableContainer } from '../../../components/table/TableContainer';
import { Type } from '../../../components/table/drawer/DrawerContainer';

interface Props {
  forums: GetAllForumsForums[];
}

export const ForumsView: FunctionComponent<Props> = ({ forums }) => {
  return (
    <Layout title="Categories | Admin">
      <AddForumContainer />
      <TableContainer
        type={Type.F}
        headers={FORUM_TABLE_HEADERS}
        rows={forums}
      />
    </Layout>
  );
};
