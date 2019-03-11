import { Theme } from '@material-ui/core';
import { PositionProperty } from 'csstype';
import { drawerWidth } from '../Drawer/drawerStyle';

export default (theme: Theme) => ({
  appBar: {
    position: 'fixed' as PositionProperty,
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
    background: 'primary',
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});
