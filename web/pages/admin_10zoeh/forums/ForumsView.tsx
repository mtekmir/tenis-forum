import React, { FunctionComponent } from 'react';
import { GetAllForumsForums } from '../../../generated/apolloComponents';
import { TableComponent } from '../../../components/table/Table';
import Layout from '../../../components/Layout';
import { FORUM_TABLE_HEADERS } from './tableHeaders';

interface Props {
  forums: GetAllForumsForums[];
}

export const ForumsView: FunctionComponent<Props> = ({ forums }) => {
  return (
    <Layout title="Categories | Admin">
      <TableComponent headers={FORUM_TABLE_HEADERS} rows={forums} />
    </Layout>
  );
};
