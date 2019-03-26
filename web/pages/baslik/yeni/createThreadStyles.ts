import { Theme } from '@material-ui/core';

export default ({ spacing }: Theme) => ({
  root: {
    padding: spacing.unit * 5,
    margin: spacing.unit,
  },
});
