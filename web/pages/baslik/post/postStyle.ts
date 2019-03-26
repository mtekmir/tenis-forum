import { Theme } from '@material-ui/core';
import { FlexWrapProperty, FlexDirectionProperty } from 'csstype';

export default ({ spacing, breakpoints }: Theme) => ({
  postContainer: {
    display: 'flex',
    flexWrap: 'wrap' as FlexWrapProperty,
    padding: spacing.unit,
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
    padding: spacing.unit,
    [breakpoints.up('sm')]: {
      width: '80%',
      minHeight: 60,
    },
  },
  postContent_topDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userDiv: {
    [breakpoints.down('sm')]: {
      height: 60,
      width: '100%',
    },
    [breakpoints.up('sm')]: {
      height: '100%',
      width: '20%',
    },
  },
});
