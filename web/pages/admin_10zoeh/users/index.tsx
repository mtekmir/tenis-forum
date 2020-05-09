import * as React from 'react'
import { USER_TABLE_HEADERS } from './tableHeaders'
import Layout from '../../../components/Layout'
import { TableContainer } from '../components/table/TableContainer'
import { Type } from '../components/table/drawer/DrawerContainer'
import { useQuery } from 'react-apollo'
import { GetAllUsers } from '../../../graphql/generated/GetAllUsers'
import { GET_ALL_USERS } from '../../../graphql/query/admin/getAllUsers'

interface Props {}

const Users: React.FunctionComponent<Props> = () => {
  const { data, loading, error } = useQuery<GetAllUsers>(GET_ALL_USERS)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Layout title='Users | Admin'>
      <TableContainer
        headers={USER_TABLE_HEADERS}
        rows={data.userGetAll.users}
        type={Type.U}
      />
    </Layout>
  )
}

export default Users
