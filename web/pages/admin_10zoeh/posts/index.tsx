import * as React from 'react'
import Layout from '../../../components/Layout'
import { POSTS_TABLE_HEADERS } from './tableHeaders'
import { TableContainer } from '../components/table/TableContainer'
import { Type } from '../components/table/drawer/DrawerContainer'
import { useQuery } from 'react-apollo'
import { GET_ALL_POSTS } from '../../../graphql/query/admin/getAllPosts'
import { GetAllPosts, GetAllPostsVariables } from '../../../generated/GetAllPosts'

interface Props {}

const Posts: React.FunctionComponent<Props> = () => {
  const { data, loading, error } = useQuery<GetAllPosts, GetAllPostsVariables>(GET_ALL_POSTS)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Layout title='Posts | Admin'>
      <TableContainer
        headers={POSTS_TABLE_HEADERS}
        rows={data.postGetAll.posts}
        type={Type.P}
      />
    </Layout>
  )
}

export default Posts
