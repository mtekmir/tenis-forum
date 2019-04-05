import { Theme } from '@material-ui/core';
import { FlexWrapProperty, FlexDirectionProperty } from 'csstype';

export default ({ spacing: { unit }, breakpoints }: Theme) => ({
  postContainer: {
    display: 'flex',
    flexWrap: 'wrap' as FlexWrapProperty,
    padding: unit,
    [breakpoints.down('sm')]: {
      minHeight: 60,
      width: '100%',
      flexDirection: 'column' as FlexDirectionProperty,
    },
    [breakpoints.up('sm')]: {
      height: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row' as FlexDirectionProperty,
      minHeight: 60,
    },
    [breakpoints.up('md')]: {},
  },
  postContent: {
    padding: unit,
    [breakpoints.up('sm')]: {
      width: '80%',
      minHeight: 60,
    },
  },
  postContent_topDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: unit,
  },
  userDiv: {
    [breakpoints.down('xs')]: {
      height: '100%',
      width: '100%',
    },
    [breakpoints.up('sm')]: {
      minHeight: 60,
      width: '20%',
      flexDirection: 'column',
      alignItems: 'center',
    },
    display: 'flex',
    padding: unit,
    background: '#eee',
  },
  username: {
    marginLeft: unit,
  },
  profileImage: {
    [breakpoints.down('xs')]: {
      height: 50,
      width: 50,
    },
    [breakpoints.up('sm')]: {
      height: '70%',
      width: '70%',
    },
  },
});
