import * as React from 'react';
import { GetAllUsersUsers } from '../../../generated/apolloComponents';
import { USER_TABLE_HEADERS } from './tableHeaders';
import Layout from '../../../components/Layout';
import { TableContainer } from '../../../components/table/TableContainer';
import { Type } from '../../../components/table/drawer/DrawerContainer';

interface Props {
  users: GetAllUsersUsers[];
}

export const UsersView: React.FunctionComponent<Props> = ({ users }) => {
  return (
    <Layout title="Users | Admin">
      <TableContainer headers={USER_TABLE_HEADERS} rows={users} type={Type.U} />
    </Layout>
  );
};
