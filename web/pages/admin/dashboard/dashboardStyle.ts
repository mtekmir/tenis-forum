import { Theme } from '@material-ui/core';
import { PositionProperty } from 'csstype';

export default ({ breakpoints }: Theme) => ({
  statsContainer: {
    display: 'flex',
  },
  statDiv: {
    background: '#fff',
    [breakpoints.down('sm')]: {},
    width: '100%',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    position: 'relative' as PositionProperty,
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit * 4,
    marginBottom: 0,
  },
  iconDiv: {
    padding: theme.spacing.unit * 2,
    marginTop: -theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 62,
    height: 62,
    borderRadius: 3,
  },
  icon: {
    color: '#fff',
    width: 50,
    heigth: 50,
  },
  statLabel: {
    margin: theme.spacing.unit * 2,
  },
  stat: {
    margin: theme.spacing.unit * 2,
  },
});
