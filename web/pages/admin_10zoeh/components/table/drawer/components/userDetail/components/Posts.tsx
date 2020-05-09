import * as React from 'react'
import { Args, Type } from '../../../DrawerContainer'
import { TableComponent, Header } from '../../../../TableComponent'
import { useQuery } from 'react-apollo'
import {
  GetAllPosts,
  GetAllPostsVariables
} from '../../../../../../../../graphql/generated/GetAllPosts'
import { GET_ALL_POSTS } from '../../../../../../../../graphql/query/admin/getAllPosts'

interface Props {
  userId: string
  getDetail: (args: Args) => void
}

const HEADERS: Header[] = [
  {
    id: 'text',
    label: 'Text'
  },
  {
    id: 'threadId',
    label: 'ThreadId'
  }
]

export const Posts: React.FunctionComponent<Props> = ({ userId, getDetail }) => {
  const { data, loading, error } = useQuery<GetAllPosts, GetAllPostsVariables>(GET_ALL_POSTS, {
    variables: { id: userId }
  })
  if (loading) return <div>Loading...</div>
  return (
    <TableComponent
      rows={data.postGetAll.posts}
      headers={HEADERS}
      type={Type.P}
      getDetail={getDetail}
    />
  )
}
