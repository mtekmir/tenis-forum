import React, { useContext } from 'react'
import { TableComponent, TableType } from '../../../../components/table/TableComponent'
import { useQuery } from 'react-apollo'
import { GET_ALL_POSTS } from '../../../../graphql/query/admin/getAllPosts'
import { GetAllPosts, GetAllPostsVariables } from '../../../../generated/GetAllPosts'
import { UserContext } from '../../../../context/userContext'
import { FilterBy } from '../../../../generated/globalTypes'

interface Props {}

const HEADERS = [
  {
    id: 'text',
    label: 'İçerik'
  },
  {
    id: 'threadTitle',
    label: 'Başlık'
  }
]

export const UserPosts: React.FC<Props> = () => {
  const { user } = useContext(UserContext)
  const { data, loading } = useQuery<GetAllPosts, GetAllPostsVariables>(GET_ALL_POSTS, {
    variables: { id: user.id, filterBy: FilterBy.USER }
  })
  if (loading) {
    return null
  }
  return <TableComponent rows={data.postGetAll.posts} type={TableType.P} headers={HEADERS} />
}
