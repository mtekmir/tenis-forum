import * as React from 'react';
import { withStyles, WithStyles, Tooltip, Typography } from '@material-ui/core';
import dashboardStyle from './dashboardStyle';
import { GetDashboardDashboardGet } from '../../../generated/apolloComponents';
import { STAT_PROPS } from './stats';

interface Props extends WithStyles<typeof dashboardStyle> {
  dashboard: GetDashboardDashboardGet;
}

class DashboardViewC extends React.PureComponent<Props> {
  renderStats = () => {
    const { classes, dashboard } = this.props;
    return STAT_PROPS.map(({ label, id, Icon, color }) => (
      <div className={classes.statDiv} key={label}>
        <div className={classes.iconDiv} style={{ background: color }}>
          <Tooltip title={label}>
            <Icon className={classes.icon} />
          </Tooltip>
        </div>
        <div>
          <Typography
            variant="subheading"
            align="right"
            className={classes.statLabel}
            style={{ color: '#757575' }}
          >
            {label}
            <Typography variant="title" align="right" className={classes.stat}>
              {dashboard[id]}
            </Typography>{' '}
          </Typography>
        </div>
      </div>
    ));
  }

  render() {
    return <div>{this.renderStats()}</div>;
  }
}

export const DashboardView = withStyles(dashboardStyle)(DashboardViewC);
