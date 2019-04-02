import { Theme } from '@material-ui/core';
import { FlexDirectionProperty } from 'csstype';

export default ({ spacing }: Theme) => ({
  postsContainer: {
    display: 'flex',
    flexDirection: 'column' as FlexDirectionProperty,
    padding: spacing.unit * 2,
    borderBottom: '1px solid #8f91ad',
  },
  threadUserDateDiv: {
    display: 'flex',
    padding: spacing.unit,
  },
  threadUserDate_dateDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  threadUserDate_icon: {
    width: 15,
    height: 15,
  },
  newPostContainer: {
    // height: 250,
  },
});
