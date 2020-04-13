import * as React from 'react'

import { formatDate } from '../../../../../../../utils/formatDate'
import { TableComponent } from '../../../TableComponent'
import { FORUM_DETAIL_TABLE_HEADERS } from './tableHeaders'
import { Type, Args } from '../../DrawerContainer'
import { Title, Details } from '../../styles'
import { GetForum_forumGet_forum } from '../../../../../../../generated/GetForum'

interface Props {
  forum: GetForum_forumGet_forum
  getDetail: (args: Args) => void
}

export const ForumContent: React.FC<Props> = ({
  forum: { id, name, category, threads, createdAt },
  getDetail
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
        ...rest
      }))}
    />
  </React.Fragment>
)
