import * as React from 'react';
import { GetAllThreadsThreads } from '../../../generated/apolloComponents';
import Layout from '../../../components/Layout';
import { TableComponent } from '../../../components/table/Table';
import { THREADS_TABLE_HEADERS } from './tableHeaders';

interface Props {
  threads: GetAllThreadsThreads[];
}

export const ThreadsView: React.FunctionComponent<Props> = ({ threads }) => {
  return (
    <Layout title="Threads | Admin">
      <TableComponent headers={THREADS_TABLE_HEADERS} rows={threads} />
    </Layout>
  );
};
