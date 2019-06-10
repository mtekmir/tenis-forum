import React from 'react';
import styled from 'styled-components';
import { GetAllThreadsThreads } from '../../../../generated/apolloComponents';
import {
  TableComponent,
  TableType,
} from '../../../../components/table/TableComponent';

interface Props {
  threads: GetAllThreadsThreads[];
}

const HEADERS = [
  {
    id: 'title',
    label: 'Başlık',
  },
  {
    id: 'postCount',
    label: 'Cevaplar',
  },
];

export const ThreadsView: React.FC<Props> = ({ threads }) => {
  return (
    <Styles>
      <TableComponent headers={HEADERS} rows={threads} type={TableType.T} />
    </Styles>
  );
};

const Styles = styled.div`
  thead > tr {
    font-size: 1.5em;
  }

  tbody > tr {
    font-size: 1.1em;
  }
`;
