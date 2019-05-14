import * as React from 'react';
import { GetAllUsersUsers } from '../../../generated/apolloComponents';
import { TableComponent } from '../../../components/table/Table';
import { USER_TABLE_HEADERS } from './tableHeaders';
import Layout from '../../../components/Layout';

interface Props {
  users: GetAllUsersUsers[];
}

export const UsersView: React.FunctionComponent<Props> = ({ users }) => {
  return (
    <Layout title="Users | Admin">
      <TableComponent headers={USER_TABLE_HEADERS} rows={users} />
    </Layout>
  );
};
