import * as React from 'react';
import { GetAllThreadsComponent } from '../../../../../../../../generated/apolloComponents';
import { TableComponent, Header } from '../../../../TableComponent';
import { Type, Args } from '../../../DrawerContainer';

interface Props {
  userId: string;
  getDetail: (args: Args) => void;
}
const HEADERS: Header[] = [
  {
    id: 'title',
    label: 'Title',
  },
  {
    id: 'postCount',
    label: 'Posts',
  },
];

export const Threads: React.FunctionComponent<Props> = ({
  userId,
  getDetail,
}) => {
  return (
    <GetAllThreadsComponent variables={{ id: userId }}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        if (data && data.threadGetAll) {
          return (
            <TableComponent
              rows={data.threadGetAll.threads}
              headers={HEADERS}
              type={Type.T}
              getDetail={getDetail}
            />
          );
        }

        return null;
      }}
    </GetAllThreadsComponent>
  );
};
