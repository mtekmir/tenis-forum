import * as React from 'react';

import { GetForumForum } from '../../../../../generated/apolloComponents';
import { ForumTitle, ForumDetails } from './forumDetailStyles';
import { formatDate } from '../../../../../utils/formatDate';
import { TableComponent } from '../../../../../components/table/Table';
import { FORUM_DETAIL_TABLE_HEADERS } from './tableHeaders';

export const ForumContent: React.FC<{ forum: GetForumForum }> = ({
  forum: { id, name, category, threads, createdAt },
}) => (
  <React.Fragment>
    <ForumTitle>
      Forum #{id}
      <span>{name}</span>
    </ForumTitle>
    <ForumDetails>
      <span>CreatedAt: </span>
      {formatDate(createdAt)}
    </ForumDetails>
    <ForumDetails>
      <span>Category Name: </span>
      {category.name}
    </ForumDetails>
    Latest Threads:
    <TableComponent
      headers={FORUM_DETAIL_TABLE_HEADERS}
      linkTo={id => null}
      rows={threads.map(({ owner, ...rest }) => ({
        username: owner.username,
        ...rest,
      }))}
    />
  </React.Fragment>
);
