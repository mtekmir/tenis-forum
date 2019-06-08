import * as React from 'react';
import Layout from '../../../components/Layout';
import { GetDashboardComponent } from '../../../generated/apolloComponents';
import { DashboardView } from './DashboardView';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <Layout title="Admin Dashboard | Tenis Forum">
        <GetDashboardComponent>
          {({ data, loading }) => {
            if (loading) {
              return <div>Loading...</div>;
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
