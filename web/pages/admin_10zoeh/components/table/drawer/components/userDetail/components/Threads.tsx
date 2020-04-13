import React from 'react'
import { TableComponent, Header } from '../../../../TableComponent'
import { Type, Args } from '../../../DrawerContainer'
import { useQuery } from 'react-apollo'
import {
  GetAllThreads,
  GetAllThreadsVariables
} from '../../../../../../../../generated/GetAllThreads'
import { GET_ALL_THREADS } from '../../../../../../../../graphql/query/admin/getAllThreads'

interface Props {
  userId: string
  getDetail: (args: Args) => void
}

const HEADERS: Header[] = [
  {
    id: 'title',
    label: 'Title'
  },
  {
    id: 'postCount',
    label: 'Posts'
  }
]

export const Threads: React.FunctionComponent<Props> = ({ userId, getDetail }) => {
  const { data, loading, error } = useQuery<GetAllThreads, GetAllThreadsVariables>(
    GET_ALL_THREADS,
    { variables: { id: userId } }
  )

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <TableComponent
      rows={data.threadGetAll.threads}
      headers={HEADERS}
      type={Type.T}
      getDetail={getDetail}
    />
  )
}
