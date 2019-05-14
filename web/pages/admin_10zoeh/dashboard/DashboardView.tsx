import * as React from 'react';
import {
  StatsContainer,
  StatsDiv,
  IconDiv,
  Title,
  Stat,
} from './dashboardStyle';
import { GetDashboardDashboardGet } from '../../../generated/apolloComponents';
import { STAT_PROPS } from './stats';

interface Props {
  dashboard: GetDashboardDashboardGet;
}

export class DashboardView extends React.PureComponent<Props> {
  renderStats = () => {
    const { dashboard } = this.props;
    return STAT_PROPS.map(({ label, id, Icon, color }) => (
      <StatsDiv key={label}>
        <IconDiv style={{ background: color }}>
          <Icon />
        </IconDiv>
        <div>
          <Title>{label}</Title>
          <Stat>{dashboard[id]}</Stat>
        </div>
      </StatsDiv>
    ));
  }

  render() {
    return <StatsContainer>{this.renderStats()}</StatsContainer>;
  }
}
