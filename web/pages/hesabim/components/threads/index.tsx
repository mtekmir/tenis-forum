import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableComponent, TableType } from '../../../../components/table/TableComponent'
import { useQuery } from 'react-apollo'
import { GET_ALL_THREADS } from '../../../../graphql/query/admin/getAllThreads'
import { GetAllThreads, GetAllThreadsVariables } from '../../../../generated/GetAllThreads'
import { UserContext } from '../../../../context/userContext'
import { FilterBy } from '../../../../generated/globalTypes'

interface Props {}

const HEADERS = [
  {
    id: 'title',
    label: 'Başlık'
  },
  {
    id: 'postCount',
    label: 'Cevaplar'
  }
]

export const UserThreads: React.FC<Props> = () => {
  const { user } = useContext(UserContext)
  const { data, loading } = useQuery<GetAllThreads, GetAllThreadsVariables>(GET_ALL_THREADS, {
    variables: { id: user.id, filterBy: FilterBy.USER }
  })
  if (loading) {
    return null
  }
  return (
    <Styles>
      <TableComponent headers={HEADERS} rows={data.threadGetAll.threads} type={TableType.T} />
    </Styles>
  )
}

const Styles = styled.div`
  thead > tr {
    font-size: 1.5em;
  }

  tbody > tr {
    font-size: 1.1em;
  }
`
