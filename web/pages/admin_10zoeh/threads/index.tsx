import * as React from 'react'
import Layout from '../../../components/Layout'
import { THREADS_TABLE_HEADERS } from './tableHeaders'
import { Type } from '../components/table/drawer/DrawerContainer'
import { TableContainer } from '../components/table/TableContainer'
import { useQuery } from 'react-apollo'
import { GetAllThreads, GetAllThreadsVariables } from '../../../graphql/generated/GetAllThreads'
import { GET_ALL_THREADS } from '../../../graphql/query/admin/getAllThreads'

interface Props {}

const Threads: React.FunctionComponent<Props> = () => {
  const { data, loading, error } = useQuery<GetAllThreads, GetAllThreadsVariables>(
    GET_ALL_THREADS
  )

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Layout title='Threads | Admin'>
      <TableContainer
        headers={THREADS_TABLE_HEADERS}
        rows={data.threadGetAll.threads}
        type={Type.T}
      />
    </Layout>
  )
}

export default Threads
