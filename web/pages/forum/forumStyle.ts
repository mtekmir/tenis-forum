import { Theme } from '@material-ui/core';
import { FlexDirectionProperty } from 'csstype';

export default ({ spacing }: Theme) => ({
  forumContainer: {
    display: 'flex',
    flexDirection: 'column' as FlexDirectionProperty,
    padding: spacing.unit * 2,
    borderBottom: '1px solid #8f91ad',
  },
  titleDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: spacing.unit * 2,
  },
  ownerDateContainer: {
    display: 'flex',
  },
  topDiv: {
    padding: spacing.unit * 2,
  },
  divider: {
    width: '100%',
    height: 45,
    background: '#efefef',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: spacing.unit,
  },
});
