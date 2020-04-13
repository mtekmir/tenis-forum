import React, { FunctionComponent } from 'react'
import Layout from '../../../components/Layout'
import { FORUM_TABLE_HEADERS } from './tableHeaders'
import { TableContainer } from '../components/table/TableContainer'
import { Type } from '../components/table/drawer/DrawerContainer'
import { useQuery } from 'react-apollo'
import { GET_ALL_FORUMS } from '../../../graphql/query/admin/getAllForums'
import { GetAllForums } from '../../../generated/GetAllForums'
import { AddForum } from './components/addForum'

interface Props {}

const Forums: FunctionComponent<Props> = () => {
  const { data, error, loading } = useQuery<GetAllForums>(GET_ALL_FORUMS)
  if (loading) {
    return <div>Loading</div>
  }

  return (
    <Layout title='Categories | Admin'>
      <AddForum />
      <TableContainer
        type={Type.F}
        headers={FORUM_TABLE_HEADERS}
        rows={data.forumGetAll.forums}
      />
    </Layout>
  )
}

export default Forums
