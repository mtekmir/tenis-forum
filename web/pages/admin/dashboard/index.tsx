import * as React from 'react';
import Layout from '../../../components/Layout';
import { GetDashboardComponent } from '../../../generated/apolloComponents';
import { LinearProgress } from '@material-ui/core';
import { DashboardView } from './DashboardView';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <Layout title="Admin Dashboard | Tenis Forum">
        <div>Dashboard</div>
        <GetDashboardComponent>
          {({ data, loading, error }) => {
            if (loading) {
              return <LinearProgress />;
            }

            if (data && data.dashboardGet) {
              return <DashboardView dashboard={data.dashboardGet} />;
            }
          }}
        </GetDashboardComponent>
      </Layout>
    );
  }
}

export default Dashboard;
