import { Theme } from '@material-ui/core';
import { FlexWrapProperty, FlexDirectionProperty } from 'csstype';
import spacing from '@material-ui/core/styles/spacing';

const imageWidth = (breakpoints: any) => ({
  [breakpoints.up('md')]: {
    width: 192,
    height: 192,
  },
  [breakpoints.down('md')]: {
    width: 140,
    height: 140,
  },
});
export default ({ typography, breakpoints }: Theme) => ({
  dropzone: {
    ...imageWidth(breakpoints),
    '&:focus': {
      outline: 'none',
    },
  },
  hideDropzoneHoverContent: {
    display: 'none',
  },
  dropzoneHoverContentDiv: {
    display: 'flex',
    flexWrap: 'wrap' as FlexWrapProperty,
    alignItems: 'center',
    justifyContent: 'center',
    ...imageWidth(breakpoints),
    '&:hover': {
      boxShadow: '0px 0px 0px 5px #1d9bd1 inset',
    },
  },
  dropzoneHoverText: {
    fontWeight: 600,
    fontSize: typography.subtitle1.fontSize,
    color: '#fff',
  },
  dropzoneHoverIcon: {
    [breakpoints.up('md')]: {
      width: 50,
      height: 50,
    },
    [breakpoints.down('md')]: {
      width: 35,
      height: 35,
    },
    color: '#fff',
    paddingTop: spacing.unit,
  },
  dropzoneHoverInnerDiv: {
    [breakpoints.up('md')]: {
      width: 120,
      height: 120,
    },
    [breakpoints.down('md')]: {
      width: 80,
      height: 80,
    },
    display: 'flex',
    flexDirection: 'column' as FlexDirectionProperty,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
