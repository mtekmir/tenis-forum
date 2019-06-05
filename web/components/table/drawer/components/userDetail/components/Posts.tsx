import * as React from 'react';
import { Args, Type } from '../../../DrawerContainer';
import { GetAllPostsComponent } from '../../../../../../generated/apolloComponents';
import { TableComponent, Header } from '../../../../Table';

interface Props {
  userId: string;
  getDetail: (args: Args) => void;
}

const HEADERS: Header[] = [
  {
    id: 'text',
    label: 'Text',
  },
  {
    id: 'threadId',
    label: 'ThreadId',
  },
];

export const Posts: React.FunctionComponent<Props> = ({
  userId,
  getDetail,
}) => {
  return (
    <GetAllPostsComponent variables={{ id: userId }}>
      {({ data, loading }) => {
        if (loading) return <div>Loading...</div>;
        if (data && data.postGetAll) {
          return (
            <TableComponent
              rows={data.postGetAll.posts}
              headers={HEADERS}
              type={Type.P}
              getDetail={getDetail}
            />
          );
        }
        return null;
      }}
    </GetAllPostsComponent>
  );
};
