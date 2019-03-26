import { Theme } from '@material-ui/core';
import { FlexWrapProperty, FlexDirectionProperty } from 'csstype';

const imageWidth = (breakpoints: any) => ({
  [breakpoints.up('md')]: {
    width: '20%',
    height: '20%',
  },
  [breakpoints.down('md')]: {
    width: 130,
    heigth: 130,
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
    width: 50,
    height: 50,
    color: '#fff',
  },
  dropzoneHoverInnerDiv: {
    width: 120,
    height: 120,
    display: 'flex',
    flexDirection: 'column' as FlexDirectionProperty,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
