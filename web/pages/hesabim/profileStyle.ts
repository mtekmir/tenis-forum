import { Theme } from '@material-ui/core';
import { FlexDirectionProperty, PositionProperty } from 'csstype';

export default ({ spacing, typography }: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column' as FlexDirectionProperty,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.unit * 10,
  },
  div: {
    width: '100%',
    minHeight: '85vh',
  },
  topDiv: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: -spacing.unit * 3,
  },
  closeDiv: {
    position: 'absolute' as PositionProperty,
    top: 15,
    right: 25,
  },
  closeIcon: {
    width: 30,
    height: 30,
    cursor: 'pointer',
  },
  title: {
    fontWeight: 800,
    fontSize: typography.h5.fontSize,
  },
});
