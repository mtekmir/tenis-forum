import * as React from 'react';

import { GetForumForum } from '../../../../../generated/apolloComponents';
import { formatDate } from '../../../../../utils/formatDate';
import { TableComponent } from '../../../Table';
import { FORUM_DETAIL_TABLE_HEADERS } from './tableHeaders';
import { Type, Args } from '../../DrawerContainer';
import { Title, Details } from '../../styles';

interface Props {
  forum: GetForumForum;
  getDetail: (args: Args) => void;
}

export const ForumContent: React.FC<Props> = ({
  forum: { id, name, category, threads, createdAt },
  getDetail,
}) => (
  <React.Fragment>
    <Title>
      Forum #{id}
      <span>{name}</span>
    </Title>
    <Details>
      <span>CreatedAt: </span>
      {formatDate(createdAt)}
    </Details>
    <Details>
      <span>Category Name: </span>
      {category.name}
    </Details>
    Latest Threads:
    <TableComponent
      type={Type.T}
      headers={FORUM_DETAIL_TABLE_HEADERS}
      getDetail={args => getDetail(args)}
      rows={threads.map(({ owner, ...rest }) => ({
        username: owner.username,
        ...rest,
      }))}
    />
  </React.Fragment>
);
