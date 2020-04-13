import React from 'react'
import { StatsContainer, StatsDiv, IconDiv, Title, Stat } from './dashboardStyle'
import { STAT_PROPS } from './stats'
import { useQuery } from 'react-apollo'
import { GET_DASHBOARD } from '../../../graphql/query/getDashboard'
import { GetDashboard } from '../../../generated/GetDashboard'
import Layout from '../../../components/Layout'

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const { data, error, loading } = useQuery<GetDashboard>(GET_DASHBOARD)
  if (loading || !data) {
    return <div>Loading...</div>
  }

  const renderStats = () => {
    return STAT_PROPS.map(({ label, id, Icon, color }) => (
      <StatsDiv key={label}>
        <IconDiv style={{ background: color }}>
          <Icon />
        </IconDiv>
        <div>
          <Title>{label}</Title>
          <Stat>{(data.dashboardGet as any)[id]}</Stat>
        </div>
      </StatsDiv>
    ))
  }

  return (
    <Layout title='Dashboard | Tenis Forum'>
      <StatsContainer>{renderStats()}</StatsContainer>
    </Layout>
  )
}

export default Dashboard
