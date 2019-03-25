import { Theme } from '@material-ui/core';
import { FlexWrapProperty, FlexDirectionProperty } from 'csstype';

export default ({ typography, spacing }: Theme) => ({
  label: {
    fontWeight: 600,
    marginTop: spacing.unit * 2,
  },
  input: {
    width: '100%',
  },
  dropzone: {
    width: 192,
    height: 192,
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
    width: 192,
    height: 192,
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
  buttomDiv: {
    marginTop: 60,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
