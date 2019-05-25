import * as React from 'react';
import { GetThreadThread } from '../../../../../generated/apolloComponents';
import { Args, Type } from '../../DrawerContainer';
import { Title, Details } from '../../styles';
import { formatDate } from '../../../../../utils/formatDate';
import { TableComponent } from '../../../Table';
import { THREAD_DETAIL_TABLE_HEADERS } from './tableHeaders';

interface Props {
  thread: GetThreadThread;
  getDetail: (args: Args) => void;
}

export const ThreadContent: React.FC<Props> = ({
  thread: { id, posts, title, owner, createdAt },
  getDetail,
}) => (
  <React.Fragment>
    <Title>
      Thread #{id}
      <span>{title}</span>
    </Title>
    <Details>
      <span>CreatedAt: </span>
      {formatDate(createdAt)}
    </Details>
    <Details>
      <span>Owner Username: </span>
      {owner.username}
    </Details>
    Latest Posts:
    <TableComponent
      type={Type.P}
      headers={THREAD_DETAIL_TABLE_HEADERS}
      getDetail={args => getDetail(args)}
      rows={posts.map(({ author, ...rest }) => ({
        username: author.username,
        ...rest,
      }))}
    />
  </React.Fragment>
);
