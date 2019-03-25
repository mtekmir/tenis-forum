import { Theme } from '@material-ui/core';
import { PositionProperty } from 'csstype';

export const drawerWidth = 250;
export default (theme: Theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative' as PositionProperty,
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'fixed' as PositionProperty,
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
    background: 'primary',
  },
  // navIconHide: {
  //   [theme.breakpoints.up('lg')]: {
  //     display: 'none',
  //   },
  // },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    // [theme.breakpoints.up('lg')]: {
    //   position: 'fixed' as PositionProperty,
    // },
    height: '101vh',
    marginLeft: -theme.spacing.unit * 5,
    marginTop: -theme.spacing.unit,
  },
  subMenuItem: {
    background: '#FAFAFA',
    marginLeft: theme.spacing.unit * 2,
  },
  subMenuContent: {
    textDecoration: 'none',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // [theme.breakpoints.up('lg')]: {
    //   marginLeft: drawerWidth - theme.spacing.unit * 5,
    // },
    overflow: 'hidden',
  },
});
