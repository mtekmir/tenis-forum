import React, { FunctionComponent } from 'react';
import {
  GetAllForumsForums,
  GetForumForum,
} from '../../../generated/apolloComponents';
import { TableComponent } from '../../../components/table/Table';
import Layout from '../../../components/Layout';
import { FORUM_TABLE_HEADERS } from './tableHeaders';
import { AddForumContainer } from './components/addForum/AddForumContainer';
import { ApolloClient } from 'apollo-boost';
import {
  DrawerContainer,
  Args,
  Type,
} from '../components/adminDrawer/DrawerContainer';

interface Props {
  forums: GetAllForumsForums[];
  client: ApolloClient<any>;
}

export const ForumsView: FunctionComponent<Props> = ({ forums, client }) => {
  const [args, setArgs] = React.useState<Args>(null);

  const openDetailDrawer = async (id: number) => {
    setArgs({ id, type: Type.F });
  };

  return (
    <Layout title="Categories | Admin">
      <DrawerContainer
        client={client}
        args={args}
      />
      <AddForumContainer />
      <TableComponent
        openDetailDrawer={openDetailDrawer}
        headers={FORUM_TABLE_HEADERS}
        rows={forums}
      />
    </Layout>
  );
};
