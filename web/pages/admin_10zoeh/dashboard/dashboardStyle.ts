import { Theme } from '@material-ui/core';
import { PositionProperty, FlexWrapProperty } from 'csstype';

export default ({ breakpoints, spacing: { unit } }: Theme) => ({
  statsContainer: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap' as FlexWrapProperty,
    justifyContent: 'center',
    margin: '8px auto',
  },
  statDiv: {
    background: '#fff',
    [breakpoints.down('xs')]: {
      width: '40%',
      margin: unit * 2,
    },
    [breakpoints.up('sm')]: {
      width: '40%',
      margin: unit * 3,
    },
    [breakpoints.up('md')]: {
      width: '17%',
      margin: unit * 1.5,
    },
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    position: 'relative' as PositionProperty,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  iconDiv: {
    padding: unit * 2,
    marginTop: -unit * 2,
    marginLeft: unit * 2,
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
    margin: unit * 2,
  },
  stat: {
    margin: unit * 2,
  },
});
