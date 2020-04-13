import React from 'react'
import { CATEGORY_TABLE_HEADERS } from './categoryTableMenuItems'
import Layout from '../../../components/Layout'
import { TableContainer } from '../components/table/TableContainer'
import { Type } from '../components/table/drawer/DrawerContainer'
import { useQuery } from 'react-apollo'
import { GET_ALL_CATEGORY_SUMMARY } from '../../../graphql/query/admin/getAllCategorySummary'
import { GetAllCategorySummary } from '../../../generated/GetAllCategorySummary'
import { CreateCategory } from './components/createCategory'

interface Props {}

const Categories: React.FC<Props> = () => {
  const { data, loading, error } = useQuery<GetAllCategorySummary>(GET_ALL_CATEGORY_SUMMARY)

  if (loading || !data) {
    return <div>Loading</div>
  }

  return (
    <Layout title='Categories | Admin'>
      <CreateCategory />
      <TableContainer
        headers={CATEGORY_TABLE_HEADERS}
        rows={data.categoryGetSummaryAll.categories}
        type={Type.C}
      />
    </Layout>
  )
}

export default Categories
