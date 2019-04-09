import { Theme } from '@material-ui/core';

export default ({ spacing }: Theme) => ({
  root: {
    height: '88vh',
    overflow: 'auto',
    marginRight: 1,
  },
  row: {
    cursor: 'pointer',
  },
  variationRow: {
    background: '#FAFAFA',
    height: spacing.unit * 4,
    cursor: 'pointer',
  },
});
