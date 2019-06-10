import * as React from 'react';
import { GetAllThreadsThreads } from '../../../generated/apolloComponents';
import Layout from '../../../components/Layout';
import { THREADS_TABLE_HEADERS } from './tableHeaders';
import { Type } from '../components/table/drawer/DrawerContainer';
import { TableContainer } from '../components/table/TableContainer';

interface Props {
  threads: GetAllThreadsThreads[];
}

export const ThreadsView: React.FunctionComponent<Props> = ({ threads }) => {
  return (
    <Layout title="Threads | Admin">
      <TableContainer
        headers={THREADS_TABLE_HEADERS}
        rows={threads}
        type={Type.T}
      />
    </Layout>
  );
};
